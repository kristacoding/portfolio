import React, { Component } from "react";
import ProjectCard from "../components/ProjectCard/Card";
import Wrapper from "../components/Wrapper/Wrapper";
import project from "../projects.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    project
  }

  // Map over this.state.project and render a ProjectCard component for each project object
  render() {
    return (
      <Wrapper>
          <h1>Krista's Portfolio</h1>
        {this.state.friends.map(project => (
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
    );
  }
}

export default App;