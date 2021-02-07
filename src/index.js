// follow this medium article :
// https://medium.com/javascript-in-plain-english/advanced-react-optimization-techniques-66614412efdc

import { StrictMode } from "react";
import ReactDOM from "react-dom";

// import Controller from "./Controller1";
// import Controller from "./Controller2"
import Controller from "./Controller3";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Controller />
  </StrictMode>,
  rootElement
);
