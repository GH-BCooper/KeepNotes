// Module Imports
import React from "react";

// Footer Component
function Footer() {
  // Dynamic Year Generation
  const year = new Date().getFullYear();

  // Component UI
  return (
    <footer>
      {/* Copyright Text */}
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

// Module Export
export default Footer;
