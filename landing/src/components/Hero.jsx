import React, { useState } from "react";
import "./Hero.css"; // Import a CSS file for styling
import heroImg from "../assets/images/heroImg.png"; // Adjust the path to your logo image
// import { Quiz } from "./Quiz.jsx";

const questions = [
  {
    question: "Does your child have an earned income?",
    options: ["Yes", "No"],
  },
  {
    question: "Is your monthly household income over $220,000?",
    options: ["Yes", "No"],
  },
  {
    question: "How much do you plan to contribute yearly?",
    options: [
      "Less than $2,000",
      "More than $2,000",
      "More than $7,000",
      "I'm not sure yet",
    ],
  },
  {
    question: "Where do you plan to spend your child's account funds?",
    options: [
      "Education",
      "Retirement",
      "House Downpayment",
      "Whatever they want",
    ],
  },
];

function Hero() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const renderProgress = () => {
    return (
      <div className="progress">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`circle ${index <= currentQuestion ? "active" : ""}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="hero">
      {!showResults ? (
        <>
          <h1>Where should you invest for your child's future?</h1>
          <text>
            Take our quiz below to get a personalized investment account
            recommendation for your child
          </text>
          <div className="quizbox">
            {renderProgress()}
            <div className="quiz">
              <h2>{questions[currentQuestion].question}</h2>
              <div className="options">
                {questions[currentQuestion].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswerClick(option)}>
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="results">
          <h2>Results are being calculated</h2>
          <div className="results-left"></div>

          <div className="results-right">
            <img src={heroImg} alt="Result" />
            <input type="text" placeholder="Enter your email" />
            <button>Email me when the app launches!</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
