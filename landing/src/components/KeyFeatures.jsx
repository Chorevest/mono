import React from "react";
import "./KeyFeatures.css";
import featureImg1 from "../assets/images/featureImg1.png"; // Example image paths
import featureImg2 from "../assets/images/featureImg2.png";
/* import featureImg3 from '../assets/images/featureImg3.png'; */
import featureImg4 from "../assets/images/featureImg4.png";
import featureImg5 from "../assets/images/featureImg5.png";

const features = [
  { id: 1, text: "Create a Family Account", img: featureImg1 },
  { id: 2, text: "Assign Weekly Chores", img: featureImg2 },
  { id: 3, text: "Choose a Financial Strategy", img: featureImg1 },
  { id: 4, text: "Monitor Chores and Payouts", img: featureImg4 },
  {
    id: 5,
    text: "Watch your kids learn while thier investment grows!",
    img: featureImg5,
  },
];

function KeyFeatures() {
  return (
    <div className="key-features">
      {features.map((feature) => (
        <div className="feature" key={feature.id}>
          <div className="feature-image">
            <img src={feature.img} alt={`Feature ${feature.id}`} />
          </div>
          <div className="feature-text">
            <p>{feature.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default KeyFeatures;
