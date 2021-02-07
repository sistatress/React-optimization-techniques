import "./styles.css";
import React, { useState, memo, useCallback } from "react";

const Controller = () => {
  const [names, setNames] = useState([]);

  const addName = () => {
    const newNames = [...names];
    newNames.push("another name");
    setNames(newNames);
  };

  const clearNames = useCallback(() => setNames([]), [setNames]); // perf ok
  // const clearNames = () => setNames([]) // bad perf

  return (
    <div className="App">
      <button onClick={() => addName()}>Add Name</button>
      <div>
        {names.map((name, index) => (
          <div key={index}>{name}</div>
        ))}
      </div>
      <ClearButton clearNames={clearNames} />
    </div>
  );
};

const ClearButton = memo((props) => {
  console.log("ClearButton is re-rendering");
  return (
    <div>
      <button onClick={props.clearNames}>Clear</button>
    </div>
  );
});
export default Controller;
