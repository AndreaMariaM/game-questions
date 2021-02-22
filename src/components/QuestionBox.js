import React, { useState } from "react";

const QuestionBox = ({ question, options }) => {
    const [Id, setQuestion] = useState(options);
    return (
        <div className="QuestionBox">
            <div className="question">{question}</div>
            <button key={Id} className="answerBtn" onClick={() => {
                setQuestion([Id]);
            }}>Select</button>
        </div>
    );
};

export default QuestionBox;
