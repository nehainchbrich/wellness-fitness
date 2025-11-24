"use client";
import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent successfully!");
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get in Touch</h2>
        <p className={styles.subtitle}>
          We’d love to hear from you! Fill out the form below or reach out through our contact details.
        </p>

        <div className={styles.grid}>
          {/* Left Side - Form */}
          <div className={styles.formWrapper}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className={styles.btn}>
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Info */}
          <div className={styles.infoWrapper}>
            <div className={styles.infoBox}>
              <h4>📍 Address</h4>
              <p>123 Green Avenue, Pune, India</p>
            </div>
            <div className={styles.infoBox}>
              <h4>📞 Phone</h4>
              <p>+91 98765 43210</p>
            </div>
            <div className={styles.infoBox}>
              <h4>📧 Email</h4>
              <p>contact@wellnesshub.com</p>
            </div>

            <div className={styles.mapWrapper}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.002514930525!2d73.85674357500064!3d18.520430687397366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c069e42bcb2b%3A0xf5bce61a262e7490!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
