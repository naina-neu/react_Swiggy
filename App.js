import React from "react";
import ReactDOM from "react-dom";

//React.createElement => ReactElement-JS Object => HTMLELement(render)
const heading = React.createElement(
  "h1",
  {
    id: "heading",
    key: "heading", // Adding key to heading1 element
  },
  "Hello World - React"
);

//JSX (transplied before it reaches the JS - PARCEl - Babel)
//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLELement(render)
const jsxheading = (
  <h1 id="heading1" className="heading1" tabIndex="1">
    React using JSX
  </h1>
);

const element = "Heading";
const Title = () => {
  return (
    <h1 className="head" tabIndex="5">
      {element}
    </h1>
  );
};
//React Functional Component
const Heading = () => {
  return (
    <div className="container">
      <Title />
      <h1>React Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);
