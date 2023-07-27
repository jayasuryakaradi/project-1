import React from "react";
import "../components/Home.css";
import flipkartLogo from "../images/flipkart.png";
import amazonLogo from "../images/amazon.png";
import brandImage from "../images/hero-image.png";

const Home = () => {
  return (
    <main className="container-one one-body">
      <div className="content-text">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="content-buttons">
          <button className="red-btn">Shop Now</button>
          <button className="white-btn">Category</button>
        </div>

        <div className="online-platforms">
          <p>Also Available On</p>
          <div className="online-brands-logo">
            <img src={flipkartLogo} alt="flipkart-logo" title="Flipkart" />
            <img src={amazonLogo} alt="amazon-logo" title="Amazon" />
          </div>
        </div>
      </div>

      <div className="content-image">
        <img src={brandImage} alt="brandImage" title="Nike" />
      </div>
    </main>
  );
};

export default Home;
