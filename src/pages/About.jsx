// src/Pages/About.jsx
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "manual_page_view",
      page_name: "About Page",
      page_url: window.location.pathname
    });
  }, []);

  const handleFullDetails = () => {
    window.dataLayer.push({ event: "full_details_click" });
    alert("Full details clicked!");
  };

  return (
    <div className="about-container">
      <h1>About This Site</h1>
      <p>This is a multi-page GTM + GA4 test setup to validate page view and event tracking.</p>
      <button onClick={handleFullDetails} className="about-btn">Full Details</button>
    </div>
  );
}

export default About;
