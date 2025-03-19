// /* eslint-disable react/prop-types */
// "use client";

// import { useState } from "react";
// import axios from "axios";

// export default function BookingForm({ seatDetails, onSubmit, onClose }) {
//   const [formData, setFormData] = useState({
//     passengerName: "",
//     email: "",
//     mobile: "",
//     journeyDate: "",
//   });

//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!seatDetails || !seatDetails.id) {
//       alert("No seat selected!");
//       return;
//     }

//     if (!formData.passengerName || !formData.email || !formData.mobile || !formData.journeyDate) {
//       alert("All fields are required!");
//       return;
//     }


//     const bookingData = {
//       name: formData.passengerName,
//       email: formData.email,
//       mobile: formData.mobile,
//       journeyDate: formData.journeyDate,
//       selectedSeats: [seatDetails.id], // Ensure seat ID is passed as a string array
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/admin/book", bookingData);
//       console.log("Booking Response:", response.data);
//       onSubmit(response.data); // Call parent callback with booking details
//       alert("Booking Confirmed!");
//     } catch (error) {
//       console.error("Error submitting booking:", error.response?.data?.message || error.message);
//       alert("Booking failed! " + (error.response?.data?.message || "Please try again."));
//     }
//   };

//   return (
//     <div className="modal-overlay">
//       <div className="model">
//         <div className="modal-header">
//           <h2>Book Seat {seatDetails?.id}</h2>
//           <button className="close-button" onClick={onClose}>&times;</button>
//         </div>

//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="passengerName">Passenger Name</label>
//             <input
//               type="text"
//               id="passengerName"
//               name="passengerName"
//               value={formData.passengerName}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="mobile">Mobile Number</label>
//             <input
//               type="tel"
//               id="mobile"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               pattern="[0-9]{10}"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="journeyDate">Journey Date</label>
//             <input
//               type="date"
//               id="journeyDate"
//               name="journeyDate"
//               value={formData.journeyDate}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="form-actions">
//             <button type="submit" className="submit-button">Confirm Booking</button>
//             <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }




/* eslint-disable react/prop-types */

import { useState } from "react";
import axios from "axios";

export default function BookingForm({ seatDetails, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    passengerName: "",
    email: "",
    mobile: "",
    journeyDate: "",
  });

  const [loading, setLoading] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!seatDetails || !seatDetails.id) {
      alert("No seat selected!");
      return;
    }

    if (!formData.passengerName || !formData.email || !formData.mobile || !formData.journeyDate) {
      alert("All fields are required!");
      return;
    }

    const bookingData = {
      name: formData.passengerName,
      email: formData.email,
      mobile: formData.mobile,
      journeyDate: formData.journeyDate,
      selectedSeats: [String(seatDetails.id)], // Ensure seat ID is a string array
    };

    console.log("Booking Data:", bookingData); // Debugging log

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/admin/book", bookingData);
      console.log("Booking Response:", response.data);

      // Reset form on success
      setFormData({
        passengerName: "",
        email: "",
        mobile: "",
        journeyDate: "",
      });

      alert("Booking Confirmed!");
      onSubmit(response.data); // Pass data to parent component
      onClose(); // Close the modal
    } catch (error) {
      console.error("Error submitting booking:", error.response?.data?.message || error.message);
      alert("Booking failed! " + (error.response?.data?.message || "Please try again."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="model">
        <div className="modal-header">
          <h2>Book Seat {seatDetails?.id || "N/A"}</h2>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="passengerName">Passenger Name</label>
            <input
              type="text"
              id="passengerName"
              name="passengerName"
              value={formData.passengerName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[0-9]{10}"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="journeyDate">Journey Date</label>
            <input
              type="date"
              id="journeyDate"
              name="journeyDate"
              value={formData.journeyDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
