const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product')

router.get('/:productId', ProductController.ProductPage);

module.exports = router;
