// Import area
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

// App function
function App() {
  return (
    <Router>
      <Menu />
      <Home />
      <About />
      <Projects />
      <Contact />
    </Router>
  );
}

// App export
export default App;
