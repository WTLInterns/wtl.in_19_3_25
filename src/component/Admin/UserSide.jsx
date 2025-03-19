// "use client"

// import { useState, useEffect } from "react"
// import { Bus } from "lucide-react"
// import "./BookingForm.css"

// const UserView = () => {
//   const [selectedPackage, setSelectedPackage] = useState("")
//   const [journeyDate, setJourneyDate] = useState("")
//   const [selectedSeat, setSelectedSeat] = useState("")
//   const [passengerName, setPassengerName] = useState("")
//   const [availableSeat, setAvailableSeat] = useState("")
//   const [bookingSeat, setBookingSeat] = useState("")
//   const [mobile, setMobile] = useState("")
//   const [email, setEmail] = useState("")
//   const [isMobileView, setIsMobileView] = useState(false)
//   const [activeTab, setActiveTab] = useState("form") // 'form' or 'seats'

//   // Seat data
//   const [seats, setSeats] = useState([])

//   useEffect(() => {
//     // Initialize 40 seats (8 rows x 5 seats)
//     const initialSeats = Array(40)
//       .fill()
//       .map((_, index) => ({
//         id: index + 1,
//         status: "available", // available, selected, booked
//       }))

//     // Simulate some booked seats
//     const bookedSeats = [3, 7, 12, 25, 30]
//     const updatedSeats = initialSeats.map((seat) =>
//       bookedSeats.includes(seat.id) ? { ...seat, status: "booked" } : seat,
//     )

//     setSeats(updatedSeats)

//     // Check if mobile view - more precise breakpoint detection
//     const checkResponsiveView = () => {
//       setIsMobileView(window.innerWidth < 768)
//     }

//     // Initial check
//     checkResponsiveView()

//     // Add event listener for window resize with debounce for performance
//     let resizeTimer
//     const handleResize = () => {
//       clearTimeout(resizeTimer)
//       resizeTimer = setTimeout(checkResponsiveView, 100)
//     }

//     window.addEventListener("resize", handleResize)

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize)
//       clearTimeout(resizeTimer)
//     }
//   }, [])

//   const handleSeatClick = (seatId) => {
//     // Only allow selecting available seats
//     if (seats.find((seat) => seat.id === seatId).status === "booked") {
//       return
//     }

//     // Deselect previously selected seat
//     const updatedSeats = seats.map((seat) => {
//       if (seat.status === "selected") {
//         return { ...seat, status: "available" }
//       }
//       if (seat.id === seatId) {
//         return { ...seat, status: seat.status === "available" ? "selected" : "available" }
//       }
//       return seat
//     })

//     setSeats(updatedSeats)

//     // Update selected seat number
//     const newSelectedSeat = updatedSeats.find((seat) => seat.status === "selected")
//     setSelectedSeat(newSelectedSeat ? newSelectedSeat.id : "")

//     // If on mobile, switch to form tab after selecting a seat
//     if (isMobileView) {
//       setActiveTab("form")
//     }
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()

//     // Validate form
//     if (!selectedPackage || !journeyDate || !selectedSeat || !passengerName || !mobile || !email) {
//       alert("Please fill all required fields")
//       return
//     }

//     // Book the selected seat
//     const updatedSeats = seats.map((seat) => (seat.status === "selected" ? { ...seat, status: "booked" } : seat))

//     setSeats(updatedSeats)

//     // Reset form
//     setSelectedPackage("")
//     setJourneyDate("")
//     setSelectedSeat("")
//     setAvailableSeat("")
//     setBookingSeat("")
//     setPassengerName("")
//     setMobile("")
//     setEmail("")
//     // setAddress("")
//     // setPaymentType("Full Payment")
//     // setAdultCount(0)
//     // setChildWithSeat(0)
//     // setChildWithoutSeat(0)
//     // setTotalAmount(0)
//     // setPickupPoint("")
//     // setBoardingHour(0)
//     // setBoardingMinute(0)
//     // setDropPoint("")

//     alert("Booking successful!")
//   }

//   const availableDates = [
//     "07 Mar 2023",
//     "14 Mar 2023",
//     "21 Mar 2023",
//     "28 Mar 2023",
//     "04 Apr 2023",
//     "11 Apr 2023",
//     "18 Apr 2023",
//     "25 Apr 2023",
//     "02 May 2023",
//   ]

//   return (
//     <div className="booking-container">
//       <h1>Bus Ticket Booking</h1>

//       {isMobileView && (
//         <div className="mobile-tabs">
//           <button className={`tab-button ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
//             Booking Form
//           </button>
//           <button
//             className={`tab-button ${activeTab === "seats" ? "active" : ""}`}
//             onClick={() => setActiveTab("seats")}
//           >
//             Select Seat
//           </button>
//         </div>
//       )}

//       <div className="booking-form-container">

//         <div className={`seat-layout ${isMobileView && activeTab !== "seats" ? "hidden" : ""}`}>
//           <div className="bus-front">
//             <Bus size={24} />
//             <span>Driver</span>
//           </div>

//           <div className="seats-container">
//             {seats.map((seat) => (
//               <div key={seat.id} className={`seat ${seat.status}`} onClick={() => handleSeatClick(seat.id)}>
//                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M4 18v3h3v-3h10v3h3v-3h1a2 2 0 002-2V8h-2v8H3V8H1v8a2 2 0 002 2h1zm19-5v-3a2 2 0 00-2-2h-6V4a2 2 0 00-2-2H7a2 2 0 00-2 2v4H3a2 2 0 00-2 2v3h22zm-17-5V4h6v4H6z" />
//                 </svg>
//                 <span>{seat.id}</span>
//               </div>
//             ))}
//           </div>

//           <div className="seat-legend">
//             <div className="legend-item">
//               <div className="seat-icon available"></div>
//               <span>Available</span>
//             </div>
//             <div className="legend-item">
//               <div className="seat-icon selected"></div>
//               <span>Selected</span>
//             </div>
//             <div className="legend-item">
//               <div className="seat-icon booked"></div>
//               <span>Booked</span>
//             </div>
//           </div>

//           {isMobileView && selectedSeat && (
//             <button type="button" className="continue-button" onClick={() => setActiveTab("form")}>
//               Continue with Seat {selectedSeat}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserView



















import { useState } from "react";
import BookingForm from "./SeaterUser";
import AdminDashboard from "./SleeperPage/SlepperUser";
import "./SeatLayout.css"; // External CSS file for styling

const SeatLayout = () => {
  const [view, setView] = useState("user"); // State to manage the current view
  
  return (
    <div className="app-containers">
      <h1>Bus Booking System</h1>
      <div className="button-container">
        <button
          className={`view-button ${view === "user" ? "active" : ""}`}
          onClick={() => setView("user")}
        >
          Ashtavinayak
        </button>
        <button
          className={`view-button ${view === "admin" ? "active" : ""}`}
          onClick={() => setView("admin")}
        >
          View
        </button>
      </div>

      <div className="view-container">
        {view === "user" ? <BookingForm /> : <AdminDashboard />}
      </div>
    </div>
  );
};

export default SeatLayout;