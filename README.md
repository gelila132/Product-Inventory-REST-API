# Product Inventory REST API

Express-based product inventory API project.

# Product Inventory REST API

## 1. Project Overview

The Product Inventory REST API is a backend application built using Node.js and Express.js. It allows users to manage product information and perform inventory-related operations.

The API stores product information in a JavaScript array (in-memory storage).

## 2. Technologies Used

- Node.js
- Express.js
- JavaScript
- Postman
- Nodemon

## 3. Project Structure

```text
Product-Inventory-REST-API/
│
├── app.js
├── package.json
├── package-lock.json
├── README.md
│
├── controllers/
│   └── productController.js
│
├── data/
│   └── products.js
│
└── routes/
    └── productRoutes.js
```

## 4. Installation and Setup

1. Clone or download the project.
2. Open the project folder in a terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

The server runs on:

`http://localhost:3000`

## 5. Product Data Structure

Each product contains:

- `id`: Unique product identifier
- `name`: Product name
- `price`: Product price
- `quantity`: Available stock quantity
- `category`: Product category

## 6. API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/products` | Retrieve all products |
| GET | `/products/:id` | Retrieve a product by ID |
| POST | `/products` | Add a new product |
| PUT | `/products/:id` | Update an existing product |
| DELETE | `/products/:id` | Delete a product |
| GET | `/products/search?name=laptop` | Search products by name |
| GET | `/products/category/:category` | Filter by category |
| GET | `/products/price/:price` | Find products below a price |
| GET | `/products/low-stock` | Find products with quantity below 5 |
| GET | `/products/value` | Calculate total inventory value |

## 7. Example POST Request

Endpoint:

`POST /products`

Request body:

```json
{
  "name": "Keyboard",
  "price": 40,
  "quantity": 10,
  "category": "Electronics"
}
```

## 8. Validation and Error Handling

The API validates product information before creating or updating products.

Validation rules include:

- Product name is required.
- Price must be a positive number.
- Quantity must be a non-negative number.
- Category is required.
- Empty request bodies are not accepted.

The API uses appropriate HTTP status codes, including:

- `200 OK`
- `201 Created`
- `400 Bad Request`
- `404 Not Found`

## 9. Inventory Value Calculation

The API calculates total inventory value using:

`Total Inventory Value = Sum of (Product Price × Product Quantity)`

## 10. Testing

The API endpoints were tested using Postman with different HTTP methods, valid and invalid request bodies, and different product IDs.

## 11. Storage

This project uses in-memory JavaScript array storage. Product changes are not permanently saved and reset when the server restarts.

---

**Project:** Product Inventory REST API  
**Purpose:** Learning and practicing backend development and REST API design.