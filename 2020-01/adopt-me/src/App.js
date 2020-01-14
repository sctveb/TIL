import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

/// Pure React
// const App = () => {
//   return React.createElement(
//     "div",
//     { id: "something-important" },
//     React.createElement("h1", {}, "Adopt Me!"),
//     React.createElement(Pet, {
//       name: "Luna",
//       animal: "Dog",
//       breed: "Havanese"
//     }),
//     React.createElement(Pet, {
//       name: "Pepper",
//       animal: "Bird",
//       breed: "Cocktiel"
//     })
//   );
// };

// ReactDOM.render(React.createElement(App), document.getElementById("root"));

/// JSX
// const App = () => {
//   return (
//     <div id="something-important">
//       <h1>Adopt Me!</h1>
//       <Pet name="Luna" animal="Dog" breed="Havanese" />\
//       <Pet name="Pepper" animal="Bird" breed="Cocktiel" />
//     </div>
//   );
// };

// ReactDOM.render(<App />, document.getElementById("root"));

/// Hooks
const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
