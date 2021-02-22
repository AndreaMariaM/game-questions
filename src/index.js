import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import gameService from "./gameService";
import QuestionBox from "./components/QuestionBox";

class Game extends Component {
    state = {
        questionBank: []
    };
    getQuestions = () => {
        gameService().then(question => {
            this.setState({
                questionBank: question
            });
        });
    };
    componentDidMount() {
        this.getQuestions();
    }
    render() {
        return (
            <div className="container">
                <div className="title">Game</div>
                {this.state.questionBank.length > 0 && 
                    this.state.questionBank.map(
                        ({question, Id}) => (
                            <QuestionBox 
                                question = {question}
                                key = {Id}
                            />
                        )
                    )}
            </div>
        );
    }
}

ReactDOM.render(<Game />, document.getElementById("root"));