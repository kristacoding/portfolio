import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/Card";
import Wrapper from "../components/Wrapper/Wrapper";
import project from "../projects.json";
import "./style.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    project
  }

  // Map over this.state.project and render a ProjectCard component for each project object
  render() {
    return (
      <div className = "body">
        <h1>Krista's Portfolio</h1>
        <Wrapper>
          {this.state.project.map(project => (
            <ProjectCard
              id={project.id}
              key={project.id}
              title={project.title}
              image={project.image}
              description={project.description}
              Deployed={project.Deployed}
              Github={project.Github}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;