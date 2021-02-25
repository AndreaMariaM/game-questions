import React from "react";

function ScoreBox(props) {
  return (
    <div className="score-board">
      <div className="title">Score</div>
      <div className="score">{props.score}</div>
    </div>
  );
}

export default ScoreBox;
