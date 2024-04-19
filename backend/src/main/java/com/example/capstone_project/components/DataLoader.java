package com.example.capstone_project.components;

import com.example.capstone_project.models.*;
import com.example.capstone_project.repositories.*;
import com.example.capstone_project.services.OrderService;
import com.example.capstone_project.services.OrderedItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;


@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    OrderedItemRepository orderedItemRepository;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    OrderService orderService;

    @Autowired
    OrderedItemService orderedItemService;

    public DataLoader(){

    }

    @Override
    public void run(ApplicationArguments arguments) throws Exception {

        Customer admin = new Customer("Admin Harun", "admin@schrutefarms.com", "admin");
        Customer customer1 = new Customer("Marvellous", "marvellous@schrutefarms.com", "marvellous");
        Customer customer2 = new Customer("Saba", "saba@schrutefarms.com", "saba");
        Customer customer3 = new Customer("Zakaria", "zakaria@schrutefarms.com", "zakaria");
        Customer customer4 = new Customer("Birindar", "birindar@schrutefarms.com", "birindar");
        Customer customer5 = new Customer("Tadiwanashe", "tadiwanashe@schrutefarms.com", "tadiwanashe");
        Customer customer6 = new Customer("Yabbi", "yabbi@schrutefarms.com", "yabbi");

        customerRepository.save(admin);
        customerRepository.save(customer1);
        customerRepository.save(customer2);
        customerRepository.save(customer3);
        customerRepository.save(customer4);
        customerRepository.save(customer5);
        customerRepository.save(customer6);

        Item item1 = new Item("Tadiwa's Cup", "https://m.media-amazon.com/images/I/61QE8zyCMPL.jpg", Category.HOME_AND_KITCHEN, 50, 300, "A cup.");
        Item item2 = new Item("Zak's Iron", "https://www.reliancedigital.in/wp-content/uploads/2018/07/Dry-irons.jpg", Category.HOME_AND_KITCHEN, 25, 20000, "An iron.");
        Item item3 = new Item("Saba's Electric Scooter", "https://i.ebayimg.com/images/g/TqgAAOSwluJlMPuk/s-l1200.webp", Category.ELECTRONICS, 10, 27900, "Saba's height adjusted electric scooter.");
        Item item4 = new Item("Marvellous' Eyeliner", "https://picture.drhauschka.co.uk/media/image/be/ed/76/3134663-liquid-eyeliner-container-01-01-420005981.jpg", Category.BEAUTY_AND_WELLNESS, 100, 1299, "Marvellous' eyeliner.");
        Item item5 = new Item("Surrounded By Idiots", "https://res.cloudinary.com/pippa/image/fetch/h_750,w_750,f_auto/https://assets.pippa.io/shows/6176c02d8283c6a671a7218a/1652182907840-e24d2e84efececbb30ebf4621d6ddc94.jpeg", Category.BOOKS, 1, 999, "Book that described Birindar's capstone project experience.");
        Item item6 = new Item("Tadiwa's Wig", "https://m.media-amazon.com/images/I/61oeNBfFHBL._AC_UF1000,1000_QL80_.jpg", Category.BEAUTY_AND_WELLNESS, 50, 999, "Wigs that will make you look beautiful.");
        Item item7 = new Item("Time of my Life", "https://m.media-amazon.com/images/I/711H10fgD+L._AC_UF894,1000_QL80_.jpg", Category.BOOKS, 1, 1229, "Book that described Saba's capstone project experience.");
        Item item8 = new Item("Birindar's second screen", "https://cdn.thewirecutter.com/wp-content/media/2021/05/27-inch-monitor-2048px-1572.jpg", Category.ELECTRONICS, 1, 9999, "To help with your programming problems.");
        Item item9 = new Item("Zakaria's Leather Jacket", "https://www.pngall.com/wp-content/uploads/4/Black-Leather-Jacket-PNG-Image.png", Category.FASHION, 1, 799, "Ready for NY fashion week.");
        Item item10 = new Item("EA Sport FC 25", "https://www.fifplay.com/img/public/fc-25.jpg", Category.VIDEO_GAMES, 1, 3999, "No different from the past year.");
        Item item11 = new Item("Yabbi's Standing Desk", "https://cdn.shopify.com/s/files/1/2710/8782/files/3a3ec3dc-9b59-47ca-b129-cb75ccf1ae35_2218d3a5-a28a-4e28-a0b4-93a2fefa7a62.jpg", Category.ELECTRONICS, 1, 34900, "Just a standing desk.");
        Item item12 = new Item("Arsenal Hat", "https://www.stadionshop.com/media/catalog/product/cache/61f82b9c716a2869aa27bf290bb56a69/1/3/13682_arsenal_zimska_kapa.png", Category.FASHION, 100, 2399, "Beautiful hat for every occasion.");

        itemRepository.save(item1);
        itemRepository.save(item2);
        itemRepository.save(item3);
        itemRepository.save(item4);
        itemRepository.save(item5);
        itemRepository.save(item6);
        itemRepository.save(item7);
        itemRepository.save(item8);
        itemRepository.save(item9);
        itemRepository.save(item10);
        itemRepository.save(item11);
        itemRepository.save(item12);


        Item item13 = new Item("Yoga Mat", "https://m.media-amazon.com/images/I/71TDyKXF27L.jpg", Category.BEAUTY_AND_WELLNESS, 30, 999, "High-quality mat for yoga enthusiasts");
        Item item14 = new Item("Stainless Steel Water Bottle", "https://gbsnowsport.com/wp-content/uploads/2023/10/stainless-steel-water-bottle-white-17-oz-back-653795e806839.jpg", Category.HOME_AND_KITCHEN, 80, 299, "Reusable bottle for staying hydrated on the go");
        Item item15 = new Item("Bluetooth Earbuds", "https://i.ebayimg.com/images/g/URYAAOSwNjFioGv2/s-l1200.webp", Category.ELECTRONICS, 20, 1999, "Wireless earbuds for a tangle-free listening experience");
        Item item16 = new Item("Tadiwa's T-Shirt", "https://static.vecteezy.com/system/resources/previews/008/847/318/non_2x/isolated-black-t-shirt-front-free-png.png", Category.FASHION, 150, 499, "Trendy t-shirt with unique graphic prints");
        Item item17 = new Item("Cookware Set", "https://www.prestige.co.uk/cdn/shop/products/76709_1024x.jpg?v=1599816239", Category.HOME_AND_KITCHEN, 10, 4999, "Complete set of cookware for your kitchen");
        Item item18 = new Item("Aromatherapy Diffuser", "https://m.media-amazon.com/images/I/51QK85-OE+L.jpg", Category.BEAUTY_AND_WELLNESS, 40, 1299, "Device for creating a relaxing atmosphere with essential oils");
        Item item19 = new Item("Bluetooth Speaker", "https://cdn11.bigcommerce.com/s-bacysnzeb8/images/stencil/960w/products/1305/5496/dc81b743e0d918c88a23c0680f13e47fd27c4da2__06815.1707320172.jpg", Category.ELECTRONICS, 30, 2999, "Portable speaker for enjoying music anywhere");
        Item item20 = new Item("Leather Wallet", "https://barneysoriginals.com/wp-content/uploads/2021/10/16398_TAN-1.jpg", Category.FASHION, 80, 699, "Classic wallet made from genuine leather");
        Item item21 = new Item("Coffee Maker", "https://m.media-amazon.com/images/I/61jDOCtzNOL.jpg", Category.HOME_AND_KITCHEN, 15, 1999, "Machine for brewing delicious coffee at home");
        Item item22 = new Item("Fitness Tracker", "https://m.media-amazon.com/images/I/51p5eMgd7iL._AC_UF894,1000_QL80_.jpg", Category.BEAUTY_AND_WELLNESS, 50, 1499, "Wearable device to track your daily activity and fitness goals");
        Item item23 = new Item("Gaming Console", "https://media.4rgos.it/i/Argos/0621-m0014-m007-m050-asym-m008-m022-gamingconsoleguide-8349024?w=auto&qlt=50&fmt=auto&noiser=0&fmt.jpeg.interlaced=true&fmt.jp2.qlt=40&", Category.ELECTRONICS, 5, 19999, "Latest gaming console for immersive gaming experiences");
        Item item24 = new Item("Stylish Sunglasses", "https://static.miinto.net/e68d6909ec5d0a5bb4d4662db87d7095.jpg?width=693&height=842", Category.FASHION, 120, 999, "Fashionable sunglasses to protect your eyes from the sun");
        Item item25 = new Item("Electric Kettle", "https://media.madeindesign.com/cdn-cgi/image/fit=pad,background=white,format=webp,width=800,height=800,quality=80/https://media.madeindesign.com/nuxeo/products/c/a/electric-kettle-nordic-kitchen-stainless-steel-oak_madeindesign_303476_original.jpg", Category.HOME_AND_KITCHEN, 25, 899, "Quickly boil water for tea or coffee with this electric kettle");
        Item item26 = new Item("Skincare Set", "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1691683612-the-ordinary-the-balance-set-64d4fda6d2aa9.jpg?crop=1xw:1xh;center,top&resize=980:*", Category.BEAUTY_AND_WELLNESS, 40, 1999, "Complete set of skincare products for a radiant complexion");
        Item item27 = new Item("Wireless Mouse", "https://www.hp.com/gb-en/shop/Html/Merch/Images/c07818878_1750x1285.jpg", Category.ELECTRONICS, 40, 799, "Ergonomic mouse for comfortable and efficient computing");
        Item item28 = new Item("Denim Jeans", "https://d1b5h9psu9yexj.cloudfront.net/45085/Levi---s-Premium-511-Slim-Fit-Men---s-Jeans_20210518-160540_full.jpeg", Category.FASHION, 100, 1299, "Classic denim jeans for everyday wear");
        Item item29 = new Item("Air Purifier", "https://media.4rgos.it/i/Argos/9549517_R_Z001A?w=750&h=440&qlt=70", Category.HOME_AND_KITCHEN, 20, 4999, "Purify the air in your home with this advanced air purifier");
        Item item30 = new Item("Fitness Watch", "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7_hero_09142021_big.jpg.large.jpg", Category.BEAUTY_AND_WELLNESS, 30, 2499, "Smartwatch with fitness tracking features to monitor your health");
        itemRepository.saveAll(Arrays.asList(item13, item14, item15, item16, item17, item18, item19, item20, item21, item22, item23, item24, item25, item26, item27, item28, item29, item30));


        Review review1 = new Review(4, "Great cup.", customer2, item1);
        Review review2 = new Review(4, "Amazing Wig, feels really authentic", customer1, item6);
        Review review3 = new Review(3, "Great game!", customer4, item10);
        Review review4 = new Review(5, "Lasted me 50 years!", customer4, item1);
        Review review5 = new Review(5, "I can't believe I finally found the cup of my dreams. My inner child has been healed now 🥹", customer5, item1);
        Review review6 = new Review(5, "Arsenal is the best team ever! So I love this hat!", customer3, item12);
        Review review7 = new Review(5, "Fantastic hat, fantastic team, must buy!!!", customer1, item12);

        reviewRepository.save(review1);
        reviewRepository.save(review2);
        reviewRepository.save(review3);
        reviewRepository.save(review4);
        reviewRepository.save(review5);
        reviewRepository.save(review6);
        reviewRepository.save(review7);

        NewOrderDTO newOrderDTO1 = new NewOrderDTO(1L, "");
        NewOrderDTO newOrderDTO2 = new NewOrderDTO(1L, "");
        NewOrderDTO newOrderDTO3 = new NewOrderDTO(2L, "");
        NewOrderDTO newOrderDTO4 = new NewOrderDTO(3L, "");
        NewOrderDTO newOrderDTO5 = new NewOrderDTO(4L, "");
        NewOrderDTO newOrderDTO6 = new NewOrderDTO(5L, "");
        NewOrderDTO newOrderDTO7 = new NewOrderDTO(6L, "");

        Order order1 = orderService.saveOrder(newOrderDTO1);
        Order order2 = orderService.saveOrder(newOrderDTO2);
        Order order3 = orderService.saveOrder(newOrderDTO3);
        Order order4 = orderService.saveOrder(newOrderDTO4);
        Order order5 = orderService.saveOrder(newOrderDTO5);
        Order order6 = orderService.saveOrder(newOrderDTO6);
        Order order7 = orderService.saveOrder(newOrderDTO7);
    }
}
