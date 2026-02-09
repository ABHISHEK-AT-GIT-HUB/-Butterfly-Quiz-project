import React, { useState } from "react";
import { questions } from "./questions";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [growthStage, setGrowthStage] = useState(0);

  const growthSteps = [
    "https://cdn.pixabay.com/animation/2023/03/02/16/55/16-55-14-545_512.gif",
    "https://img.buzzfeed.com/buzzfeed-static/static/2015-06/2/17/enhanced/webdr05/anigif_enhanced-30275-1433278797-2.gif",
    "https://i.makeagif.com/media/8-28-2022/ILnjkV.gif",
  ];

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setGrowthStage((g) => g + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setGrowthStage(0);
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f9f9f9",
      }}
    >
      {showScore ? (
        <div>
          {score === questions.length ? (
            <div>
              <h2 style={{ color: "#28a745" }}>
                Congratulations! A beautiful garden has bloomed!
              </h2>
              <div style={{ margin: "20px" }}>
                <img
                  src={growthSteps[growthSteps.length - 1]}
                  alt="Garden"
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <h2 style={{ color: "#333" }}>
                You scored {score} out of {questions.length}
              </h2>
              <p>Your plant is at this stage:</p>
              <div style={{ margin: "20px" }}>
                <img
                  src={growthSteps[growthStage] || growthSteps[0]}
                  alt="Stage"
                  style={{
                    maxWidth: "100%",
                    height: "200px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          )}
          <button
            onClick={handleRestart}
            style={{
              padding: "12px 24px",
              fontSize: "16px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              marginTop: "20px",
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          <div style={{ marginBottom: "20px" }}>
            <div
              style={{ fontSize: "20px", marginBottom: "10px", color: "#555" }}
            >
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div style={{ fontSize: "22px", fontWeight: "bold" }}>
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleAnswerOptionClick(answerOption.isCorrect)
                  }
                  style={{
                    padding: "15px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: "#f0f0f0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    transition: "background-color 0.2s",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#e0e0e0")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#f0f0f0")
                  }
                >
                  {answerOption.answerText}
                </button>
              ),
            )}
          </div>
          <div
            style={{
              marginTop: "30px",
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={growthSteps[growthStage] || growthSteps[0]}
              alt="Growth"
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
                borderRadius: "10px",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
