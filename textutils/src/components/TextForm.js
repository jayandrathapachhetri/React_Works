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
  }

  const handleLoClick = () => {
    // console.log("Lowercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
  }

  const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    } 
    
    const handleExtraSpaces = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
    }

    const handleClearClick = () => {
      setText("");
    };


  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#153003'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#153003'}} id='myBox' rows="8"></textarea>
        <button className="btn btn-success mx-1 my-2" onClick={handleUpClick} >Convert to Uppercase</button>
        <button className="btn btn-success mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-success mx-1" onClick={handleExtraSpaces}> Remove extra spaces</button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-success mx-1" onClick={handleClearClick}>Clear Text</button>
      </div>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#153003'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
    </div>
    </>
  );
}

// import React, { useState } from "react";

// export default function Textform(props) {
//   const [text, setText] = useState("Enter Text here");
//   const [editing, setEditing] = useState(false);

//   const handleOnChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleUpClick = () => {
//     let newText = text.toUpperCase();
//     setText(newText);
//   };

//   const handleLoClick = () => {
//     let newText = text.toLowerCase();
//     setText(newText);
//   };

//   const handleCopy = () => {
//     var text = document.getElementById("myBox");
//     text.select();
//     navigator.clipboard.writeText(text.value);
// } 

// const handleExtraSpaces = () => {
//   let newText = text.split(/[ ]+/);
//   setText(newText.join(" "))
// }

//   const handleEditClick = () => {
//     setEditing(true);
//   };

//   const handleSaveClick = () => {
//     setEditing(false);
//   };

  // const handleClearClick = () => {
  //   setText("");
  // };

//   return (
//     <>
//       <div className="container">
//         <h1>{props.heading}</h1>
//         <div className="mb-3">
//           {editing ? (
//             <textarea
//               className="form-control"
//               value={text}
//               onChange={handleOnChange}
//               id='myBox'
//               rows="8"
//             ></textarea>
//           ) : (
//             <p>{text}</p>
//           )}
//           {editing ? (
//             <>
//               <button className="btn btn-primary mx-1 my-2" onClick={handleSaveClick}>
//                 Save
//               </button>
//               <button className="btn btn-primary mx-1" onClick={handleClearClick}>
//                 Clear
//               </button>
//             </>
//           ) : (
//             <>
//               <button className="btn btn-primary mx-1" onClick={handleUpClick}>
//                 Convert to Uppercase
//               </button>
//               <button className="btn btn-primary mx-1" onClick={handleLoClick}>
//                 Convert to Lowercase
//               </button>
              
        
//               <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
//                 Remove extra spaces
//               </button>
//               <button className="btn btn-primary mx-1" onClick={handleCopy}>
//                 Copy Text
//               </button>
//               <button className="btn btn-primary mx-1" onClick={handleEditClick}>
//                 Edit Text
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//       <div className="container my-3">
//         <h2>Your text Summary</h2>
//         <p>
//           {text.split(" ").length} words and {text.length} characters
//         </p>
//         <p>{0.008 * text.split(" ").length} Minutes read</p>
//         <h2>Preview</h2>
//         <p>{text}</p>
//       </div>
//     </>
//   );
// }

