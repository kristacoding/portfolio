import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import ContactMe from "./pages/ContactMe";
import Portfolio from "./pages/Portfolio";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Wrapper>
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contactme" component={ContactMe} />
          <Route exact path="/portfolio-react" component={About} />
          <Route exact path="/" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;