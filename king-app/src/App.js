import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import Articles from './components/pages/Articles';
import Videos from './components/pages/Videos';
import SignUp from './components/pages/SignUp';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/about-us' component={AboutUs}/>
          <Route path='/articles' component={Articles}/>
          <Route path='/videos' component={Videos}/>
          <Route path='/sign-up' component={SignUp}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
