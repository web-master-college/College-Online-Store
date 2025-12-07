const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/Api');
const HomeController = require('../controllers/Home');
const ProductController = require('../controllers/Product');

router.get('/contact', ApiController.sendContactForm);
router.get('/products', HomeController.getProducts);
router.get('/products/:productId', ProductController.getProduct);

module.exports = router;
