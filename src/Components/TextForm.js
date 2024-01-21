import React, { useState } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const handleClick = () => {
    setText(text.toUpperCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleChange = (event) => {
    const text = event.target.value;
    setText(event.target.value);
    const word = text.split(" ");
    setWord(word.length - 1);
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
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleClear}
          style={{ marginTop: "30px", marginLeft: "10px" }}
        >
          Clear
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
