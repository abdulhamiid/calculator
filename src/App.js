import './App.css';
import React, { Component } from 'react';
import Calculate from './components/Calculator';

// eslint-disable-next-line react/prefer-stateless-function
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculate />
      </div>
    );
  }
}

export default App;
