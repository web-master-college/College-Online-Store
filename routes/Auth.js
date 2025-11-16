const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/Auth');
// /auth/logout

router.post('/sign-up', AuthController.SignUp);

router.get('/logout', AuthController.logOut);


module.exports = router;
