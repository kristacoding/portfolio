import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./About";
import ContactMe from "./ContactMe";
import Portfolio from "./Portfolio";
import Nav from "./Nav";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactme" component={ContactMe} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;