import React, { Component } from 'react';
import drawinator from './drawinator';
import './App.css';

class App extends Component {
  componentDidMount() {
    drawinator.drawSomeStuff();
  }

  render() {
    return (
      <div className="App">
        <canvas id="c"></canvas>
      </div>
    );
  }
}

export default App;
