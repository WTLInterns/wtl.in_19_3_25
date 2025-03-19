/* eslint-disable no-undef */
const express = require('express');
const { createUserBooking } = require('../controllers/userController');

const router = express.Router();

// ✅ Correctly defined routes
router.post('/userBooking', createUserBooking);
//router.get('/userBookings', getUserBookings);

module.exports = router;
