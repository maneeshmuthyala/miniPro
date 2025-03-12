import React, { useState } from "react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

import "./index.css";

const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const seatsPerRow = 16;
const seatPrice = 200; // Fixed price per seat

const Tview = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat)
        ? prevSelected.filter((s) => s !== seat)
        : [...prevSelected, seat]
    );
  };

  const totalCost = selectedSeats.length * seatPrice;

  // Razorpay Payment Integration
  const handlePayment = async () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalCost }),
      });

      const orderData = await response.json();
      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with Razorpay Key ID
        amount: orderData.amount,
        currency: "INR",
        name: "Uniq Movie Booking",
        description: `Booking for ${selectedSeats.join(", ")}`,
        order_id: orderData.id,
        handler: function (response) {
          alert("Payment Successful!");
          console.log(response);
        },
        prefill: { email: "test@example.com", contact: "9999999999" },
        theme: { color: "#28a745" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Payment Error:", error);
    }
  };

  return (
    <div className="seat-booking-container">

      {/* Show Timings */}
      <div className="show-times">
        <button className="selected-time">01:00 PM</button>
        <button>04:10 PM</button>
        <button>07:20 PM</button>
      </div>

      {/* Seating Layout */}
      <div className="screen">All eyes this way please!</div>

      <div className="seat-layout">
        {rows.map((row) => (
          <div key={row} className="row">
            <span className="row-label">{row}</span>
            {[...Array(seatsPerRow)].map((_, index) => {
              const seat = `${row}${index + 1}`;
              return (
                <button
                  key={seat}
                  className={`seat ${
                    selectedSeats.includes(seat) ? "selected" : "available"
                  }`}
                  onClick={() => toggleSeatSelection(seat)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* Payment Details */}
      <div className="payment-summary">
        <h3>Payment Summary</h3>
        <p>
          Selected Seats:{" "}
          {selectedSeats.length > 0 ? selectedSeats.join(", ") : "None"}
        </p>
        <p>Total Cost: ₹{totalCost}</p>
        <Link to='/booking'>
        <button className="checkout-button" onClick={handlePayment} disabled={selectedSeats.length === 0}>
          Pay ₹{totalCost} with Manipay
        </button></Link>
      </div>
    </div>
  );
};

export default Tview;
