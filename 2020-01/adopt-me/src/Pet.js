import React from "react";

/// Pure React
// export default function Pet({ name, animal, breed }) {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, name),
//     React.createElement("h2", {}, animal),
//     React.createElement("h2", {}, breed)
//   );
// }

/// JSX
// export default function Pet({ name, animal, breed }) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h2>{animal}</h2>
//       <h2>{breed}</h2>
//     </div>
//   );
// }

/// Hooks
export default function Pet({ name, animal, breed }) {
  return (
    <div>
      <h1>{name}</h1>
      <h2>{animal}</h2>
      <h2>{breed}</h2>
    </div>
  );
}
