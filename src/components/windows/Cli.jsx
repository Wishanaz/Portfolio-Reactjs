import React from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss"

const Cli = () => {
  const commands = {
    

    about: {
  description: "About me",
  fn: () => (
    <span style={{ color: "#e1e132", fontWeight: "bold" }}>
      Creative Web Developer focused on building clean UI, smooth interactions, and scalable backend systems.
    </span>
  ),
},

    skills: {
  description: "My technical skills",
  fn: () => (
    <div>
      <p><span style={{ color: "#3b82f6" }}>Frontend:</span> React, JavaScript, SCSS</p>
      <p><span style={{ color: "#16a34a" }}>Backend:</span> Node.js, Express</p>
      <p><span style={{ color: "#f59e0b" }}>Database:</span> MongoDB</p>
      <p><span style={{ color: "#8b5cf6" }}>Tools:</span> Git, Postman</p>
    </div>
  ),
},

    projects: {
  description: "My projects",
  fn: () => (
    <div>
        <span style={{ color: "#e1e132" }}>            
      <p>• Mac OS Portfolio UI</p>
      <p>• Notes App with Syntax Highlighting</p>
      <p>• REST API Backend Practice</p>
      <p>• Fullstack CRUD App</p>
      </span>
    </div>
  ),
},
    education: {
  description: "My learning journey",
  fn: () => (
    <div>
      <p>
        <span style={{ color: "#8b5cf6", fontWeight: "bold" }}> Degree:</span>{" "}
        B.Sc. in Computer Science (Self-paced online courses)
      </p>
      <p>
        <span style={{ color: "#3b82f6", fontWeight: "bold" }}> Bootcamps:</span>{" "}
        Fullstack Web Development, MERN Stack
      </p>
      <p>
        <span style={{ color: "#16a34a", fontWeight: "bold" }}> Online Learning:</span>{" "}
        JavaScript, React.js, Node.js, MongoDB, API Integration
      </p>
      <p>
        <span style={{ color: "#f59e0b", fontWeight: "bold" }}> Certifications:</span>{" "}
        Full Stack web developer - Sheryians coding school
      </p>
    </div>
  ),
},

    contact: {
  description: "Contact information",
  fn: () => (
    <div>
      <p>
        Email: <span style={{ color: "#e1e132" }}>nazwishapsc@gmail.com</span>
      </p>
      <p>
        LinkedIn: <span style={{ color: "#e1e132" }}>linkedin.com/in/WishaNaz</span>
      </p>
      <p>
        GitHub: <span style={{ color: "#e1e132" }}>github.com/WishaNaz</span>
      </p>
    </div>
  ),
},

    whoami: {
      description: "Display user",
      fn: () => "Wishanaz - Creative Web Developer",
    },

    date: {
      description: "Show current date",
      fn: () => new Date().toString(),
    },

    repo: {
  description: "GitHub repository",
  fn: () => (
    <div>
      Opening GitHub profile:{" "}
      <span style={{ color: "#e1e132" }}>github.com/WishaNaz</span>
    </div>
  ),
},
  };

  return (
    <MacWindow>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage={
  <div>
    <p style={{ color: "#8b5cf6" }}>Welcome to Wishanaz OS Terminal</p>
    <p style={{ color: "#1e8bac" }}>Type 'help' to see all available commands.</p>
  </div>
}
          errorText={"Command not found. Type 'help' to see available commands."}
          promptLabel={"Wishanaz:~$"}
          promptLabelStyle={{ color: "#8b5cf6" }} 
        />
      </div>
    </MacWindow>
  );
};

export default Cli; 