/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// const mongoose = require('mongoose');

// // Define the schema for booking
// const bookingSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     mobile: {
//       type: String,
//       required: true,
//     },
//     journeyDate: {
//       type: Date,
//       required: true,
//     },
//     availableSeats: {
//       type: Number,
//     },
//     bookingSeats: {
//       type: Number,
//     },
//     selectedSeats: {
//       type: [Number], // Array of selected seat numbers
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Create the Booking model based on the schema
// module.exports = mongoose.model('Booking', bookingSchema);





// const mongoose = require("mongoose");

// // Define the schema for booking
// const bookingSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     mobile: {
//       type: String,
//       required: true,
//     },
//     journeyDate: {
//       type: Date,
//       required: true,
//     },
//     availableSeats: {
//       type: Number,
//     },
//     bookingSeats: {
//       type: Number,
//     },
//     selectedSeats: {
//       type: [Number], // Changed from [Number] to [String] to match frontend seat IDs
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// // Create the Booking model based on the schema
// module.exports = mongoose.model("Booking", bookingSchema);




const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    journeyDate: {
      type: Date,
      required: true,
    },
    availableSeats: {
      type: Number,
    },
    bookingSeats: {
      type: Number,
    },
    selectedSeats: {
      type: [String], // Changed from [Number] to [String] to match frontend seat IDs
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
