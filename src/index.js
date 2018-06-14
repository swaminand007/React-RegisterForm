import React from "react";
import ReactDOM from "react-dom";
import Register from "./register.js";

import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// };

function Test() {
  return (
    <div>
      <h1 style={{ color: "blue" }}>Welcome to E-World</h1>
    </div>
  );
}
class App extends React.Component {
  
  render() {
    return (
      <div>
        <Test />
        <Register />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
