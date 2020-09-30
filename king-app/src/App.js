import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


// import './App.css'

function App() {
  
  return (
    <>
      <Router>
        {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
          {/* <GlobalStyles /> */}
          <Navbar />
          <Switch>
            {/* <Toggle onToggle={toggleTheme}>Toggle theme</Toggle>
            <h1>It's a {theme} theme!</h1> */}
            <Route path="/" exact />
          </Switch>
        {/* </ThemeProvider> */}
      </Router>
    </>
  );
}

export default App;
