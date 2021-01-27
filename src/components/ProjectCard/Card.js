import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.title}
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
          <button className="button btn-outline" href={props.Deployed}>Deployed Application
            </button>
          </li>
          <li>
          <button className="button btn-outline" href={props.Github}>Github Repo
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;