import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <p className="footer-text">
        © {new Date().getFullYear()} Little Lemon Restaurant. All rights reserved.
      </p>
      <address className="footer-address">
        123 Mediterranean Ave, Chicago, IL 60601 |{" "}
        <a href="tel:+13125550123" className="footer-link">(312) 555-0123</a>
      </address>
    </footer>
  );
}

export default Footer;
