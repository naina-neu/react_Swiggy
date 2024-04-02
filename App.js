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

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h1" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "h1" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "h1" }, "I'm an h2 tag"),
  ])
);

const heading1 = React.createElement(
  "h1",
  {
    id: "heading",
    XYZ: "abc",
  },
  "Hello World - React"
);

console.log(parent); // Object
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent);
