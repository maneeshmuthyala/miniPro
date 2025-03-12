import React, { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import "./index.css";

const theaters = [
    {
        name: "Muthyala's 4k DolbyAtms",
        showtimes: {
          "2025-03-14": ["12:00 PM", "07:00 PM"],
          "2025-03-15": ["10:00 AM", "04:30 PM"],
        },
      },
  {
    name: "Asian Sridevi Multiplex",
    showtimes: {
      "2025-03-14": ["10:30 AM", "01:30 PM", "07:40 PM"],
      "2025-03-15": ["12:00 PM", "07:00 PM"],
    },
  },
  {
    name: "Amrutha Cinema Theatre",
    showtimes: {
      "2025-03-14": ["12:00 PM", "07:00 PM"],
      "2025-03-15": ["10:00 AM", "04:30 PM"],
    },
  },
  
  {
    name: "PVR Maddox Hall",
    showtimes: {
      "2025-03-14": ["12:00 PM", "07:00 PM"],
      "2025-03-15": ["10:00 AM", "04:30 PM"],
    },
  },
];

// Converts 12-hour time to minutes
const convertToMinutes = (timeStr) => {
  const [time, period] = timeStr.split(" ");
  let [hours, minutes] = time.split(":").map(Number);

  if (period === "PM" && hours !== 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

const Theaters = () => {
  const now = new Date();
  const [selectedDate, setSelectedDate] = useState(
    now.toISOString().split("T")[0] // Default to today’s date
  );

  const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

  return (
    <div className="container">
      {/* Date Picker */}
      <div className="date-picker">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {theaters.map((theater, index) => {
        const showtimesForDate = theater.showtimes[selectedDate] || [];

        // Filter only upcoming showtimes if the selected date is today
        const upcomingShowtimes =
          selectedDate === now.toISOString().split("T")[0]
            ? showtimesForDate.filter(
                (time) => convertToMinutes(time) > currentTimeInMinutes
              )
            : showtimesForDate;

        return (
          <div key={index} className="theater">
            <div className="theater-header">
              <div className="theater-name">❤️ {theater.name}</div> ℹ️
            </div>
            <div className="theater-icons">
              📱 <span className="ticket-icon">M-Ticket</span>
              🍔 <span className="food-icon">Food & Beverage</span>
            </div>
            <div className="showtimes">
              {upcomingShowtimes.length > 0 ? (
                upcomingShowtimes.map((time, idx) => (
                    <Link to="/Tview">
                  <button key={idx} className="showtime">
                    {time}
                  </button></Link>
                ))
              ) : (
                <p className="no-showtimes">No shows available</p>
              )}
            </div>
            <p className="cancellation">Cancellation available</p>
          </div>
        );
      })}
    </div>
  );
};

export default Theaters;
