import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

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
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
