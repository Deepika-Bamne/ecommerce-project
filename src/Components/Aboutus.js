import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
        <p>Get to know more about who we are, our vision, and what we stand for!</p>
      </div>

      <section className="about-us-content">
        <div className="about-us-section">
          <h2>Our Mission</h2>
          <p>
            At ShopNow, our mission is to provide our customers with high-quality products at competitive prices. We aim to deliver exceptional service and build long-lasting relationships with our customers through trust, innovation, and excellence.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Vision</h2>
          <p>
            Our vision is to become the leading online retailer, known for our broad range of products, exceptional customer service, and a seamless online shopping experience. We aim to empower people to make smarter purchasing decisions.
          </p>
        </div>

        <div className="about-us-section">
          <h2>Our Values</h2>
          <ul>
            <li>Customer-Centric: We put our customers' needs at the center of everything we do.</li>
            <li>Integrity: We maintain the highest level of integrity and honesty in our business practices.</li>
            <li>Innovation: We are always looking for new and better ways to improve our offerings and services.</li>
            <li>Quality: We never compromise on the quality of our products or services.</li>
          </ul>
        </div>

        <div className="about-us-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of highly skilled professionals from diverse backgrounds who work tirelessly to provide the best shopping experience to our customers. With a shared vision of success, we collaborate to bring you exceptional products and services.
          </p>
        </div>
      </section>

      <div className="about-us-footer">
        <p>Thank you for choosing ShopNow. We look forward to serving you!</p>
      </div>
    </div>
  );
};

export default AboutUs;
