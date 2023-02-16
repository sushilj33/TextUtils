// import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLoClick = () => {
    // console.log("Lowercase was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const handleUndo = () => {
    // console.log("Uppercase was clicked"+ text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleCopy = () => {
    // console.log("Uppercase was clicked"+ text);
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };
  const handleOnChnage = (event) => {
    // console.log("On Chnage");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label for="myBox" class="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChnage}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743" }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleUndo}>
          Undo
        </button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopy}>
          Copy Text
        </button>
      </div>
      <div className="container my-2" style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read. </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here."}</p>
      </div>
    </>
  );
}
