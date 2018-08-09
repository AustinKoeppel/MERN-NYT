import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NavTabs from "./components/NavTabs";
import Results from "./components/pages/Results";
import Saved from "./components/pages/Saved";
import Search from "./components/pages/Search";

const App = () => (
  <Router>
    <div>
      <Navbar/>
      <NavTabs />
      <Route exact path="/" component={Search} />
      <Route exact path="/Results" component={Results} />
      <Route exact path="/search" component={Saved} />
    </div>
  </Router>
);

export default App;