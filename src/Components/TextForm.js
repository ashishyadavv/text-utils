import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("Enter your text here.........");
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const handleChange = (event) => {
    const text = event.target.value;
    setText(event.target.value);
    const word = text.split(" ");
    setWord(word.length);
    setCount(text.length);
  };
  return (
    <>
      <div className="container">
        <label
          htmlFor="exampleFormControlTextarea1"
          style={{ color: "grey", fontSize: "20px", marginBottom: "10px" }}
        >
          Play With Your Texts
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          onChange={handleChange}
          value={text}
        ></textarea>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClick}
          style={{ marginTop: "30px" }}
        >
          Submit
        </button>
      </div>
      <div className="container my-3" style={{ color: "GrayText" }}>
        <p>
          Total Words :<span style={{ color: "orange" }}>{word}</span>
        </p>
        <p>Total characters :{count}</p>
        <p>Avg time required to read:{word * 0.008}</p>
      </div>
    </>
  );
}
