import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Portfolio from "/pages/Portfolio"
import Nav from "./components/core/Nav/Nav";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
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