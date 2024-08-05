import React from "react";

function ProjectItem({ project }) {
  const { name}= project.name
  const {about}= project.about
  const {technologies}= project.technologies

  return (
    <div className="project-item">
      <span>{name}</span>
      <span>{about}</span>
      <div className="technologies">
        <span>{technologies.join(", ")}</span>
      </div>
    </div>
  );
}

export default ProjectItem;
