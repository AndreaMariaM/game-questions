import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import gameService from "./gameService";
import QuestionBox from "./components/QuestionBox";

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionBank: [],
            selected: ""
        };
        this.Greet = this.Greet.bind(this);
        this.getQ = this.getQ.bind(this);
    }
    getQuestions = () => {
        gameService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    getQ() {
        this.getQuestions();
    }
    Greet() {
        if (this.state.selected === "") {
            return( 
                <div>{ this.getQ }{this.state.questionBank.map((q) => (
                    <div className="QuestionBox">
                        <div className="question">{q}</div>
                        <button className="answerBtn" onClick={() => {
                            this.setState({
                                selected: q
                            });
                          }}>Select</button>
                    </div>
                ))}</div>
            );
        }
        return <div className="questionBank">
            <div className="question">{this.state.question}</div>
        </div>
    }
    render() {
        return (
            <div className="container">
                <div className="title">Question</div>
                < this.Greet />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));