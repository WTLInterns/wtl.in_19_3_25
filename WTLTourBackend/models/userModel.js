/* eslint-disable no-undef */
const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    journeyDate: {
      type: Date,
      required: true,
    },
    availableSeats: {
      type: Number,
      required: true,
    },
    bookingSeats: {
      type: Number,
      required: true,
    },
    selectedSeats: {
      type: [Number], // Array of selected seat numbers
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', userSchema); // ✅ Ensure correct export
