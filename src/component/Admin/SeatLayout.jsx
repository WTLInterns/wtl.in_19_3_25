import { useState } from "react";
import BookingForm from "./BookingForm";
import AdminDashboard from "./AdminDashboard";
import Sleeper from "./SleeperPage/Sleeper";
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
          Booking Form
        </button>
        <button
          className={`view-button ${view === "admin" ? "active" : ""}`}
          onClick={() => setView("admin")}
        >
          Admin Dashbord
        </button>
        <button
          className={`view-button ${view === "sleeper" ? "active" : ""}`}
          onClick={() => setView("sleeper")}
        >
          Sleeper
        </button>
      </div>

      <div className="view-container">
        {view === "user" && <BookingForm />}
        {view === "admin" && <AdminDashboard />}
        {view === "sleeper" && <Sleeper />}
      </div>
    </div>
  );
};

export default SeatLayout;
