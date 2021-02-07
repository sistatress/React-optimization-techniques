import "./styles.css";
import React, { useState, memo } from "react";

const Controller = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <button onClick={() => setCount((count) => count + 1)}>Click</button>
      <Display />
    </div>
  );
};

const Display = memo(() => {
  console.log("display is re-rendering");
  return <div>this is a display function</div>;
});
export default Controller;
