const express = require('express');
const { createProduct, getProduct, getById, updateProduct, partiallyUpdateProduct, deleteProduct } = require('../controller/productController');
const router = express.Router();

// Create a Product
router.post('/create',createProduct);

// Get all Products
router.get('/get',getProduct);

// Get Product by ID
router.get('/getById/:id', getById);

// Update Product (PUT)
router.put('/put/:id', updateProduct);

// Partially Update Product (PATCH)
router.patch('/patch/:id', partiallyUpdateProduct);

// Delete Product
router.delete('/delete/:id',deleteProduct );

module.exports = router;
