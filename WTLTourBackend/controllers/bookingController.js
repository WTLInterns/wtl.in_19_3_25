// const Booking = require("../models/bookingModel")
// const sendOrderConfirmationEmail = require("./mailer")

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   try {
//     const { name, email, mobile, journeyDate, selectedSeats, availableSeats, bookingSeats } = req.body

//     // Convert selectedSeats to numbers to ensure consistent comparison
//     const numericSelectedSeats = selectedSeats.map((seat) => String(seat))

//     // Check if any of the selected seats are already booked for this date
//     // Only check bookings that are pending or accepted (not cancelled ones)
//     const existingBookings = await Booking.find({
//       journeyDate: new Date(journeyDate),
//       selectedSeats: { $in: numericSelectedSeats },
//       status: { $in: ["pending", "accepted"] },
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
//       selectedSeats: numericSelectedSeats, // Store as numbers
//       availableSeats,
//       bookingSeats,
//       status: "pending", // Default status
//     })

//     const savedBooking = await booking.save()

//     // Send confirmation email
//     await sendOrderConfirmationEmail(
//       savedBooking.email, // Use savedBooking's email
//       name,
//       mobile,
//       journeyDate,
//       selectedSeats,
//       availableSeats,
//       bookingSeats,
//     )
//     console.log("email", savedBooking.email)

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

// // Accept a booking
// exports.acceptBooking = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "accepted" }, { new: true })

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" })
//     }

//     // Send acceptance email to customer
//     await sendOrderConfirmationEmail(
//       booking.email,
//       booking.name,
//       booking.mobile,
//       booking.journeyDate,
//       booking.selectedSeats,
//       booking.availableSeats,
//       booking.bookingSeats,
//       true, // Add a parameter to indicate this is an acceptance email
//     )

//     res.status(200).json({ message: "Booking accepted successfully", booking })
//   } catch (error) {
//     console.error("Error accepting booking:", error)
//     res.status(500).json({ message: "Server error", error: error.message })
//   }
// }

// // Delete a booking
// exports.deleteBooking = async (req, res) => {
//   try {
//     // Find the booking first to get its details
//     const booking = await Booking.findById(req.params.id)

//     if (!booking) {
//       return res.status(404).json({ message: "Booking not found" })
//     }

//     // Completely delete the booking from the database
//     await Booking.findByIdAndDelete(req.params.id)

//     // Optionally send cancellation email
//     // await sendCancellationEmail(booking.email, booking.name, booking.journeyDate)

//     res.status(200).json({
//       message: "Booking cancelled and deleted successfully. Seats are now available for booking again.",
//       deletedBooking: booking,
//     })
//   } catch (error) {
//     console.error("Error cancelling booking:", error)
//     res.status(500).json({ message: "Server error", error: error.message })
//   }
// }



const Booking = require("../models/bookingModel")
const sendOrderConfirmationEmail = require("./mailer")

// Create a new booking
exports.createBooking = async (req, res) => {
  try {
    const { name, email, mobile, journeyDate, selectedSeats, availableSeats, bookingSeats } = req.body

    // Convert selectedSeats to numbers to ensure consistent comparison
    const numericSelectedSeats = selectedSeats.map((seat) => String(seat))

    // Check if any of the selected seats are already booked for this date
    // Only check bookings that are pending or accepted (not cancelled ones)
    const existingBookings = await Booking.find({
      journeyDate: new Date(journeyDate),
      selectedSeats: { $in: numericSelectedSeats },
      status: { $in: ["pending", "accepted"] },
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
      status: "pending", // Default status
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

// Accept a booking
exports.acceptBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: "accepted" }, { new: true })

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" })
    }

    // Send acceptance email to customer
    await sendOrderConfirmationEmail(
      booking.email,
      booking.name,
      booking.mobile,
      booking.journeyDate,
      booking.selectedSeats,
      booking.availableSeats,
      booking.bookingSeats,
      true, // Add a parameter to indicate this is an acceptance email
    )

    res.status(200).json({ message: "Booking accepted successfully", booking })
  } catch (error) {
    console.error("Error accepting booking:", error)
    res.status(500).json({ message: "Server error", error: error.message })
  }
}

// Delete a booking
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    // Delete the booking
    await Booking.findByIdAndDelete(req.params.id);

    // Send cancellation email to the user
    await sendOrderConfirmationEmail(
      booking.email,
      booking.name,
      booking.mobile,
      booking.journeyDate,
      booking.selectedSeats.join(", "),
      null,
      null,
      false, // Not an acceptance email
      true // Indicates this is a cancellation email
    );

    res.status(200).json({
      message: "Booking cancelled and deleted successfully. Seats are now available for booking again.",
      deletedBooking: booking,
    });
  } catch (error) {
    console.error("Error cancelling booking:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

