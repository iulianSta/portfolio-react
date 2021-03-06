// Import area
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loading from "./components/Loading";

// App function
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  if (loading) return <Loading />;
  return (
    <Router>
      <Menu />
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        <Route
          path={`${process.env.PUBLIC_URL}/about`}
          exact
          component={About}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/projects`}
          exact
          component={Projects}
        />
        <Route
          path={`${process.env.PUBLIC_URL}/contact`}
          exact
          component={Contact}
        />
        <Route path={() => "/home" || "/admin" || "/any-other-word"} /> 
      </Switch>
      <Footer />
    </Router>
  );
}

// App export
export default App;
