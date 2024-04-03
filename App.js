/****
 *
 * <div id="parent">
 *      <div id="child">
 *           <h1>I'm an h1 tag</h1>
 *           <h2>I'm an h1 tag</h2>
 *      </div>
 * </div>
 *
 *
 *
 */

import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1", key: "child1" }, [
    React.createElement("h1", { id: "h1", key: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h12", key: "h2" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2", key: "child2" }, [
    React.createElement("h1", { id: "h13", key: "h3" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h14", key: "h4" }, "I'm an h2 tag"),
  ])
);

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
    XYZ: "abc",
    key: "heading", // Adding key to heading1 element
  },
  "Hello World - React"
);

console.log(parent);
const root1 = document.getElementById("root1");
ReactDOM.render(parent, root1);
