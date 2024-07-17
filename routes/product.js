const express = require('express');
const router = express.Router();
 // Adjust the path as per your project structure

// POST - Create a new product
router.post('/products', async (req, res) => {
    const { product_name, product_type, price, unit } = req.body;

    try {
        const product = new Product({ product_name, product_type, price, unit });
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


const { getProducts, getProduct, createProduct, updateProduct, deleteProduct }
= require('../controller/productController'); 
router.get('/products', getProducts);
router.get('/product/:id', getProduct);
//router.post('/product', createProduct);
// router.put('/product/:id', updateProduct);
// router.delete('/product/:id',  deleteProduct);

module.exports = router;
