/* eslint-disable react/prop-types */

import { RiSteering2Fill } from "react-icons/ri";
export default function SeatLayout({ onSeatSelect, bookedSeats }) {
  const createSeats = (prefix, count, isUpper) => {
    return Array.from({ length: count }, (_, index) => {
      const seatId = `${prefix}${index + 1}`
      const isBooked = bookedSeats.includes(seatId)

      return (
        <div
          key={seatId}
          className={`seat ${isBooked ? "booked" : "available"} ${isUpper ? "upper" : "lower"}`}
          onClick={() => !isBooked && onSeatSelect({ id: seatId, deck: isUpper ? "Upper" : "Lower" })}
        >
          <div className="seat-number">{seatId}</div>
        </div>
      )
    })
  }

  return (
    <div className="bus-layout">
     
      <div className="deck upper-deck">
      <div className="icons">
                    <RiSteering2Fill />
                    </div>
        <div className="deck-label">UPPER</div>
      
        <div className="seats-container">{createSeats("U", 12, true)}</div>
       
        <div className="seats-container-ul">{createSeats("SU", 6, true)}</div>
        
      </div>
      
      <div className="deck lower-deck">
        <div className="deck-label">LOWER</div>
        <div className="seats-container">{createSeats("L", 12, false)}</div>
        <div className="seats-container-ul">{createSeats("SL", 6, false)}</div>
      </div>
    </div>
  )
}
