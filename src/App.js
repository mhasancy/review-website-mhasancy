import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About/About";
import "./App.css";
import Courses from "./Courses/Courses";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import NotFound from "./NotFound/NotFound";
import Research from "./Research/Research";
function App() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home courses={courses}></Home>
          </Route>
          <Route path="/courses">
            <Courses courses={courses}></Courses>
          </Route>
          <Route path="/research">
            <Research></Research>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
      <div className="d-none"></div>
    </div>
  );
}

export default App;
