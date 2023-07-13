import React, {useState}  from "react";

export default function Textform(props) {
  const [text, setText] = useState("Enter Text here");

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
}

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
}
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id='myBox' rows="8"></textarea>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
      </div>
    </div>
  );
}
