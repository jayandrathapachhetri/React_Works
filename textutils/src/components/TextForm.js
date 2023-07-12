import React from "react";

export default function Textform(props) {
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" id="'myBox" rows="8"></textarea>
        <button className="btn btn-primary">Convert to Uppercase</button>
      </div>
    </div>
  );
}
