import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart.js';
import LineChart from './LineChart.js';
import LineBrush from './LineBrush.js';
// import LineChartExample from './LineChartExample';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Kelly's D3 Chart Guide</h1>
        </header>
        <div className="App-Container">
          {/* <LineChartExample /> */}
          <BarChart />
          <LineChart />
          <LineBrush />
        </div>
      </div>
    );
  }
}

export default App;
