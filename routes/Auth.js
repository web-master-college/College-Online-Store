const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');


router.post('/sign-up', AuthController.SignUp);


module.exports = router;
