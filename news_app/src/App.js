import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
// import Spinner from "./Spinner";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        {/* <Spinner/> */}
        <News pageSize={5} country="in" category="science"/>

      </div>
    )
  }
}

export default App
