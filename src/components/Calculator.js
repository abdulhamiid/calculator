import React, { Component } from 'react';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div id="calc-body">
        <form>
          <input value={value} />
        </form>
        <div id="keys">
          <button type="button" name="AC">AC</button>
          <button type="button" name="+/-">+/-</button>
          <button type="button" name="%">%</button>
          <button type="button" className="orange" name="/">&divide;</button>
          <button type="button" name="7">7</button>
          <button type="button" name="8">8</button>
          <button type="button" name="9">9</button>
          <button type="button" className="orange" name="*">&times;</button>
          <button type="button" name="4">4</button>
          <button type="button" name="5">5</button>
          <button type="button" name="6">6</button>
          <button type="button" className="orange" name="-">-</button>
          <button type="button" name="1">1</button>
          <button type="button" name="2">2</button>
          <button type="button" name="3">3</button>
          <button type="button" className="orange" name="+">+</button>
          <button type="button" name="0" id="zero">0</button>
          <button type="button" name=".">.</button>
          <button type="button" className="orange" name="=">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
