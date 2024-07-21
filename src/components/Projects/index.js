import React, { useEffect, useState } from "react";
import { projects as initialProjects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper
} from "./ProjectsStyle";

const specialProject = {
  id: 5,
  title: "Github",
  description: "Open Source Projects",
  image: "https://media.giphy.com/media/ad4UeX1pJp5grZnJGy/giphy.gif",
  tags: ["Git Repositories"],
  category: "all",
  github: "https://github.com/JohnMaturan97",
  webapp: "https://github.com/JohnMaturan97",
};

const Projects = ({ openModal, setOpenModal }) => {
  const [projects, setProjects] = useState([]);
  const [toggle, setToggle] = useState("all");

  useEffect(() => {
    let filteredProjects = [];

    if (toggle === 'all') {
      filteredProjects = initialProjects.filter(project => project.id > 5);
    } else {
      filteredProjects = initialProjects.filter(project => project.category === toggle && project.id !== 5);
    }

    filteredProjects.sort((a, b) => b.id - a.id);

    // Handling the special project insertion based on the number of projects
    if (toggle !== 'all') {
      const position = Math.min(5, filteredProjects.length); // Determine where to place the special project
      filteredProjects.splice(position, 0, specialProject); // Insert special project at the calculated position
    }

    setProjects(filteredProjects.slice(0, 6)); // Always limit to max 6 projects displayed
  }, [toggle]);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from web apps to cloud-based systems. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton onClick={() => setToggle("all")} active={toggle === "all"}>
            All
          </ToggleButton>
          <Divider />
          <ToggleButton onClick={() => setToggle("cloud engineer")} active={toggle === "cloud engineer"}>
            CLOUD-ENG
          </ToggleButton>
          <Divider />
          <ToggleButton onClick={() => setToggle("cloud-native")} active={toggle === "cloud-native"}>
            CLOUD-NATIVE
          </ToggleButton>
          <Divider />
          <ToggleButton onClick={() => setToggle("DB engineer")} active={toggle === "DB engineer"}>
            DB-ENG
          </ToggleButton>
          <Divider />
          <ToggleButton onClick={() => setToggle("web app")} active={toggle === "web app"}>
            FULL STACK
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
