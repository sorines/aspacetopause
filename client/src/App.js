import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/pages/Home";
import Blogs from "./components/pages/Blogs";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import withAuthentication from './withAuthentication';

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/blog" component={Blogs} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
      </React.Fragment>
    </Router>
  );
}

export default App;
