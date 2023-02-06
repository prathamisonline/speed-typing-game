import "./style.css";
import React, { useEffect, useState } from "react";

function App() {
  const STARTING_TIME = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  const countDownTimer = () => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
        console.log(setTimeRemaining);
      }, 1000);
    } else if (timeRemaining == 0) {
      setIsTimeRunning(false);

      setWordCount(countNumberOfWord(text));
    }
  };

  function startGame() {
    setIsTimeRunning(true);
    setText("");
    setTimeRemaining(STARTING_TIME);
    setWordCount(0);
  }

  useEffect(() => {
    countDownTimer();
  }, [timeRemaining, isTimeRunning]);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countNumberOfWord(text) {
    const split = text.trim().split(" ");
    return split.filter((item) => item !== "").length;
  }
  // console.log(text);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        disabled={isTimeRunning == 0}
        onChange={handleChange}
        value={text}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={() => startGame()}>
        START
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
