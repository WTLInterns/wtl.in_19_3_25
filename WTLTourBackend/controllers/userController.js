/* eslint-disable no-undef */
const User = require('../models/userModel'); // ✅ Correct Import

// Create a user booking
const createUserBooking = async (req, res) => {
  const { journeyDate, availableSeats, bookingSeats, selectedSeats } = req.body;

  if (!journeyDate || !availableSeats || !bookingSeats || !selectedSeats) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (bookingSeats > availableSeats) {
    return res.status(400).json({ message: 'Booking seats cannot be greater than available seats' });
  }

  try {
    const userBooking = new User({
      journeyDate,
      availableSeats,
      bookingSeats,
      selectedSeats,
    });

    const savedBooking = await userBooking.save();

    res.status(201).json({
      bookingId: savedBooking._id,
      journeyDate: savedBooking.journeyDate,
      availableSeats: savedBooking.availableSeats,
      bookingSeats: savedBooking.bookingSeats,
      selectedSeats: savedBooking.selectedSeats,
      createdAt: savedBooking.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating booking', error });
  }
};

// Get all user bookings
// const getUserBookings = async (req, res) => {
//   try {
//     const bookings = await User.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching bookings', error });
//   }
// };

module.exports = { createUserBooking };
