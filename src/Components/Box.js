import React, { useState } from "react";
import "./Box.css";

const Box = ({ colors }) => {
  const [color, setColor] = useState(
    colors[Math.floor(colors.length * Math.random())]
  );

  const changeColor = () => {
    let newColor = colors[Math.floor(colors.length * Math.random())];

    if (newColor !== color) {
      setColor(newColor);
    } else {
      changeColor();
    }
  };

  return (
    <div
      onClick={() => changeColor()}
      className={`box ${color && color}`}
      style={{ backgroundColor: color }}
    ></div>
  );
};

Box.defaultProps = {
  colors: ["#4CAF50", "#008CBA", "#f44336", "#e7e7e7", "#555555"],
};

export default Box;
