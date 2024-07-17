const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// POST - Create a new product
router.post('/', async (req, res) => {
    const { product_name, product_type, price, unit } = req.body;

    try {
        const product = new Product({ product_name, product_type, price, unit });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
