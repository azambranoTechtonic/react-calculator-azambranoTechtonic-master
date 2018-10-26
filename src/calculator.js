import React from 'react';
import logo from './logo.svg';
import { CalculatorScreen } from './components/calculatorScreen.js';
import { CalculatorBody } from './components/calculatorBody.js';
import './App.css';
import './bootstrap.css'; //THIS FILE HAS BEEN EDITED

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = { calcScreen: '' };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    //This function is fired when the onClick prop inside Calculator Body is triggered

    switch (e.target.value){

      case 'C': this.clearInput();
        break;

      case '+':
      case '-':
      case '*':
      case '/': this.handleOperator(e.target.value);
        break;

      case '=': this.handleEqual();
        break;

      default: let calcString = this.state.calcScreen + e.target.value;
        this.setState({ calcScreen: calcString });
    }
  }

  handleOperator(op) {
    this.setState({ firstLeg: this.state.calcScreen, operator: op, calcScreen: '' });
  }

  getResult() {

    switch (this.state.operator){
      case '+': return parseInt(this.state.firstLeg, 10) + parseInt(this.state.lastLeg, 10);
      case '-': return parseInt(this.state.firstLeg, 10) - parseInt(this.state.lastLeg, 10);
      case '*': return parseInt(this.state.firstLeg, 10) * parseInt(this.state.lastLeg, 10);
      case '/': return parseInt(this.state.firstLeg, 10) / parseInt(this.state.lastLeg, 10);

      default: return false;

    }

  }

  async handleEqual() {

    var lastNum = this.state.calcScreen;
    await this.setState({ lastLeg: lastNum });
    let myResult = this.getResult();
    this.setState({ calcScreen: myResult });
  }

  clearInput() {
    this.setState({ calcScreen: '' });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-md-6 margin-center">
              <CalculatorScreen screenVal={this.state.calcScreen}/>
              <CalculatorBody onClick={this.handleClick}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
