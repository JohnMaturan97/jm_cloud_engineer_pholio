import React, { useEffect, useState } from "react";
import { projects as initialProjects } from "../../data/constants";
import ProjectCard from "../Cards/ProjectCards";
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  LoadMoreButton,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper
} from "./ProjectsStyle";

const Projects = ({ openModal, setOpenModal }) => {
  const [projects, setProjects] = useState([]);
  const [toggle, setToggle] = useState("all");
  const [visibleCardCount, setVisibleCardCount] = useState(6);

  useEffect(() => {
    if (toggle === 'all') {
      // Load only recent projects (id > 5) initially
      const recentProjects = initialProjects.filter(project => project.id > 5);
      setProjects(recentProjects);
    } else {
      // For other categories, exclude the specific project with id 5
      setProjects(initialProjects.filter(project => project.category === toggle && project.id !== 5));
    }
  }, [toggle]);

  const toggleCardVisibility = () => {
    setVisibleCardCount(visibleCardCount + 6);
  };

  // Function to conditionally inject the project with id 5 at the 6th position for 'All' tab
  const getProjectsWithFixed = () => {
    const allProjects = [...projects];
    if (toggle === 'all' && allProjects.length >= 5) {
      const fixedProject = initialProjects.find(p => p.id === 5);
      if (fixedProject) {
        allProjects.splice(5, 0, fixedProject); // Injecting at the 6th position (index 5)
      }
    }
    return allProjects;
  };

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
          {getProjectsWithFixed()
            .slice(0, visibleCardCount)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
            ))}
        </CardContainer>
        {getProjectsWithFixed().length > visibleCardCount && (
          <LoadMoreButton onClick={toggleCardVisibility}>Load More</LoadMoreButton>
        )}
      </Wrapper>
    </Container>
  );
};

export default Projects;
