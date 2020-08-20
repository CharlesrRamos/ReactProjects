import React, { Component } from "react";
import Button from "../components/Button";
import "./Calculator.css";
import Display from "../components/Display";

const initialState = {
  displayValue: "0",
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0,
};

export default class Calculator extends Component {
  state = { ...initialState };

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigital(n) {
    if (n === "." && this.state.displayValue.includes(".")) {
      return;
    }

    const clearDisplay =
      this.state.displayValue === "0" || this.state.clearDisplay;
    const currentValue = clearDisplay ? "" : this.state.displayValue;
    const displayValue = currentValue + n;
    this.setState({ displayValue, clearDisplay: false });

    if (n !== ".") {
      const i = this.state.current;
      const newValue = parseFloat(displayValue);
      const values = [...this.state.value];
      values[1] = newValue;
      this.setState({ values });
    }
  }

  render() {
    const setOperation = (op) => this.setOperation(op);
    const addDigital = (n) => this.addDigital(n);

    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <Button label="AC" click={() => this.clearMemory()} triple />
        <Button label="/" click={setOperation} operation />
        <Button label="7" click={addDigital} />
        <Button label="8" click={addDigital} />
        <Button label="9" click={addDigital} />
        <Button label="*" click={setOperation} operation />
        <Button label="4" click={addDigital} />
        <Button label="5" click={addDigital} />
        <Button label="6" click={addDigital} />
        <Button label="-" click={setOperation} operation />
        <Button label="1" click={addDigital} />
        <Button label="2" click={addDigital} />
        <Button label="3" click={addDigital} />
        <Button label="+" click={setOperation} operation />
        <Button label="0" click={addDigital} double />
        <Button label="." click={addDigital} />
        <Button label="=" click={setOperation} operation />
      </div>
    );
  }
}
