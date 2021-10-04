import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Courses from "./Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import NotFound from "./NotFound/NotFound";
import Research from "./Research/Research";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/home">
            <Header></Header>
          </Route>
          <Route exact path="/">
            <Header></Header>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/research">
            <Research></Research>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
