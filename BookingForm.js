import React, { useState } from "react";
import "./BookingForm.css";

const availableTimes = [
  "17:00", "17:30", "18:00", "18:30",
  "19:00", "19:30", "20:00", "20:30", "21:00"
];

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (data) => {
    const newErrors = {};
    if (!data.date) newErrors.date = "Please select a date.";
    if (!data.time) newErrors.time = "Please select a time.";
    if (!data.guests || data.guests < 1 || data.guests > 10)
      newErrors.guests = "Number of guests must be between 1 and 10.";
    if (!data.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(data.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    if (onSubmit) onSubmit(formData);
  };

  if (submitted) {
    return (
      <section className="booking-success" aria-live="polite" role="status">
        <span className="success-icon" aria-hidden="true">✅</span>
        <h2>Booking Confirmed!</h2>
        <p>
          Thank you, <strong>{formData.firstName}</strong>! Your table for{" "}
          <strong>{formData.guests}</strong> on{" "}
          <strong>{formData.date}</strong> at{" "}
          <strong>{formData.time}</strong> has been reserved.
        </p>
        <p>A confirmation will be sent to <strong>{formData.email}</strong>.</p>
        <button
          className="btn-primary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              date: "", time: "", guests: 1, occasion: "",
              firstName: "", lastName: "", email: "", phone: "",
            });
          }}
        >
          Make Another Booking
        </button>
      </section>
    );
  }

  return (
    <form
      className="booking-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Table reservation form"
    >
      <h2 className="form-title">Reserve a Table</h2>

      {/* Booking Details */}
      <fieldset className="form-section">
        <legend className="form-legend">Booking Details</legend>

        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date <span aria-hidden="true" className="required">*</span>
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className={`form-input ${errors.date ? "input-error" : ""}`}
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            aria-required="true"
            aria-describedby={errors.date ? "date-error" : undefined}
          />
          {errors.date && (
            <span id="date-error" className="error-message" role="alert">
              {errors.date}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Time <span aria-hidden="true" className="required">*</span>
          </label>
          <select
            id="time"
            name="time"
            className={`form-input ${errors.time ? "input-error" : ""}`}
            value={formData.time}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.time ? "time-error" : undefined}
          >
            <option value="">-- Select a time --</option>
            {availableTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.time && (
            <span id="time-error" className="error-message" role="alert">
              {errors.time}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="guests" className="form-label">
            Number of Guests <span aria-hidden="true" className="required">*</span>
          </label>
          <input
            type="number"
            id="guests"
            name="guests"
            className={`form-input ${errors.guests ? "input-error" : ""}`}
            value={formData.guests}
            onChange={handleChange}
            min="1"
            max="10"
            aria-required="true"
            aria-describedby={errors.guests ? "guests-error" : undefined}
          />
          {errors.guests && (
            <span id="guests-error" className="error-message" role="alert">
              {errors.guests}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="occasion" className="form-label">Occasion (optional)</label>
          <select
            id="occasion"
            name="occasion"
            className="form-input"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="">-- None --</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="business">Business Dinner</option>
            <option value="other">Other</option>
          </select>
        </div>
      </fieldset>

      {/* Customer Details */}
      <fieldset className="form-section">
        <legend className="form-legend">Your Details</legend>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name <span aria-hidden="true" className="required">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className={`form-input ${errors.firstName ? "input-error" : ""}`}
              value={formData.firstName}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.firstName ? "firstName-error" : undefined}
              autoComplete="given-name"
            />
            {errors.firstName && (
              <span id="firstName-error" className="error-message" role="alert">
                {errors.firstName}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName" className="form-label">
              Last Name <span aria-hidden="true" className="required">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className={`form-input ${errors.lastName ? "input-error" : ""}`}
              value={formData.lastName}
              onChange={handleChange}
              aria-required="true"
              aria-describedby={errors.lastName ? "lastName-error" : undefined}
              autoComplete="family-name"
            />
            {errors.lastName && (
              <span id="lastName-error" className="error-message" role="alert">
                {errors.lastName}
              </span>
            )}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email <span aria-hidden="true" className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`form-input ${errors.email ? "input-error" : ""}`}
            value={formData.email}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.email ? "email-error" : undefined}
            autoComplete="email"
          />
          {errors.email && (
            <span id="email-error" className="error-message" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone <span aria-hidden="true" className="required">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={`form-input ${errors.phone ? "input-error" : ""}`}
            value={formData.phone}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.phone ? "phone-error" : undefined}
            autoComplete="tel"
          />
          {errors.phone && (
            <span id="phone-error" className="error-message" role="alert">
              {errors.phone}
            </span>
          )}
        </div>
      </fieldset>

      <p className="required-note">
        <span className="required">*</span> Required fields
      </p>

      <button type="submit" className="btn-primary btn-submit">
        Confirm Reservation
      </button>
    </form>
  );
}

export default BookingForm;
