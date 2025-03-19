/* eslint-disable no-undef */
const express = require('express');
const { registerUser, loginUser } = require('../controllers/regLoginController');

const router = express.Router();

router.post('/register', registerUser);

router.post('/login', loginUser);


module.exports = router;
