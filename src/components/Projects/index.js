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

const Projects = ({ openModal, setOpenModal }) => {
  const [projects, setProjects] = useState([]);
  const [toggle, setToggle] = useState("all");

  useEffect(() => {
    let filteredProjects = [];
    if (toggle === 'all') {
      // For 'All' tab: Load projects with id > 5 and sort them in descending order by id
      filteredProjects = initialProjects
        .filter(project => project.id > 5)
        .sort((a, b) => b.id - a.id);
    } else {
      // For other categories: Load all projects of the category, no filtering based on id
      filteredProjects = initialProjects
        .filter(project => project.category === toggle)
        .sort((a, b) => b.id - a.id);  // Sorting by descending id for consistency
    }
    setProjects(filteredProjects);
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
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal} />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
