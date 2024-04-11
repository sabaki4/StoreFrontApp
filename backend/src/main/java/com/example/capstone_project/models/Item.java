package com.example.capstone_project.models;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;

    @Column
    private String name;

    @Column
    private String picture;

    @Column
    private Category category;

    @Column
    private int quantity;

    @Column
    private int unitPrice;

    @OneToMany(mappedBy = "item")
    private List<OrderedItem> orderedItems;

    public Item (){
    }

    public Item(long id, String name, String picture, Category category, int quantity, int unitPrice, List<OrderedItem> orderedItems) {
        this.id = id;
        this.name = name;
        this.picture = picture;
        this.category = category;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.orderedItems = orderedItems;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPicture() {
        return picture;
    }

    public void setPicture(String picture) {
        this.picture = picture;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getUnitPrice() {
        return unitPrice;
    }

    public void setUnitPrice(int unitPrice) {
        this.unitPrice = unitPrice;
    }

    public List<OrderedItem> getOrderedItems() {
        return orderedItems;
    }

    public void setOrderedItems(List<OrderedItem> orderedItems) {
        this.orderedItems = orderedItems;
    }
}