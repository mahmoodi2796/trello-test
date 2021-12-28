import "./App.css";
import Home from "./components/home/Home.js";
import About from "./components/about/About.js";
import Login from "./components/log-in/Login.js";
import Btnpricing from "./components/btnpricing/Btnpricing.js";

import { Routes, Route, Link } from "react-router-dom";

import React from "react";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="Btnpricing" element={<Btnpricing />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
