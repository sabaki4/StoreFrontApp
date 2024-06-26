package com.example.capstone_project.services;

import com.example.capstone_project.exceptions.CantUpdateOrderException;
import com.example.capstone_project.exceptions.NotEnoughStockException;
import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.ItemRepository;
import com.example.capstone_project.repositories.OrderRepository;
import com.example.capstone_project.repositories.OrderedItemRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class OrderedItemService {

    @Autowired
    OrderedItemRepository orderedItemRepository;
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    ItemRepository itemRepository;

    public Optional<OrderedItem> getById(Long id){
        return orderedItemRepository.findById(id);
    }

    public List<OrderedItem> getAllOrderedItems() {
        return orderedItemRepository.findAll();
    }

    public List<OrderedItem> getOrderedItemsByOrderId(Long orderId) {
            return orderedItemRepository.findOrderedItemsByOrderId(orderId);
    }

    public List<OrderedItem> getOrderedItemsByItemId(Long itemId) {
        return orderedItemRepository.findOrderedItemsByItemId(itemId);
    }

   @Transactional
    public OrderedItem updateOrderedItemById(NewOrderedItemDTO newOrderedItemDTO, Long id) throws Exception{
        OrderedItem orderedItemToUpdate = orderedItemRepository.findById(id).get();
        Item item = orderedItemToUpdate.getItem();
        Order order = orderedItemToUpdate.getOrder();
        if (newOrderedItemDTO.getOrderQuantity() > (item.getQuantity() + orderedItemToUpdate.getOrderedQuantity())){
            throw new NotEnoughStockException("Not enough in stock");
        }
       if(order.getOrderStatus() == OrderStatus.OUT_FOR_DELIVERY || order.getOrderStatus() == OrderStatus.DELIVERED || order.getOrderStatus() == OrderStatus.CANCELLED){
           throw new CantUpdateOrderException("Cannot change order");
       }

       item.addToOrderedItems(newOrderedItemDTO.getOrderQuantity() - orderedItemToUpdate.getOrderedQuantity());
       orderedItemToUpdate.setOrderedQuantity(newOrderedItemDTO.getOrderQuantity());
       itemRepository.save(item);
       orderedItemRepository.save(orderedItemToUpdate);
       return orderedItemToUpdate;
    }

    public Optional<OrderedItem> removeOrderedItem(Long id) {

        Optional<OrderedItem> orderedItem = orderedItemRepository.findById(id);

        if(orderedItem.isEmpty()){
            return null;
        }

        Item item = orderedItem.get().getItem();
        int quantity = orderedItem.get().getOrderedQuantity();

        item.addToOrderedItems(-quantity);
        itemRepository.save(item);
        orderedItemRepository.deleteById(id);
        return orderedItem;
    }

    @Transactional
    public OrderedItem saveOrderedItem(NewOrderedItemDTO newOrderedItemDTO) throws Exception {
        Item item = itemRepository.findById(newOrderedItemDTO.getItemId()).get();
        Order order = orderRepository.findById(newOrderedItemDTO.getOrderId()).get();

        if(newOrderedItemDTO.getOrderQuantity() > item.getQuantity()){
            throw new NotEnoughStockException("Not enough in stock");
        }
        if(order.getOrderStatus() == OrderStatus.OUT_FOR_DELIVERY || order.getOrderStatus() == OrderStatus.DELIVERED || order.getOrderStatus() == OrderStatus.CANCELLED){
            throw new CantUpdateOrderException("Cannot change order");
        }
        OrderedItem orderedItem = new OrderedItem(orderRepository.findById(newOrderedItemDTO.getOrderId()).get(),
                item, newOrderedItemDTO.getOrderQuantity());

        item.addToOrderedItems(newOrderedItemDTO.getOrderQuantity());
        itemRepository.save(item);
        orderedItemRepository.save(orderedItem);
        return orderedItem;
    }

}

