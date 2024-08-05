import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  // Ensure projects is an array
  if (!Array.isArray(projects)) {
    console.error("Expected 'projects' to be an array");
    return null;
  }

  const singleItem = projects.map((project) => (
    <ProjectItem key={project.id} project={project} />
  ));

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{singleItem}</div>
    </div>
  );
}

export default ProjectList;
