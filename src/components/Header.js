import React from "react";
import ScoreBox from "./ScoreBox";

function Header(props) {
  return (
    <header>
      <h1 className="header_title">
        <span>Name of the Game lol need to think of something</span>
      </h1>
      <ScoreBox score={props.score} />
    </header>
  );
}

export default Header;
