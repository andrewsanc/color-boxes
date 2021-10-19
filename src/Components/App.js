import React from "react";
import Box from "./Box";
import "./App.css";

const App = () => {
  const renderBoxes = () => {
    let boxes = Array.from({ length: App.defaultProps.numBoxes }).map(() => {
      return <Box />;
    });
    return boxes;
  };

  return <div className='container'>{renderBoxes()}</div>;
};

App.defaultProps = {
  numBoxes: 16,
};

export default App;
