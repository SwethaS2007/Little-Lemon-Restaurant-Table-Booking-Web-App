import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" role="banner">
      <div className="header-brand">
        <span className="header-logo" aria-hidden="true">🍋</span>
        <div>
          <h1 className="header-title">Little Lemon</h1>
          <p className="header-subtitle">Mediterranean Restaurant</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
