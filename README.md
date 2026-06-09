# 🍋 Little Lemon Restaurant — Table Booking Web App

![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)
![Tests](https://img.shields.io/badge/Tests-Jest%20%2B%20RTL-red?style=flat&logo=jest)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=flat)

A fully functional **React front-end capstone project** built as part of the Meta Front-End Developer Professional Certificate on Coursera. This web application allows customers of the Little Lemon Mediterranean restaurant to reserve a table online — eliminating the need to call during busy hours.

---

## 📸 Preview

> **App URL:** http://localhost:3000  
> Navigate to `/booking` or click **Reserve a Table** in the nav to access the booking form.

---

## 📋 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Accessibility](#accessibility)
- [UX/UI Design](#uxui-design)
- [Rubric Checklist](#rubric-checklist)
- [License](#license)

---

## 📖 About the Project

**Little Lemon** is a family-owned Mediterranean restaurant that lacked an online reservation system. Customers were forced to call the restaurant to book a table — causing frustration during peak hours and lost bookings for the business.

This project solves that problem by providing a seamless, accessible, and validated online table booking experience directly on the Little Lemon website.

### Problem Statement
> *How might we design a simple, intuitive, and accessible online table reservation feature for the Little Lemon website that allows customers to select a date, time, and number of diners — and confirm their booking without calling the restaurant?*

---

## 🚀 Features

- ✅ **Table booking form** — select date, time, number of guests, and occasion
- ✅ **Customer details form** — first name, last name, email, and phone number
- ✅ **Full form validation** — inline error messages for all required and format checks
- ✅ **Booking confirmation screen** — success message after valid submission
- ✅ **Accessible UI** — ARIA labels, roles, `aria-required`, `aria-describedby`, and semantic HTML
- ✅ **Responsive design** — works on mobile, tablet, and desktop
- ✅ **Unit tested** — 6 test cases using Jest and React Testing Library
- ✅ **React Router** — page-based navigation between Home and Booking
- ✅ **Little Lemon branding** — brand colors, typography, and style guide applied

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 18** | UI component framework |
| **React Router DOM** | Client-side page routing |
| **CSS Modules / Plain CSS** | Component-scoped styling |
| **Jest** | JavaScript testing framework |
| **React Testing Library** | Component rendering and interaction tests |
| **HTML5 Semantic Elements** | Accessible document structure |

---

## 📁 Project Structure

```
little-lemon/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── BookingForm.js         # Main booking form with validation
│   │   ├── BookingForm.css        # BookingForm styles
│   │   ├── BookingForm.test.js    # Unit tests (Jest + RTL)
│   │   ├── Header.js              # Site header with logo and title
│   │   ├── Header.css
│   │   ├── Nav.js                 # Navigation bar
│   │   ├── Nav.css
│   │   ├── Footer.js              # Site footer with contact info
│   │   └── Footer.css
│   ├── pages/
│   │   ├── BookingPage.js         # Booking page wrapper
│   │   └── BookingPage.css
│   ├── App.js                     # Root component with routing
│   ├── App.css
│   ├── index.js                   # React DOM entry point
│   └── index.css                  # Global styles and CSS variables
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jananielangovan6/Little-Lemon-Restaurant-Table-Booking-Web-App.git

# 2. Navigate into the project folder
cd Little-Lemon-Restaurant-Table-Booking-Web-App

# 3. Install dependencies
npm install

# 4. Install React Router
npm install react-router-dom

# 5. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 🧪 Running Tests

This project uses **Jest** and **React Testing Library** for unit testing.

```bash
npm test
```

### Test Coverage

| Test Case | Description |
|---|---|
| Renders all form fields | Verifies all inputs are present in the DOM |
| Empty form validation | Shows errors when form is submitted blank |
| Invalid email format | Shows error for malformed email |
| Invalid phone format | Shows error for non-numeric phone |
| Clears error on input | Error disappears when user starts typing |
| Calls onSubmit with data | Verifies callback is called with correct values |
| Shows confirmation screen | Success message renders after valid submission |

---

## ♿ Accessibility

This project follows **WCAG 2.1** accessibility guidelines:

- All form inputs have associated `<label>` elements via `htmlFor`
- Required fields use `aria-required="true"`
- Error messages use `aria-describedby` to link to the relevant input
- Error alerts use `role="alert"` for screen reader announcement
- Success message uses `aria-live="polite"` and `role="status"`
- Navigation uses `aria-label="Main navigation"`
- Header uses `role="banner"`, footer uses `role="contentinfo"`
- Keyboard focus is clearly visible via CSS outline styles
- Semantic HTML elements used throughout (`<header>`, `<nav>`, `<main>`, `<footer>`, `<fieldset>`, `<legend>`, `<address>`)

---

## 🎨 UX/UI Design

The design follows the **Little Lemon brand style guide**:

| Token | Value |
|---|---|
| Primary Green | `#495e57` |
| Brand Yellow | `#f4ce14` |
| Salmon Accent | `#ee9972` |
| Cream | `#fbdabb` |
| Light Background | `#edefee` |
| Dark Text | `#333333` |

### Design Decisions
- **Hero section** on the booking page uses the primary brand green with yellow heading for immediate brand recognition
- **Yellow CTA button** draws attention to the submit action
- **Fieldsets with legends** group related form fields clearly
- **Inline error messages** appear directly below the relevant input
- **Confirmation screen** replaces the form on success to avoid confusion

---

## ✅ Rubric Checklist

- [x] UX/UI design followed (Little Lemon style guide applied)
- [x] Accessibility tags applied (ARIA, semantic HTML)
- [x] Unit tests included (Jest + React Testing Library)
- [x] Booking form with full validation
- [x] Date, time, and number of guests inputs present
- [x] Customer details form (name, email, phone)
- [x] Submit button on both form sections
- [x] Semantic and responsive HTML
- [x] Committed to GitHub
- [x] Clean, commented code
- [x] Edge cases handled (empty fields, invalid formats)
- [x] README with setup instructions

---

## 📄 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute for educational purposes.

---

## 👩‍💻 Author

**Swetha S**  
Meta Front-End Developer Capstone — Coursera....

---

> *"Good design is making something intelligible and memorable. Great design is making something memorable and meaningful."* — Dieter Rams
