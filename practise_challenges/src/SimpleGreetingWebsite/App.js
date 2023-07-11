import './App.css';
import React from 'react';

function App() {
  let curDate = new Date(2020, 6, 6, 4); // Year Month Day Hours
  curDate = curDate.getHours() ;
  let greeting = '';
  const cssStyle = { };

  // {(curDate >= 1 && curDate <= 12)? ( greeting="Good Morning", cssStyle.color = "Red")
  // : (curDate >= 12 && curDate <= 18)? ( greeting="Good Afternoon", cssStyle.color = "Blue")
  // : greeting="Good Night", cssStyle.color = "Green"}
  // here color is not applied in ternary operator

  if (curDate >= 1 && curDate <= 12) {
    greeting = "Good Morning";
    cssStyle.color = "Red";
  } else if (curDate >= 12 && curDate <= 18) {
    greeting = "Good Afternoon";
    cssStyle.color = "Blue";
  } else {
    greeting = "Good Night";
    cssStyle.color = "Green";
  }  


  return (
    <>
    <div className="App">
      <h1>Hello Jay, <span style={cssStyle}>{greeting}</span></h1>
    </div>
    </>
  );
}
export default App;
