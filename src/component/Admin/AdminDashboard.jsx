"use client"

import { useState, useEffect } from "react";
import axios from "axios";
import "./AdminDashboard.css";

const AdminView = () => {
  const [bookings, setBookings] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [seats, setSeats] = useState([]);
  const [selectedDate, setSelectedDate] = useState("All Dates");

  useEffect(() => {
    fetchBookings();
    initializeSeats();
  }, []);

  // const fetchBookings = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/api/admin/");
  
  //     // Add an incremental ID to each booking
  //     const modifiedBookings = response.data.map((booking, index) => ({
  //       ...booking,
  //       id: index + 1, // Assign sequential numbers (1, 2, 3, ...)
  //     }));
  
  //     setBookings(modifiedBookings);
  //   } catch (error) {
  //     console.error("Error fetching bookings:", error);
  //   }
  // };
  
  const fetchBookings = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/");
    
      // Extract booked seat numbers from all bookings
      const bookedSeats = response.data.flatMap(booking => booking.selectedSeats);
  
      // Add an incremental ID to each booking
      const modifiedBookings = response.data.map((booking, index) => ({
        ...booking,
        id: index + 1, // Assign sequential numbers (1, 2, 3, ...)
      }));
  
      setBookings(modifiedBookings);
  
      // Update seat status based on booked seats
      const updatedSeats = Array.from({ length: 40 }, (_, index) => ({
        id: index + 1,
        status: bookedSeats.includes(index + 1) ? "booked" : "available",
      }));
  
      setSeats(updatedSeats); // Update state with booked seats
  
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };
  
  const initializeSeats = () => {
    const initialSeats = Array(40)
      .fill()
      .map((_, index) => ({
        id: index + 1,
        status: "available",
      }));

    setSeats(initialSeats);
  };

  const handleCancelBooking = async (bookingId) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/delete/${bookingId}`);
      fetchBookings();
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  const filteredBookings =
    selectedDate === "All Dates" ? bookings : bookings.filter((booking) => booking.journeyDate === selectedDate);

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <div className="admin-dashboard">
        <div className="admin-content">
          <div className="booking-management">
            <h2>Booking Management</h2>
            <div className="filter-controls">
              <label>Filter by Date:</label>
              <select value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}>
                <option value="All Dates">All Dates</option>
                {[...new Set(bookings.map((b) => b.journeyDate))].map((date, index) => (
                  <option key={index} value={date}>
                    {date}
                  </option>
                ))}
              </select>
            </div>

            <div className="bookings-table-container">
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Passenger</th>
                    <th>Contact</th>
                    <th>Journey Date</th>
                    <th>Seats</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.length > 0 ? (
                    filteredBookings.map((booking) => (
                      <tr key={booking._id}>
                        <td>{booking._id}</td>
                        <td>{booking.name}</td>
                        <td>
                          {booking.mobile}
                          <br />
                          {booking.email}
                        </td>
                        <td>{booking.journeyDate}</td>
                        <td>{booking.selectedSeats.join(", ")}</td>
                        <td>
                          <button
                            className="cancel-button"
                            onClick={() => handleCancelBooking(booking._id)}
                          >
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6" className="no-bookings">
                        No bookings found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminView;


