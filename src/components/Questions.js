
import React, { Component } from "react";
import "./../assets/style.css";
import gameService from "./../gameService";

export class Questions extends Component {
  // we will have a unmount and mount phase and a call within the greater game.
  constructor(props) {
    super(props);
    this.state = {
      questionBank: [],
      selected: "",
      value: ""
    };
    this.Greet = this.Greet.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getQuestions = () => {
    gameService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };
  componentDidMount() {
    this.getQuestions();
  }
  handleChange(event) {
    this.setState({value: event.target.value})
  }
  handleSubmit(event) {
    console.log("An answer was submitted: " + this.state.value);
    event.preventDefault();
    // show the user just their answer eventually will be every players' amswer 
  }
  Greet() {
    if (this.state.selected === "") {
      return (
        <>
          <div className="title">Choose a Question</div>
          {this.state.questionBank.length > 0 &&
            this.state.questionBank.map(({ q, Id }) => (
              <div className="QuestionBox">
                <div className="question">{q}</div>
                <button
                  className="answerBtn"
                  onClick={() => {
                    this.setState({
                      selected: q 
                    });
                  }}
                >
                  Select
                </button>
              </div>
            ))}
        </>
      );
    }
    return (
      <>
        <div className="title">Answer the Question</div>
        <div className="QuestionBox">
          <div className="question">{this.state.selected}</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Answer:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
  render() {
    return (
      <div className="container">
        <this.Greet />
      </div>
    );
  }
}

export default Questions;
