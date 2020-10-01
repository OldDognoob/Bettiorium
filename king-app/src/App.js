import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components';
import AboutUs from './components';
import Articles from './components';
import Videos from './components';
import SignUp from '/components';
import '.App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about-us' component={aboutUs}/>
          <Route path='/articles' component={articles}/>
          <Route path='/videos' component={videos}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
