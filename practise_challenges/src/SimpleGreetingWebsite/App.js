import './App.css';
import React from 'react';

function App() {
  let curDate = new Date(2020, 6, 6 , 17); // Year Month Day Hours
  curDate = curDate.getHours() ;
  let greeting = '';

  {(curDate >= 1 && curDate <= 12)?  greeting="Good Morning"
  : (curDate >= 12 && curDate <= 18)? greeting="Good Afternoon"
  : greeting="Good Night"}


  return (
    <div className="App">
      <h1>Hello Jay, {greeting}</h1>
    </div>
  );
}
export default App;
