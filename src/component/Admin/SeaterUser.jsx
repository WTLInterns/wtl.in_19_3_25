"use client"

import { useState, useEffect } from "react"
import { Bus, RefreshCw } from "lucide-react"
import axios from "axios"
import "./SeaterUser.css"
import { RiSteering2Fill } from "react-icons/ri";
const UserView = () => {
  const [journeyDate, setJourneyDate] = useState("")
  // eslint-disable-next-line no-unused-vars
  const [isMobileView, setIsMobileView] = useState(false)
  const [seats, setSeats] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [refreshing, setRefreshing] = useState(false)

  // Fetch booked seats from the database
  const fetchBookedSeats = async (date) => {
    try {
      setRefreshing(true)
      // If a date is selected, fetch bookings for that date, otherwise fetch all bookings
      const url = date ? `http://localhost:5000/api/admin?date=${date}` : "http://localhost:5000/api/admin"

      console.log("Fetching seats for date:", date || "all dates")
      const response = await axios.get(url)

      // Extract all booked seat numbers from the bookings
      const bookedSeatNumbers = []
      response.data.forEach((booking) => {
        if (booking.selectedSeats && booking.selectedSeats.length > 0) {
          // Convert all seat numbers to numbers to ensure consistent comparison
          bookedSeatNumbers.push(...booking.selectedSeats.map((seat) => Number(seat)))
        }
      })

      console.log("Booked seats:", bookedSeatNumbers)

      // Initialize seats with the booked status from the database
      const initialSeats = Array(40)
        .fill()
        .map((_, index) => ({
          id: index + 1,
          status: bookedSeatNumbers.includes(index + 1) ? "booked" : "available",
        }))

      setSeats(initialSeats)
      setLastUpdated(new Date())
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
      setRefreshing(false)
    }
  }

  useEffect(() => {
    // Set the default date to the current date when the component mounts
    const currentDate = new Date().toISOString().split("T")[0]
    setJourneyDate(currentDate)

    // Fetch all booked seats when component mounts
    fetchBookedSeats(currentDate)

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

    // Set up polling to refresh seat data every 30 seconds
    const intervalId = setInterval(() => {
      if (journeyDate) {
        fetchBookedSeats(journeyDate)
      }
    }, 30000) // 30 seconds

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(resizeTimer)
      clearInterval(intervalId)
    }
  }, [])

  // Refetch booked seats when journey date changes
  useEffect(() => {
    if (journeyDate) {
      fetchBookedSeats(journeyDate)
    }
  }, [journeyDate])

  // Date selection handler
  const handleDateChange = (e) => {
    setJourneyDate(e.target.value)
  }

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return ""
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  return (
    <div className="booking-container">
      <h1>Bus Seat Availability</h1>

      <div className="date-selector">
        <label htmlFor="journey-date">Select Journey Date:</label>
        <input id="journey-date" type="date" value={journeyDate} onChange={handleDateChange} className="date-input" />
        <button onClick={() => fetchBookedSeats(journeyDate)} className="refresh-button" disabled={refreshing}>
          {refreshing ? (
            <>
              <RefreshCw className="refresh-icon spinning" size={16} />
              Refreshing...
            </>
          ) : (
            <>
              <RefreshCw className="refresh-icon" size={16} />
              Refresh Seats
            </>
          )}
        </button>
      </div>
   
      {journeyDate && (
        <div className="selected-date">
          Showing seat availability for: <strong>{formatDate(journeyDate)}</strong>
        </div>
      )}

      <div className="booking-form-containers view-only">
        <div className="seat-layout">
          <div className="bus-front">
            <Bus size={24} />
            <span>Driver</span>
          </div>
          <div className="icone">
              <RiSteering2Fill />
              </div>
          {loading ? (
            <div className="loading-indicator">Loading seats...</div>
          ) : (
            <div className="seats-containers">
              {seats.map((seat) => (
                <div key={seat.id} className={`seat ${seat.status}`}>
                    <svg width="31" height="31"  transform="rotate(90)" viewBox="0 0 31 31" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.7568 5.58197H15.5946C15.0811 5.58197 12 5.58197 12 3.04098C12 1.0082 13.7117 0.5 14.5676 0.5H24.3243C29.6649 0.906557 30.5 5.41257 30.5 7.61475V23.8852C30.5 29.5 24.8378 30.5 23.8108 30.5H14.5676C13.027 30.5 12 30.4918 12 27.9508C12 25.918 13.7117 25 14.5676 25H20.2162C22 25 25 24.9016 25 22.8689V8.5C25 6.06066 22.955 5.58197 21.7568 5.58197Z" fill=""></path><rect y="3"  width="25"  height="25" rx="4" fill=""></rect><path fill-rule="evenodd" clip-rule="evenodd" d="M12.6453 0.584801C13.2694 0.142591 14.0033 0 14.5 0H24.0192L24.0383 0.00144939C26.7974 0.210319 28.557 1.48384 29.613 3.00722C30.6547 4.50993 31 6.23503 31 7.38095V23.619C31 27.0066 29.3925 28.8849 27.6249 29.8885C25.8951 30.8706 24.0471 31 23.5 31H14.5C13.7143 31 12.9166 30.8758 12.3339 30.3023C11.7554 29.7329 11.5 28.8309 11.5 27.5556C11.5 26.4111 11.9958 25.6483 12.6453 25.188C13.2694 24.7458 14.0033 24.6032 14.5 24.6032H20C21.8074 24.6032 22.9511 24.4744 23.6378 24.1576C23.9623 24.0079 24.1634 23.8251 24.2909 23.6056C24.4219 23.3799 24.5 23.0722 24.5 22.6349V8.36508C24.5 7.37872 24.0285 6.78849 23.4249 6.42192C22.7947 6.03916 22.0173 5.90476 21.5 5.90476H15.4937C15.2321 5.90479 14.2825 5.90487 13.383 5.56442C12.9242 5.39078 12.4507 5.11854 12.0903 4.68726C11.7232 4.24785 11.5 3.6743 11.5 2.95238C11.5 1.80788 11.9958 1.04508 12.6453 0.584801ZM13.2297 1.38345C12.8376 1.66127 12.5 2.12863 12.5 2.95238C12.5 3.46062 12.6518 3.80969 12.8628 4.06224C13.0806 4.32292 13.3883 4.512 13.742 4.64589C14.4602 4.91773 15.2523 4.92063 15.5 4.92063H21.5C22.1493 4.92063 23.122 5.08148 23.9501 5.58443C24.8049 6.10357 25.5 6.98953 25.5 8.36508V22.6349C25.5 23.1818 25.4031 23.6737 25.1591 24.0938C24.9116 24.5202 24.5377 24.8294 24.0622 25.0487C23.1489 25.47 21.7926 25.5873 20 25.5873H14.5C14.1633 25.5873 13.6472 25.6907 13.2297 25.9866C12.8376 26.2644 12.5 26.7318 12.5 27.5556C12.5 28.7405 12.7446 29.3147 13.0411 29.6064C13.3334 29.8941 13.7857 30.0159 14.5 30.0159H23.5C23.9529 30.0159 25.6049 29.8992 27.1251 29.0361C28.6075 28.1945 30 26.6283 30 23.619V7.38095C30 6.3946 29.6952 4.87208 28.787 3.56183C27.8953 2.27557 26.4102 1.17316 23.9805 0.984127H14.5C14.1633 0.984127 13.6472 1.08757 13.2297 1.38345Z" fill="#BDBDBD"></path><path fill-rule="evenodd" clip-rule="evenodd" 
                   d="M1.73348 3.71775C2.66649 3.13928 3.76564 2.95312 4.5 2.95312H12.5V3.93725H4.5C3.90103 3.93725 3.00018 4.09554 2.26652 4.55041C1.55974 4.98861 1 5.70162 1 6.88963V24.1119C0.999994 24.8094 1.12107 25.6617 1.64631 26.3337C2.15222 26.9809 3.11019 27.5563 5 27.5563H12.5V28.5404H5C2.88981 28.5404 1.59777 27.8857 0.853684 26.9337C0.128916 26.0065 -6.67546e-06 24.8905 2.59235e-10 24.1119V6.88963C2.59235e-10 5.32209 0.773597 4.31287 1.73348 3.71775Z" fill="#BDBDBD"></path></svg>
                  <span>{seat.id}</span>
                </div>
              ))}
            </div>
          )}

          <div className="seat-legend">
            <div className="legend-item">
              <div className="seat-icon available"></div>
              <span>Available</span>
            </div>
            <div className="legend-item">
              <div className="seat-icon booked"></div>
              <span>Booked</span>
            </div>
          </div>

          <div className="last-updated">Last updated: {lastUpdated.toLocaleTimeString()}</div>
        </div>
      </div>
    </div>
  )
}

export default UserView

