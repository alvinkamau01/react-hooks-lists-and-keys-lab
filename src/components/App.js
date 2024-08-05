import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import ProjectList from "./ProjectList";
import user from "../data/user";

function App() {
  return (
    <div>
      <NavBar id="navbar" />
      <Home id="home" username={user.name} city={user.city} color={user.color} />
      <About id="about" bio={user.bio} links={user.links} />
      <ProjectList id="projects" projects={user.projects} />
    </div>
  );
}

export default App;
