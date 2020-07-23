import React from "react";
import "./App.css";

function Snakefood(props) {
  const style = {
    top: `${props.coords[0]}%`,
    left: `${props.coords[1]}%`,
  };
  return <div className="snake-food" style={style}></div>;
}

export default Snakefood;
