import React, { useState } from "react";
import { SnackbarProvider, useSnackbar } from "notistack";

export default function TextForm() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [word, setWord] = useState(0);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const handleClick = () => {
    setText(text.toUpperCase());
    enqueueSnackbar("Text Converted to Upper case");
  };
  const handleCopy = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
    enqueueSnackbar("Text Copied");
  };
  const handlelowercase = () => {
    setText(text.toLocaleLowerCase());
    enqueueSnackbar("Text Converted to Lower case");
  };
  const handleSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    enqueueSnackbar("Extra Spaces removed");
  };
  const handleClear = () => {
    setText("");
    enqueueSnackbar("Text Cleared");
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
      <div className="container" style={{ background: "green" }}>
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
          Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handlelowercase}
          style={{ marginTop: "30px", marginLeft: "10px" }}
        >
          Lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCopy}
          style={{ marginTop: "30px", marginLeft: "10px" }}
        >
          Copy Text
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSpaces}
          style={{ marginTop: "30px", marginLeft: "10px" }}
        >
          Remove Spaces
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
