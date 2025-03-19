/* eslint-disable no-undef */
// /* eslint-disable no-undef */
// // eslint-disable-next-line no-undef
// const Booking = require('../models/bookingModel');
// const sendOrderConfirmationEmail = require("./mailer");


// const createBooking = async (req, res) => {
//   const { name, email, mobile, journeyDate, availableSeats, bookingSeats, selectedSeats } = req.body;

//   // Validate if bookingSeats exceed availableSeats
//   if (bookingSeats > availableSeats) {
//     return res.status(400).json({ message: 'Booking seats cannot be greater than available seats' });
//   }

//   console.log("Received Booking Data:", req.body);

//   try {
//     const booking = new Booking({
//       name,
//       email,
//       mobile,
//       journeyDate,
//       availableSeats,
//       bookingSeats,
//       selectedSeats,
//     });

//     const savedBooking = await booking.save();

//     // Send confirmation email
//     await sendOrderConfirmationEmail(
      // savedBooking.email, // Use savedBooking's email
      // name,
      // mobile,
      // journeyDate,
      // availableSeats,
      // bookingSeats,
      // selectedSeats,
//     );

//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       bookingId: savedBooking._id, // Include Booking ID
//       name: savedBooking.name,
//       email: savedBooking.email,
//       mobile: savedBooking.mobile,
//       journeyDate: savedBooking.journeyDate,
//       availableSeats: savedBooking.availableSeats,
//       bookingSeats: savedBooking.bookingSeats,
//       selectedSeats: savedBooking.selectedSeats,
//       createdAt: savedBooking.createdAt,
//     });

//     // console.log()

//   } catch (error) {
//     console.error("Error creating booking:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };


// // Get all bookings
// const getBookings = async (req, res) => {
//   try {
//     const bookings = await Booking.find();
//     res.json(bookings);
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching bookings', error });
//   }
// };

// // Delete a booking by ID
// const deleteBooking = async (req, res) => {
//   try {
//     const { id } = req.params;

//     // Find and delete the booking
//     const deletedBooking = await Booking.findByIdAndDelete(id);

//     if (!deletedBooking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.status(200).json({ message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };

// // eslint-disable-next-line no-undef
// module.exports = { createBooking, getBookings, deleteBooking };


// This is a suggested implementation for your backend controller
// You'll need to adapt this to your actual backend structure



    // ----------------------------------------------


// eslint-disable-next-line no-undef

  // const Booking = require("../models/bookingModel")
  //  const sendOrderConfirmationEmail = require("./mailer");
  // // Create a new booking
  // exports.createBooking = async (req, res) => {
  //   try {
  //     const { name, email, mobile, journeyDate, selectedSeats, availableSeats, bookingSeats } = req.body

  //     // Check if any of the selected seats are already booked for this date
  //     const existingBookings = await Booking.find({
  //       journeyDate: new Date(journeyDate),
  //       selectedSeats: { $in: selectedSeats },
  //     })

  //     if (existingBookings.length > 0) {
  //       return res.status(400).json({
  //         message: "Some of the selected seats are already booked. Please refresh and try again.",
  //       })
  //     }

  //     const booking = new Booking({
  //       name,
  //       email,
  //       mobile,
  //       journeyDate: new Date(journeyDate),
  //       selectedSeats,
  //       availableSeats,
  //       bookingSeats,
  //     });

  //     const savedBooking = await booking.save()

  //   // Send confirmation email
  //   await sendOrderConfirmationEmail(
  //     savedBooking.email, // Use savedBooking's email
  //     name,
  //     mobile,
  //     journeyDate,
  //     selectedSeats,
  //     availableSeats,
  //     bookingSeats,


  //   );
  //   console.log("email",savedBooking.email)






  //     res.status(201).json(savedBooking)
  //   } catch (error) {
  //     console.error("Error creating booking:", error)
  //     res.status(500).json({ message: "Server error", error: error.message })
  //   }
  // }

  // // Get all bookings, optionally filtered by date
  // exports.getBookings = async (req, res) => {
  //   try {
  //     const { date } = req.query

  //     const query = {}
  //     if (date) {
  //       // Create date range for the specified date (start of day to end of day)
  //       const startDate = new Date(date)
  //       startDate.setHours(0, 0, 0, 0)

  //       const endDate = new Date(date)
  //       endDate.setHours(23, 59, 59, 999)

  //       query.journeyDate = { $gte: startDate, $lte: endDate }
  //     }

  //     const bookings = await Booking.find(query)
  //     res.status(200).json(bookings)
  //   } catch (error) {
  //     console.error("Error fetching bookings:", error)
  //     res.status(500).json({ message: "Server error", error: error.message })
  //   }
  // }

  // // Delete a booking
  // exports.deleteBooking = async (req, res) => {
  //   try {
  //     const booking = await Booking.findByIdAndDelete(req.params.id)

  //     if (!booking) {
  //       return res.status(404).json({ message: "Booking not found" })
  //     }

  //     res.status(200).json({ message: "Booking deleted successfully" })
  //   } catch (error) {
  //     console.error("Error deleting booking:", error)
  //     res.status(500).json({ message: "Server error", error: error.message })
  //   }
  // }


  // ------------------------------------------





//   const Booking = require("../models/bookingModel");
// const sendOrderConfirmationEmail = require("./mailer");

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   try {
//     const { name, email, mobile, journeyDate, selectedSeats, availableSeats, bookingSeats } = req.body;

//     // Check if any of the selected seats are already booked for this date
//     const existingBookings = await Booking.find({
//       journeyDate: new Date(journeyDate),
//       selectedSeats: { $in: selectedSeats },
//     });

//     if (existingBookings.length > 0) {
//       return res.status(400).json({
//         message: "Some of the selected seats are already booked. Please refresh and try again.",
//       });
//     }

//     const booking = new Booking({
//       name,
//       email,
//       mobile,
//       journeyDate: new Date(journeyDate),
//       selectedSeats,
//       availableSeats,
//       bookingSeats,
//     });

//     const savedBooking = await booking.save();

//     // Send confirmation email
//     await sendOrderConfirmationEmail(
//       savedBooking.email, // Use savedBooking's email
//       name,
//       mobile,
//       journeyDate,
//       selectedSeats,
//       availableSeats,
//       bookingSeats,


//     );
//     console.log("email",savedBooking.email)

//     res.status(201).json({
//       success: true,
//       message: "Booking created successfully",
//       booking: savedBooking,
//     });
//   } catch (error) {
//     console.error("Error creating booking:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };





// const Booking = require("../models/bookingModel");
// const sendOrderConfirmationEmail = require("./mailer");

// exports.createBooking = async (req, res) => {
//   try {
//     const { name, email, mobile, journeyDate, selectedSeats,availableSeats,bookingSeats } = req.body;

//     // Validate input
//     if (!name || !email || !mobile || !journeyDate || !selectedSeats?.length) {
//       return res.status(400).json({ message: "All fields are required!" });
//     }

//     // Check if seats are already booked
//     const existingBookings = await Booking.find({
//       journeyDate: new Date(journeyDate).toISOString(),
//       selectedSeats: { $in: selectedSeats },
//     });

//     if (existingBookings.length > 0) {
//       return res.status(400).json({ message: "Selected seats are already booked." });
//     }

//     // Create new booking
//     const booking = new Booking({
//       name,
//       email,
//       mobile,
//       journeyDate: new Date(journeyDate).toISOString(),
//       selectedSeats,
//       availableSeats,
//       bookingSeats,
//     });

//     const savedBooking = await booking.save();
//     console.log("✅ Booking saved:", savedBooking);

//     // Send confirmation email
//     try {
//       await sendOrderConfirmationEmail(savedBooking.email, name, mobile, journeyDate, selectedSeats);
//     } catch (emailError) {
//       console.error("⚠️ Email sending failed:", emailError.message);
//     }

//     res.status(201).json({ success: true, message: "Booking confirmed!", booking: savedBooking });
//   } catch (error) {
//     console.error("❌ Booking error:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };




// // Get all bookings, optionally filtered by date
// exports.getBookings = async (req, res) => {
//   try {
//     const { date } = req.query;

//     const query = {};
//     if (date) {
//       const startDate = new Date(date);
//       startDate.setHours(0, 0, 0, 0);

//       const endDate = new Date(date);
//       endDate.setHours(23, 59, 59, 999);

//       query.journeyDate = { $gte: startDate, $lte: endDate };
//     }

//     const bookings = await Booking.find(query);
//     res.status(200).json(bookings);
//   } catch (error) {
//     console.error("Error fetching bookings:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

// // Delete a booking
// exports.deleteBooking = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndDelete(req.params.id);

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" });
//     }

//     res.status(200).json({ message: "Booking deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting booking:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// };

















const Booking = require("../models/bookingModel")
const sendOrderConfirmationEmail = require("./mailer")

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, mobile, journeyDate, selectedSeats, availableSeats, bookingSeats } = req.body

    // Convert selectedSeats to numbers to ensure consistent comparison
    const numericSelectedSeats = selectedSeats.map((seat) => String(seat))

    // Check if any of the selected seats are already booked for this date
    const existingBookings = await Booking.find({
      journeyDate: new Date(journeyDate),
      selectedSeats: { $in: numericSelectedSeats },
    })

    if (existingBookings.length > 0) {
      return res.status(400).json({
        message: "Some of the selected seats are already booked. Please refresh and try again.",
      })
    }

    const booking = new Booking({
      name,
      email,
      mobile,
      journeyDate: new Date(journeyDate),
      selectedSeats: numericSelectedSeats, // Store as numbers
      availableSeats,
      bookingSeats,
    })

    const savedBooking = await booking.save()

    // Send confirmation email
    await sendOrderConfirmationEmail(
      savedBooking.email, // Use savedBooking's email
      name,
      mobile,
      journeyDate,
      selectedSeats,
      availableSeats,
      bookingSeats,
    )
    console.log("email", savedBooking.email)

    res.status(201).json(savedBooking)
  } catch (error) {
    console.error("Error creating booking:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

// Get all bookings, optionally filtered by date
exports.getBookings = async (req, res) => {
  try {
    const { date } = req.query

    const query = {}
    if (date) {
      // Create date range for the specified date (start of day to end of day)
      const startDate = new Date(date)
      startDate.setHours(0, 0, 0, 0)

      const endDate = new Date(date)
      endDate.setHours(23, 59, 59, 999)

      query.journeyDate = { $gte: startDate, $lte: endDate }
    }

    const bookings = await Booking.find(query)
    res.status(200).json(bookings)
  } catch (error) {
    console.error("Error fetching bookings:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndDelete(req.params.id)

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" })
    }

    res.status(200).json({ message: "Booking deleted successfully" })
  } catch (error) {
    console.error("Error deleting booking:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

