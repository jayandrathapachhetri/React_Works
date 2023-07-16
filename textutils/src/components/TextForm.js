import React, {useState}  from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
}

  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase!", "success");
  }

  const handleLoClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase!", "success");
  }

  const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copied to clipboard!", "success");
    } 
    
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra spaces removed!", "success");
    }

    const handleClearClick = () => {
      setText("");
      props.showAlert("Text Cleared!", "success");
    };


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#153003'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'darkolivegreen':'white', color: props.mode==='dark'?'white':'#153003'}} id='myBox' rows="8"></textarea>
        <button className="btn btn-success mx-1 my-2" disabled={text.length===0} onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-success mx-1 my-2" disabled={text.length===0} onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-success mx- my-2" disabled={text.length===0} onClick={handleExtraSpaces}> Remove extra spaces</button>
        <button className="btn btn-success mx-1 my-2" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-1 my-2 " disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#153003'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
        {/* <p>{text.trim().length === 0 ? 0 : text.trim().split(" ").length}</p> */}
    </div>
    </>
  );
}

