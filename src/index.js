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
    }
    getQuestions = () => {
        gameService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    componentDidMount() {
        this.getQuestions();
    };
    Greet() {
        if (this.state.selected === "") {
            return( 
                <>
                    <div className="title">Choose a Question</div>
                    {this.state.questionBank.length > 0 && this.state.questionBank.map(({q, Id}) => {
                        <div className="QuestionBox">
                            <QuestionBox question={q}/>
                            {console.log(q)}
                            <button className="answerBtn" onClick={() => {
                                this.setState({
                                    selected: {q}
                                });
                            }}>Select</button>
                        </div>
                    })}
                </>
            );
        }
        return (
            <div>
                <div className="title">Answer the Question</div>
                <div className="questionBox">
                    <div className="question">{this.state.question}</div>
                </div>
            </div>
        );
    }
    render() {
        return (
            <div className="container">
                < this.Greet />
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));