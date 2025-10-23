// src/Pages/Contact.jsx
import React, { useEffect, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "manual_page_view",
      page_name: "Contact Page",
      page_url: window.location.pathname
    });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.dataLayer.push({ event: "contact_form_submit" });
    alert("Form submitted!");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br /><br />
        <label>
          Email: 
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br /><br />
        <button type="submit" className="submit-btn-green">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
