import React, { Component } from "react";

class FizzBuzz extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      fizzbuzzed: [],
    };
  }

  handleChange(val) {
    this.setState({ userInput: parseInt(val, 10) });
  }

  fizzBuzz(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        result.push("fizzbuzz");
      } else if (i % 3 === 0) {
        result.push("fizz");
      } else if (i % 5 === 0) {
        result.push("buzz");
      } else {
        result.push(i);
      }
    }

    this.setState({ fizzbuzzed: result });
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>FizzBuzz</h4>
        <input
          className="inputLine"
          type="number"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.fizzBuzz(this.state.userInput)}
        >
          Fizz Buzz It
        </button>
        <span className="resultsBox filterStringRB">
          FizzBuzzed: {JSON.stringify(this.state.fizzbuzzed, null, 10)}
        </span>
      </div>
    );
  }
}

export default FizzBuzz;
