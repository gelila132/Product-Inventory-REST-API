
const products = require('../data/products');

// CALCULATE TOTAL INVENTORY VALUE
const getInventoryValue = (req, res) => {
    const total = products.reduce((sum, p) => {
        return sum + (p.price * p.quantity);
    }, 0);

    res.status(200).json({
        totalInventoryValue: total
    });
};


// VALIDATE PRODUCT DATA
const validateProduct = (body) => {
    if (!body || Object.keys(body).length === 0) {
        return false;
    }

    if (typeof body.name !== 'string' || !body.name.trim()) {
        return false;
    }

    if (typeof body.price !== 'number' ||
        !Number.isFinite(body.price) || body.price <= 0) {
        return false;
    }

    if (typeof body.quantity !== 'number' ||
        !Number.isFinite(body.quantity) || body.quantity < 0) {
        return false;
    }

    if (typeof body.category !== 'string' || !body.category.trim()) {
        return false;
    }

    return true;
};

// GET ALL PRODUCTS
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};

// ADD NEW PRODUCT
const addProduct = (req, res) => {

    if (!validateProduct(req.body)) {
    return res.status(400).json({
        message: "Validation failed"
    });
}
    const newProduct = {
        id: Math.max(...products.map(p => p.id)) + 1,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    };

    products.push(newProduct);

    res.status(201).json(newProduct);
};


// GET PRODUCT BY ID
const getProductById = (req, res) => {
    const id = Number(req.params.id);

    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    res.status(200).json(product);
};

// UPDATE PRODUCT
const updateProduct = (req, res) => {
    if (!validateProduct(req.body)) {
    return res.status(400).json({
        message: "Validation failed"
    });
}
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products[index] = {
        id: id,
        name: req.body.name,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    };

    res.status(200).json(products[index]);
};

// DELETE PRODUCT
const deleteProduct = (req, res) => {
    const id = Number(req.params.id);

    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Product not found"
        });
    }

    products.splice(index, 1);

    res.status(200).json({
        message: "Product deleted successfully"
    });
};


// SEARCH PRODUCTS BY NAME
const searchProducts = (req, res) => {
    const name = req.query.name;

    if (!name || !name.trim()) {
        return res.status(400).json({
            message: "Please provide a product name"
        });
    }

    const results = products.filter(p =>
        p.name.toLowerCase().includes(name.toLowerCase())
    );

    res.status(200).json(results);
};

// FILTER PRODUCTS BY CATEGORY
const filterByCategory = (req, res) => {
    const category = req.params.category;

    const results = products.filter(p =>
        p.category.toLowerCase() === category.toLowerCase()
    );

    res.status(200).json(results);
};

// FILTER PRODUCTS BY PRICE
const filterByPrice = (req, res) => {
    const price = Number(req.params.price);

    if (!Number.isFinite(price) || price <= 0) {
        return res.status(400).json({
            message: "Invalid price"
        });
    }

    const results = products.filter(p => p.price < price);

    res.status(200).json(results);
};

// GET LOW-STOCK PRODUCTS
const getLowStockProducts = (req, res) => {
    const results = products.filter(p => p.quantity < 5);

    res.status(200).json(results);
};

// EXPORT FUNCTIONS

// EXPORT FUNCTIONS

module.exports = {
    getAllProducts,
    addProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    searchProducts,
    filterByCategory,
    filterByPrice,
    getLowStockProducts,
    getInventoryValue
};
