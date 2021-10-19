import React, { useState } from "react";
import "./Box.css";

const Box = () => {
  const [color, setColor] = useState(
    Box.defaultProps.colors[
      Math.floor(Box.defaultProps.colors.length * Math.random())
    ]
  );

  const changeColor = () => {
    let newColor =
      Box.defaultProps.colors[
        Math.floor(Box.defaultProps.colors.length * Math.random())
      ];

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
