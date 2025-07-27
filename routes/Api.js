const express = require('express');
const router = express.Router();
const ApiController = require('../controllers/Api');

router.get('/contact', ApiController.sendContactForm);



module.exports = router;
