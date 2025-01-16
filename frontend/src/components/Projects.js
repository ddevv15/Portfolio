import React, { useState, useEffect } from "react";
import API from "../api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await API.get("/projects"); // API endpoint for projects
        setProjects(response.data); // Update state with fetched data
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <p>Technologies: {project.technologies.join(", ")}</p>
            <a href={project.githubLink} target="_blank" rel="noreferrer">
              GitHub
            </a>
            {project.liveLink && (
              <a href={project.liveLink} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
