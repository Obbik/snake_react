import React from "react";
import "./App.css";

function Snake(props) {
  return props.kropka.map((snake, i) => {
    const style = {
      top: `${snake[0]}%`,
      left: `${snake[1]}%`,
    };
    return <div className="snake" style={style} key={i}></div>;
  });
}

export default Snake;
