
import React from "react";
import "../App.css";

function Portfolio() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Git",
    "API Integration",
  ];

  const projects = [
    {
      title: "Todo App",
      desc: "A task manager built with React.",
      link: "/todo",
    },
    {
      title: "Movie Search App",
      desc: "Search movies using an API with Axios.",
      link: "/movie",
    },
  ];

  return (
    <div>
      <header className="navbar">
        <h2>Arsad.dev</h2>
        <nav>
          <a href="#about">About</a>{" | "}
          <a href="#skills">Skills</a>{" | "}
          <a href="#projects">Projects</a>{" | "}
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h1>Mohammad Arsad Ansari</h1>
        <h3>Fresher Frontend Developer (React.js)</h3>
        <p>
          I am a BCA student learning frontend development
          and building projects using React.js.
        </p>
      </section>

      <section id="skills">
        <h3>Skills</h3>
        <div className="flex-box">
          {skills.map((skill) => (
            <span className="card" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="projects">
        <h3>My Projects</h3>
        <div className="flex-box">
          {projects.map((project) => (
            <div className="card" key={project.title}>
              <h4>{project.title}</h4>
              <p>{project.desc}</p>
              <a href={project.link}>Open Project</a>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <h3>Contact Me</h3>
        <p>
          Email:{" "}
          <a href="mailto:arsadansari49169@gmail.com">
            arsadansari49169@gmail.com
          </a>
        </p>
        <a
          href="https://github.com/arsad-ansari"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Profile
        </a>
      </section>
    </div>
  );
}

export default Portfolio;
