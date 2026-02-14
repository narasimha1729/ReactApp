import React from "react";
import { Routes, Route, Link } from "react-router-dom";
//import Counter from "./Counter";
import State from "./State";
import Parent from "./Parent";
import Count from "./Count";

function App() {
  return (
    <div>
      <h1>React Routing Example</h1>

      {/* Navigation */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/count">Count</Link></li>
          <li><Link to="/state">State</Link></li>
        </ul>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/count" element={<Count />} />
        <Route path="/state" element={<State />} />
      </Routes>
    </div>
  );
}

function Home() {
  return <h2>Home Page</h2>;
}

export default App;
