import React, { useState } from "react";
import "./Quiz.css";

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

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswerClick = (option) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = option;
    setAnswers(newAnswers);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setCurrentQuestion(currentQuestion);
    }
  };

  const calculateResults = () => {
    const resultBlocks = [
      { id: "A", text: "Custodial Roth IRA", isHighlighted: false },
      { id: "B", text: "529 Education", isHighlighted: false },
      {
        id: "C",
        text: "Coverdell Education Savings Plan",
        isHighlighted: false,
      },
      { id: "D", text: "UGMA/UTMA Custodial Accounts", isHighlighted: false },
      { id: "E", text: "Brokerage Account", isHighlighted: false },
    ];

    if (
      answers[0] === "Yes" &&
      ["Less than $2,000", "More than $2,000", "I'm not sure yet"].includes(
        answers[2]
      ) &&
      ["Education", "Retirement", "House Downpayment"].includes(answers[3])
    ) {
      resultBlocks[0].isHighlighted = true;
    }

    if (answers[3] === "Education") {
      resultBlocks[1].isHighlighted = true;
    }

    if (
      answers[1] === "No" &&
      answers[2] === "Less than $2,000" &&
      answers[3] === "Education"
    ) {
      resultBlocks[2].isHighlighted = true;
    }

    if (answers[3] === "Whatever they want") {
      resultBlocks[3].isHighlighted = true;
      resultBlocks[4].isHighlighted = true;
    }

    return resultBlocks;
  };

  const results = calculateResults();

  return (
    <div className="quiz">
      {currentQuestion < questions.length ? (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswerClick(option)}
                className="option-button"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="results-section">
          <h2>Results</h2>
          <div className="results">
            {results.map((result) => (
              <div
                key={result.id}
                className={`result-block ${
                  result.isHighlighted ? "highlighted" : ""
                }`}
              >
                {result.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;
