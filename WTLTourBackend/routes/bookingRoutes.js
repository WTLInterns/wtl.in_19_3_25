/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const { createBooking, getBookings, deleteBooking } = require('../controllers/bookingController');

// Route to create a booking
router.post('/book', createBooking);

// Route to get all bookings
router.get('/', getBookings);

// Route to delete booking
router.delete("/delete/:id", deleteBooking);

// eslint-disable-next-line no-undef
module.exports = router;
