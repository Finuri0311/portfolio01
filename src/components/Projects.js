import React from 'react';

const Project = ({ title, desc, tech, link, repo }) => (
  <div className="project">
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>{tech}</p>
    <a href={link}>Live Demo</a>
    <a href={repo}>Source Code</a>
  </div>
);

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <Project
        title="SIGPetaKotaGorontalo"
        desc="A GIS-based system for agricultural data."
        tech="HTML, CSS, JS, PHP"
        link="https://github.com/finuri/sigpetakotagorontalo"
        repo="#"
      />
      <Project
        title="Website Portfolio"
        desc="A personal portfolio website showcasing my skills and projects."
        tech="HTML, CSS, JS"
        link="#"
        repo="#"
      />
    </section>
  );
};

export default Projects;
