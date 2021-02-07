import "./styles.css";
import React, { useState, memo } from "react";

const Controller = () => {
  const [names, setNames] = useState([]);

  const addName = () => {
    //const newNames = names;
    const newNames = [...names];
    newNames.push("another name");
    setNames(newNames);
  };

  return (
    <div className="App">
      <button onClick={() => addName()}>Add Name</button>
      <Display names={names} />
    </div>
  );
};

const Display = memo((props) => {
  console.log("display is re-rendering");
  return (
    <div>
      {props.names.map((name) => (
        <div>{name}</div>
      ))}
    </div>
  );
});
export default Controller;
