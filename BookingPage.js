import React from "react";
import BookingForm from "../components/BookingForm";
import "./BookingPage.css";

function BookingPage() {
  const handleBookingSubmit = (data) => {
    console.log("Booking submitted:", data);
  };

  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <div className="booking-page-hero">
        <h2 id="booking-heading">Book a Table</h2>
        <p>Reserve your spot at Little Lemon and enjoy an authentic Mediterranean dining experience.</p>
      </div>
      <div className="booking-page-content">
        <BookingForm onSubmit={handleBookingSubmit} />
      </div>
    </section>
  );
}

export default BookingPage;
