import React, { Component } from "react";

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
      palindrome: ""
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    var arr = userInput;
    var arrReversed = userInput;
    arrReversed = arrReversed.split("");
    arrReversed = arrReversed.reverse();
    arrReversed = arrReversed.join("");

    if (arr === arrReversed) {
      this.setState({ palindrome: "true" });
    } else {
      this.setState({ palindrome: "false" });
    }
  }

  render() {
    return (
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input
          className="inputLine"
          placeholder="Type Here"          
          onChange={e => this.handleChange(e.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.isPalindrome(this.state.userInput)}
        >
          {" "}
          Check{" "}
        </button>
        <span className="resultsBox">
          {" "}
          Palindrome: {this.state.palindrome}{" "}
        </span>
      </div>
    );
  }
}
