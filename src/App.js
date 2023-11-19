import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AOS from "aos";
import "aos/dist/aos.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Moresholk from "./components/Moresholk";
import IndividualShlok from "./components/IndividualShlok";
import Footer from "./components/Footer";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
          <Route exact path="/moreshlok" component={Moresholk} />
          <Route
            exact
            path="/shlok/:chapter/:verse"
            component={IndividualShlok}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
