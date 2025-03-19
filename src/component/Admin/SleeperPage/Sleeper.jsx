"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import "./Sleeperlayout.css";
import Sleeperlayout from "../SleeperPage/Sleeperlayout";
import BookingForm from "../SleeperPage/SlepperBooking"; // Ensure correct import

export default function App() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [date, setDate] = useState(""); // Define `date`
  
  useEffect(() => {
    const fetchBookings = async () => {
      if (!date) return;
      try {
        const url = `http://localhost:5000/api/admin?date=${date}`;
        const response = await axios.get(url);

        // Extract all booked seat numbers from the bookings
        const bookedSeatNumbers = [];
        response.data.forEach((booking) => {
          if (booking.selectedSeats && booking.selectedSeats.length > 0) {
            bookedSeatNumbers.push(...booking.selectedSeats);
          }
        });

        setBookedSeats(bookedSeatNumbers);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, [date]
); // Run when `date` changes

  console.log(bookedSeats)
  // Handle seat selection
  const handleSeatSelect = (seat) => {
    if (!bookedSeats.includes(seat.id)) {
      console.log("Seat selected:", seat);
      setSelectedSeat(seat);
    } else {
      alert("This seat is already booked!");
    }
  };

  // Handle booking confirmation
  const handleBooking = (passengerDetails) => {
    if (selectedSeat) {
      console.log("Booking Details:", passengerDetails);

      setBookedSeats((prev) => [...prev, selectedSeat.id]);
      setSelectedSeat(null);

      alert(`Booking confirmed for ${passengerDetails.passengerName}, Seat: ${selectedSeat.id}`);
    } else {
      alert("No seat selected!");
    }
  };

  return (
    <div className="container">
      <h1>Sleeper Bus Seat Booking</h1>
      
      {/* Date Input Section */}
      <div className="date-picker">
        <label>Select Date: </label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="bus-container">
        <Sleeperlayout onSeatSelect={handleSeatSelect} bookedSeats={bookedSeats} />
      </div>

      {/* Booking Form Section */}
      <div className="booking-container">
        {selectedSeat ? (
          <BookingForm 
            seatDetails={selectedSeat} 
            onSubmit={handleBooking} 
            onClose={() => setSelectedSeat(null)} 
          />
        ) : (
          <div className="placeholder">Please select a seat to book.</div>
        )}
      </div>
    </div>
  );
}
