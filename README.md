# StoreFrontApp sdhshdfg

## Table of Contents
1. [Project Description](#project-description)
2. [Relevant Documentation](#relevant-documentation)
2. [List of API routes](#list-of-API-routes)
3. [Diagrams](#diagrams)
4. [Installation instructions](#installation-instructions)
5. [Usage](#usage)
6. [Contributing Instructions](#contributing-instructions)
7. [Credits and Acknowledgements](#credits-and-acknowledgements)
8. [Licences](#licences)


## Project Description
The aim of this project is to create a seamless user experience for customers of RainforestRetail to solve challenges faced by the fronthouse operation of the company. The main features of the frontend are being able to browse through items, create an order, view your order history, and post reviews as an active customer on the website. The main features of the backend facilitate the functionality of the front end as well as stores customer records. This was created for the C13 capstone project at [Bright Network Technology Academy](https://techacademy.brightnetwork.co.uk/).

### Tech Stack
- Java
- SpringBoot
- PostgreSQL Database
- JavaScript
- HTML
- CSS
- React

### SpringBoot Configuration:
- Maven Project
- Spring Boot: Ver. 3.2.3
- Spring Boot Dev Tools
- Spring Web
- PostgreSQL Driver
- Spring Data JPA

### React Libraries Used:
- react-router-dom
- reactjs-popup

## Relevant Documentation
Link to our business case and our risk register: https://github.com/zakjama0/StoreFrontApp/tree/main/hr


## Functionality
- One-to-many relationhsip between ordered items and items.
- One-to-many relationship between items and reviews.
- One-to-many relationship between ordered items and orders.
- One-to-many relationship between customers and orders.
- One-to-many relationship between customers and reviews.


<<<<<<< HEAD
## List of Api Routes
### Orders
GET all
Get by orderId
GET by customerId
GET costbyorderid
POST an order
PATCH an order

### Items
GET all
GET by orderId

### OrderedItems
Get all
Get by orderId
Get by itemId
POST an ordered item
PATCH an orderedItem
DELETE an orderedItem

### Customers
Get all
GET by customerId
POST a customer
PATCH a customer

### Reviews
GET all
Get byReviewId 
GET by itemId
Get by customerId
GET avgRatingByItemId
POST a review
PATCH a review
DELETE a review
=======
## List of API Routes
### Orders
- GET all
- Get by orderId
- GET by customerId
- GET costbyorderid
- POST an order
- PATCH an order

### Items
- GET all
- GET by orderId

### OrderedItems
- Get all
- Get by orderId
- Get by itemId
- POST an ordered item
- PATCH an orderedItem
- DELETE an orderedItem

### Customers
- Get all
- GET by customerId
- POST a customer
- PATCH a customer

### Reviews
- GET all
- Get byReviewId 
- GET by itemId
- Get by customerId
- GET avgRatingByItemId
- POST a review
- PATCH a review
- DELETE a review
>>>>>>> bfb9bf2bfa6c2d2e9a2579854788c9ee7043217a

## MVP
- Create a landing page for a storefront.
- Display items on the page.
- Create a nav bar and display it on each page.
- Allow customers to place orders through an order form.
- Ability to store customer orders.
- Allow users to view their orders.
- Allow users to edit orders before they are out for delivery.
- Allow user to delete (cancel) an order.
- Functionality to add user reviews
- Add CSS styling.

## Extensions
- Frontend for staff to track trends.
- Registration and login.
- Animations (Vans, stars, etc.).
- Add the ability to post a profile picture.
- Including different product categories.

## Diagrams
## Class Diagrams
![classdiagrams](https://github.com/zakjama0/StoreFrontApp/assets/156658708/e15b4eb8-7e91-4ce5-a4f7-44e04d2ac510)

## Entity Relationship Diagrams
![entityrelationship](https://github.com/zakjama0/StoreFrontApp/assets/156658708/57e5ddeb-894e-4f69-aed7-cb037adc2141)

## Wireframe
![wireframe](https://github.com/zakjama0/StoreFrontApp/assets/156658708/6c1acb6a-f429-4419-b0f2-727d594854f3)

## Component Diagram
![component](https://github.com/zakjama0/StoreFrontApp/assets/156658708/31c74c84-7d84-45b6-8054-08c1e80f67f4)

## Installation Instructions
### Backend
- In the terminal, navigate to the directory you want to copy the repository into. \
- Run the command git clone git@github.com:zakjama0/StoreFrontApp.git
- Run the command git pull to ensure you have the latest version.
- Open the project in the preferred IDE such as IntelliJ.
- In the terminal, create the database called inventory_db by running the command createdb capstone_storefront_db.
- Run the BackendProject file.

### Frontend
- Open the frontend project in the preferred code editor such as VS Code.
- In the terminal install react by entering ```npm i react-router-dom```.
- In the terminal install react by entering ```npm i reactjs-popup```.
- Once installed, you can run ```npm start``` in the terminal to open the react application in the browser.


## Contributing Instructions

Find below our contributing guidelines. By following these guidelines, you'll help us to maintain a high quality codebase and make the review process smoother for everyone.
**1. Fork the Repository:** Create a fork of the Stock_Frontend repository on GitHub.
**2. Create a Branch:** Clone the forked repository to your local machine & create a new branch for your contribution.
**3.Make Changes:** Make your changes to the code & ensure your changes follow our coding style and conventions to ensure uniformity.
**4. Commit Your Changes:** Commit your changes to your local branch with a descriptive commit message.
**5. Push Your Changes:** Push your changes to your forked repository on GitHub.
**6. Create a Pull Request:** Open a pull request from your branch to the main branch of the upstream repository.
**7. Review and Feedback:** We will review your pull request and provide feedback.

## Credits and Acknowledgements
- Birindar Kaur Bahia - Github: https://github.com/BirindarK
- Marvellous Akib- Github: https://github.com/Marv3llous
- Saba Kia - Github: https://github.com/sabaki4
- Tadiwanashe Dzvoti - Github: https://github.com/TDD66
- Zakaria Jama - Github: https://github.com/zakjama0

## Licences
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

