import "./style.css";
import React, { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemainig] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const countDownTimer = () => {
    if (isActive && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemainig((time) => time - 1);
        console.log(setTimeRemainig);
      }, 1000);
    } else if (timeRemaining == 0) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    countDownTimer();
  }, [timeRemaining, isActive]);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function countNumberOfWord(text) {
    var count = 0;
    var split = text.trim().split(" ");
    for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
        count++;
      }
    }
    return console.log(count);
  }
  // console.log(text);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea onChange={handleChange} value={text} />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={() => setIsActive(true)}>START</button>
      <h1>Word Count: ???</h1>
    </div>
  );
}

export default App;
