  // "use client"

  // import { useState, useEffect } from "react"
  // import { Bus } from "lucide-react"
  // import axios from "axios"
  // import "./BookingForm.css"

  // const UserView = () => {
  //   // const [selectedPackage, setSelectedPackage] = useState("")
  //   const [journeyDate, setJourneyDate] = useState("")
  //   const [selectedSeats, setSelectedSeat] = useState([])
  //   const [name, setName] = useState("")
  //   const [mobile, setMobile] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [isMobileView, setIsMobileView] = useState(false)
  //   const [activeTab, setActiveTab] = useState("form")
  //   const [seats, setSeats] = useState([])
  //   const [date] = useState("");
  
  //   useEffect(() => {
  //     const initialSeats = Array(40)
  //       .fill()
  //       .map((_, index) => ({
  //         id: index + 1,
  //         status: "available",
  //       }))

  //     const bookedSeats = [1,2,5,7]
  //     const updatedSeats = initialSeats.map((seat) =>
  //       bookedSeats.includes(seat.id) ? { ...seat, status: "booked" } : seat
  //     )

  //     setSeats(updatedSeats)

  //     const checkResponsiveView = () => {
  //       setIsMobileView(window.innerWidth < 768)
  //     }

  //     checkResponsiveView()

  //     let resizeTimer
  //     const handleResize = () => {
  //       clearTimeout(resizeTimer)
  //       resizeTimer = setTimeout(checkResponsiveView, 100)
  //     }

  //     window.addEventListener("resize", handleResize)

  //     return () => {
  //       window.removeEventListener("resize", handleResize)
  //       clearTimeout(resizeTimer)
  //     }
  //   }, [])

  //   // const handleSeatClick = (seatId) => {
  //   //   const clickedSeat = seats.find((seat) => seat.id === seatId)
  //   //   if (clickedSeat.status === "available") {
  //   //     setSelectedSeat(seatId)
  //   //   }
  //   // }

  //   const handleSeatClick = (seatId) => {
  //     const clickedSeat = seats.find((seat) => seat.id === seatId);
      
  //     if (clickedSeat.status === "available") {
  //       setSelectedSeat((prevSeats) => 
  //         prevSeats.includes(seatId) ? prevSeats.filter(id => id !== seatId) : [...prevSeats, seatId]
  //       );
  //     }
  //   };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!journeyDate || selectedSeats.length === 0 || !name || !mobile || !email) {
  //         alert("Please fill all required fields");
  //         return;
  //     }

  //     try {
  //         const requestData = {
  //             name,
  //             email,
  //             mobile,
  //             journeyDate,
  //             selectedSeats,
  //             availableSeats: 40, // Ensure this is correct
  //             bookingSeats: selectedSeats.length
  //         };

  //         console.log("Sending Data:", requestData); // Debug before sending

  //         const response = await axios.post("http://localhost:5000/api/admin/book", requestData, {
  //             headers: { "Content-Type": "application/json" }, // Ensure correct headers
  //         });

  //         console.log("Booking Success:", response.data);
  //         alert("Booking successful!");

  //         // Update seats after successful booking
  //         setSeats(seats.map(seat => 
  //             selectedSeats.includes(seat.id) ? { ...seat, status: "booked" } : seat
  //         ));

  //         // Reset form
  //         setJourneyDate("");
  //         setSelectedSeat([]);
  //         setName("");
  //         setMobile("");
  //         setEmail("");
  //     } catch (error) {
  //         console.error("Error booking ticket:", error.response?.data || error);
  //         alert("Booking failed. Check console for details.");
  //     }
  // };

    
    

  //   return (
  //     <div className="booking-container">
  //       <h1>Bus Ticket Booking</h1>

  //       {isMobileView && (
  //         <div className="mobile-tabs">
  //           {/* <button className={`tab-button ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
  //             Booking Form
  //           </button> */}
  //           <button
  //             className={`tab-button ${activeTab === "seats" ? "active" : ""}`}
  //             onClick={() => setActiveTab("seats")}
  //           >
  //             Select Seat
  //           </button>
  //         </div>
  //       )}

  //       <div className="booking-form-container">
  //         <form
  //           // className={`booking-form ${isMobileView && activeTab !== "form" ? "hidden" : ""}`}
  //           onSubmit={handleSubmit}
  //         >
  //           <div className="form-group">
  //             <label>Journey Date*</label>
  //             <input
  //               type="date"
  //               value={journeyDate}
  //               onChange={(e) => setJourneyDate(e.target.value)}
  //               required
  //             />
  //           </div>

  //           <div className="form-group">
  //             <label>Selected Seat*</label>
  //             <div className="selected-seat">
  //               {selectedSeats && selectedSeats.length > 0 
  //               ? selectedSeats.join(" ") 
  //               : "No seat selected"}
  //             </div>
  //           </div>


  //           <div className="form-group">
  //             <label>Mobile*</label>
  //             <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
  //           </div>

  //           <div className="form-group">
  //             <label>Email*</label>
  //             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
  //           </div>

  //           <div className="form-group">
  //             <label>Passenger Name*</label>
  //             <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
  //           </div>

  //           <button type="submit" className="book-button">
  //             Book Now
  //           </button>
  //         </form>

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

  //           {isMobileView && selectedSeats && (
  //             <button type="button" className="continue-button" onClick={() => setActiveTab("form")}>
  //               Continue with Seat {selectedSeats}
  //             </button>
  //           )}
  //         </div>
  //       </div>
  //     </div>
  //   )
  // }

  // export default UserView



import { useState, useEffect } from "react"
import { Bus } from "lucide-react"
import axios from "axios"
import "./BookingForm.css"
import { RiSteering2Fill } from "react-icons/ri";
const UserView = () => {
  const [journeyDate, setJourneyDate] = useState("")
  const [selectedSeats, setSelectedSeat] = useState([])
  const [name, setName] = useState("")
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [isMobileView, setIsMobileView] = useState(false)
  const [activeTab, setActiveTab] = useState("form")
  const [seats, setSeats] = useState([])
  const [loading, setLoading] = useState(true)
  const [bookingSuccess, setBookingSuccess] = useState(false)

  // Fetch booked seats from the database
  const fetchBookedSeats = async (selectedDate) => {
    try {
      setLoading(true)
      // Use the selectedDate parameter if provided, otherwise use journeyDate state
      const dateToFetch = selectedDate || journeyDate

      if (!dateToFetch) {
        // If no date is selected, fetch all bookings to show all booked seats
        const url = "http://localhost:5000/api/admin"
        const response = await axios.get(url)

        // Extract all booked seat numbers from the bookings
        const bookedSeatNumbers = []
        response.data.forEach((booking) => {
          if (booking.selectedSeats && booking.selectedSeats.length > 0) {
            bookedSeatNumbers.push(...booking.selectedSeats)
          }
        })

        console.log("All booked seats:", bookedSeatNumbers)

        // Initialize seats with the booked status from the database
        const initialSeats = Array(40)
          .fill()
          .map((_, index) => ({
            id: index + 1,
            status: bookedSeatNumbers.includes(index + 1) ? "booked" : "available",
          }))

        setSeats(initialSeats)
        setLoading(false)
        return
      }

      const url = `http://localhost:5000/api/admin?date=${dateToFetch}`
      console.log("Fetching seats for date:", dateToFetch)
      const response = await axios.get(url)

      // Extract all booked seat numbers from the bookings
      const bookedSeatNumbers = []
      response.data.forEach((booking) => {
        if (booking.selectedSeats && booking.selectedSeats.length > 0) {
          bookedSeatNumbers.push(...booking.selectedSeats.map((seat) => Number(seat)))
        }
      })

      console.log("Booked seats for date:", dateToFetch, bookedSeatNumbers)

      // Initialize seats with the booked status from the database
      const initialSeats = Array(40)
        .fill()
        .map((_, index) => ({
          id: index + 1,
          status: bookedSeatNumbers.includes(index + 1) ? "booked" : "available",
        }))

      setSeats(initialSeats)
    } catch (error) {
      console.error("Error fetching booked seats:", error)
      // Initialize with empty seats if there's an error
      const initialSeats = Array(40)
        .fill()
        .map((_, index) => ({
          id: index + 1,
          status: "available",
        }))
      setSeats(initialSeats)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Fetch all booked seats when component mounts
    fetchBookedSeats()

    const checkResponsiveView = () => {
      setIsMobileView(window.innerWidth < 768)
    }

    checkResponsiveView()

    let resizeTimer
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkResponsiveView, 100)
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
    }
  }, [])

  // Effect to reset UI after successful booking
  useEffect(() => {
    if (bookingSuccess) {
      // Reset form
      setSelectedSeat([])
      setName("")
      setMobile("")
      setEmail("")
      setBookingSuccess(false)
    }
  }, [bookingSuccess])

  const handleSeatClick = (seatId) => {
    const clickedSeat = seats.find((seat) => seat.id === seatId)

    if (clickedSeat.status === "available") {
      setSelectedSeat((prevSeats) =>
        prevSeats.includes(seatId) ? prevSeats.filter((id) => id !== seatId) : [...prevSeats, seatId],
      )
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!journeyDate || selectedSeats.length === 0 || !name || !mobile || !email) {
      alert("Please fill all required fields")
      return
    }

    try {
      setLoading(true)
      const requestData = {
        name,
        email,
        mobile,
        journeyDate,
        selectedSeats,
        availableSeats: 40,
        bookingSeats: selectedSeats.length,
      }

      console.log("Sending Data:", requestData)

      const response = await axios.post("http://localhost:5000/api/admin/book", requestData, {
        headers: { "Content-Type": "application/json" },
      })

      console.log("Booking Success:", response.data)

      // Update the UI to show booked seats
      setSeats((prevSeats) =>
        prevSeats.map((seat) => (selectedSeats.includes(seat.id) ? { ...seat, status: "booked" } : seat)),
      )

      alert("Booking successful!")
      setBookingSuccess(true)

      // Refetch the seats to ensure UI is in sync with database
      await fetchBookedSeats(journeyDate)
    } catch (error) {
      console.error("Error booking ticket:", error.response?.data || error)
      alert("Seats are already booked. Please select different seats.")

      // Refetch to get the latest seat status
      await fetchBookedSeats(journeyDate)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="booking-containers">
      <h1> Ashtavinayak Bus Ticket Booking</h1>

      {isMobileView && (
        <div className="mobile-tabs">
          <button className={`tab-button ${activeTab === "form" ? "active" : ""}`} onClick={() => setActiveTab("form")}>
            Booking Form
          </button>
          <button
            className={`tab-button ${activeTab === "seats" ? "active" : ""}`}
            onClick={() => setActiveTab("seats")}
          >
            Select Seat
          </button>
        </div>
      )}

      <div className="booking-form-container">
        <form onSubmit={handleSubmit} className={isMobileView && activeTab !== "form" ? "hidden" : ""}>
          <div className="form-group">
            <label>Journey Date*</label>
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => {
                const newDate = e.target.value
                setJourneyDate(newDate)
                if (newDate) {
                  fetchBookedSeats(newDate)
                }
              }}
              required
            />
          </div>

          <div className="form-group">
            <label>Selected Seat*</label>
            <div className="selected-seat">
              {selectedSeats && selectedSeats.length > 0 ? selectedSeats.join(", ") : "No seat selected"}
            </div>
          </div>

          <div className="form-group">
            <label>Mobile*</label>
            <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Email*</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>

          <div className="form-group">
            <label>Passenger Name*</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>

          <button type="submit" className="book-button" disabled={selectedSeats.length === 0 || loading}>
            {loading ? "Processing..." : "Book Now"}
          </button>
        </form>

        <div className={`seat-layouts ${isMobileView && activeTab !== "seats" ? "hidden" : ""}`}>
          <div className="bus-front">
            <Bus size={24} />
            <span>Driver</span>
            <button className="refresh-button" onClick={() => fetchBookedSeats(journeyDate)} disabled={loading}>
              Refresh Seats
            </button>
          </div>
              <div className="icon">
              <RiSteering2Fill />
              </div>
          {loading ? (
            <div className="loading-indicator">Loading seats...</div>
          ) : (
            
            <div className="seats-containers">
             
              {seats.map((seat) => (
                <div
                  key={seat.id}
                  className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? "selected" : ""}`}
                  onClick={() => handleSeatClick(seat.id)}
                >
                  {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 18v3h3v-3h10v3h3v-3h1a2 2 0 002-2V8h-2v8H3V8H1v8a2 2 0 002 2h1zm19-5v-3a2 2 0 00-2-2h-6V4a2 2 0 00-2-2H7a2 2 0 00-2 2v4H3a2 2 0 00-2 2v3h22zm-17-5V4h6v4H6z" />
                  </svg> */}


                  <svg width="31" height="31"  transform="rotate(90)" viewBox="0 0 31 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7568 5.58197H15.5946C15.0811 5.58197 12 5.58197 12 3.04098C12 1.0082 13.7117 0.5 14.5676 0.5H24.3243C29.6649 0.906557 30.5 5.41257 30.5 7.61475V23.8852C30.5 29.5 24.8378 30.5 23.8108 30.5H14.5676C13.027 30.5 12 30.4918 12 27.9508C12 25.918 13.7117 25 14.5676 25H20.2162C22 25 25 24.9016 25 22.8689V8.5C25 6.06066 22.955 5.58197 21.7568 5.58197Z" fill=""></path><rect y="3"  width="25"  height="25" rx="4" fill=""></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6453 0.584801C13.2694 0.142591 14.0033 0 14.5 0H24.0192L24.0383 0.00144939C26.7974 0.210319 28.557 1.48384 29.613 3.00722C30.6547 4.50993 31 6.23503 31 7.38095V23.619C31 27.0066 29.3925 28.8849 27.6249 29.8885C25.8951 30.8706 24.0471 31 23.5 31H14.5C13.7143 31 12.9166 30.8758 12.3339 30.3023C11.7554 29.7329 11.5 28.8309 11.5 27.5556C11.5 26.4111 11.9958 25.6483 12.6453 25.188C13.2694 24.7458 14.0033 24.6032 14.5 24.6032H20C21.8074 24.6032 22.9511 24.4744 23.6378 24.1576C23.9623 24.0079 24.1634 23.8251 24.2909 23.6056C24.4219 23.3799 24.5 23.0722 24.5 22.6349V8.36508C24.5 7.37872 24.0285 6.78849 23.4249 6.42192C22.7947 6.03916 22.0173 5.90476 21.5 5.90476H15.4937C15.2321 5.90479 14.2825 5.90487 13.383 5.56442C12.9242 5.39078 12.4507 5.11854 12.0903 4.68726C11.7232 4.24785 11.5 3.6743 11.5 2.95238C11.5 1.80788 11.9958 1.04508 12.6453 0.584801ZM13.2297 1.38345C12.8376 1.66127 12.5 2.12863 12.5 2.95238C12.5 3.46062 12.6518 3.80969 12.8628 4.06224C13.0806 4.32292 13.3883 4.512 13.742 4.64589C14.4602 4.91773 15.2523 4.92063 15.5 4.92063H21.5C22.1493 4.92063 23.122 5.08148 23.9501 5.58443C24.8049 6.10357 25.5 6.98953 25.5 8.36508V22.6349C25.5 23.1818 25.4031 23.6737 25.1591 24.0938C24.9116 24.5202 24.5377 24.8294 24.0622 25.0487C23.1489 25.47 21.7926 25.5873 20 25.5873H14.5C14.1633 25.5873 13.6472 25.6907 13.2297 25.9866C12.8376 26.2644 12.5 26.7318 12.5 27.5556C12.5 28.7405 12.7446 29.3147 13.0411 29.6064C13.3334 29.8941 13.7857 30.0159 14.5 30.0159H23.5C23.9529 30.0159 25.6049 29.8992 27.1251 29.0361C28.6075 28.1945 30 26.6283 30 23.619V7.38095C30 6.3946 29.6952 4.87208 28.787 3.56183C27.8953 2.27557 26.4102 1.17316 23.9805 0.984127H14.5C14.1633 0.984127 13.6472 1.08757 13.2297 1.38345Z" fill="#BDBDBD"></path><path fill-rule="evenodd" clip-rule="evenodd" 
                   d="M1.73348 3.71775C2.66649 3.13928 3.76564 2.95312 4.5 2.95312H12.5V3.93725H4.5C3.90103 3.93725 3.00018 4.09554 2.26652 4.55041C1.55974 4.98861 1 5.70162 1 6.88963V24.1119C0.999994 24.8094 1.12107 25.6617 1.64631 26.3337C2.15222 26.9809 3.11019 27.5563 5 27.5563H12.5V28.5404H5C2.88981 28.5404 1.59777 27.8857 0.853684 26.9337C0.128916 26.0065 -6.67546e-06 24.8905 2.59235e-10 24.1119V6.88963C2.59235e-10 5.32209 0.773597 4.31287 1.73348 3.71775Z" fill="#BDBDBD"></path></svg>
                  <span>{seat.id}</span>
                </div>
              ))}
            </div>
          )}

          <div className="seat-legend">
            <div className="legend-item">
              <div className="seat-available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="seat-selected"></div>
              <span>Selected</span>
            </div>
            <div className="legend-item">
              <div className="seat-icon booked"></div>
              <span>Booked</span>
            </div>
          </div>

          {isMobileView && selectedSeats.length > 0 && (
            <button type="button" className="continue-button" onClick={() => setActiveTab("form")}>
              Continue with Seat {selectedSeats.join(", ")}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserView





















