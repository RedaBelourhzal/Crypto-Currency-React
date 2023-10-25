import React from "react";
import { Card } from "primereact/card";

export default function About() {
  const header = (
    <div className="p-d-flex p-jc-center">
      <h1>About Our Cryptocurrency Platform</h1>
    </div>
  );

  return (
    <div className="p-d-flex p-flex-column p-jc-center p-ai-center">
      <Card title={header} className="p-mb-3" style={{ width: "100%" }}>
        <h2>Our Mission</h2>
        <p>
          At Coin4Life, our mission is to provide you with the most up-to-date
          and accurate information about the cryptocurrency market. We aim to
          empower our users with the knowledge they need to make informed
          decisions in the world of digital assets.
        </p>

        <h2>Market Overview</h2>
        <p>
          The cryptocurrency market is a dynamic and fast-paced space. It
          includes thousands of digital currencies and tokens, each with its
          unique features and use cases. Our platform offers real-time data on
          cryptocurrency prices, market capitalization, trading volumes, and
          historical price charts.
        </p>

        <h2>Why Choose Coin4Life?</h2>
        <ul>
          <li>Comprehensive Cryptocurrency Data</li>
          <li>User-Friendly Interface</li>
          <li>Expert Analysis and Insights</li>
          <li>Secure and Reliable</li>
          <li>24/7 Customer Support</li>
          <li>Advanced Portfolio Tracking</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions or suggestions? We'd love to hear from you! Feel free
          to reach out to our support team via email at support@coin4life.com or
          use the contact form on our website. You can also follow us on social
          media for the latest updates and news.
        </p>
      </Card>
    </div>
  );
}
