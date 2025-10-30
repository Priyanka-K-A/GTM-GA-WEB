import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "manual_page_view",
      page_name: "Home Page",
      page_url: window.location.pathname
    });
  }, []);

  const handleEvent = (eventName, message) => {
    window.dataLayer.push({ event: eventName });
    alert(message);
  };

  return (
    <div className="index-container">
      <h1>🎯 GTM + GA4 Testing Page</h1>
      <p>Click the buttons below to test GTM event tracking:</p>

      <button onClick={() => handleEvent("generate_reports", "Reports generated!")}>
        Generate reports
      </button>
      <button onClick={() => handleEvent("download_data", "Data downloaded!")}>
        Download Data
      </button>
      <button className='share-btn' onClick={() => handleEvent("share_reports", "Reports shared!")}>
        Share reports
      </button>
    </div>
  );
}

export default Home;
