
const express = require('express');
const router = express.Router();

const {
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
} = require('../controllers/productController');

router.get('/search', searchProducts);
// GET all products
router.get('/', getAllProducts);

router.get('/category/:category', filterByCategory);

router.get('/price/:price', filterByPrice);

router.get('/low-stock', getLowStockProducts);
router.get('/value', getInventoryValue);
// GET one product
router.get('/:id', getProductById);

// CREATE
router.post('/', addProduct);

// UPDATE
router.put('/:id', updateProduct);

// DELETE
router.delete('/:id', deleteProduct);

module.exports = router;
