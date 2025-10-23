// src/Pages/Reports.jsx
import React, { useEffect } from "react";

function Reports() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "manual_page_view",
      page_name: "Reports Page",
      page_url: window.location.pathname
    });
  }, []);

  const handleViewReports = () => {
    window.dataLayer.push({ event: "view_reports_click" });
    alert("Reports viewed!");
  };

  return (
    <div className="reports-container">
      <h1>Reports Page</h1>
      <p>View and test custom reports events here.</p>
      <button onClick={handleViewReports} className="reports-btn-blue">View Reports</button>
    </div>
  );
}

export default Reports;
