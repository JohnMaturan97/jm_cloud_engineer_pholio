import React, { useState } from 'react';
import { projects } from '../../data/constants';
import ProjectCard from '../Cards/ProjectCards';
import {
  CardContainer,
  Container,
  Desc,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper,
} from './ProjectsStyle';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');
  const [visibleCardCount, setVisibleCardCount] = useState(6);

  const toggleCardVisibility = () => {
    setVisibleCardCount(visibleCardCount + 6);
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to cloud-natives. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup>
          {/* Integration of provided code here */}
          <ToggleButton
            onClick={() => setToggle('all')}
            active={toggle === 'all'}
          >
            All
          </ToggleButton>
          <Divider />
          <ToggleButton
            onClick={() => setToggle('web app')}
            active={toggle === 'web app'}
          >
            CLOUD-NATIVE
          </ToggleButton>
          <Divider />
          <ToggleButton
            onClick={() => setToggle('cloud-native')}
            active={toggle === 'cloud-native'}
          >
            CLOUD-BASED
          </ToggleButton>
          <Divider />
          <ToggleButton
            onClick={() => setToggle('cloud engineer')}
            active={toggle === 'cloud engineer'}
          >
            FULL STACK
          </ToggleButton>
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all'
            ? projects.slice(0, visibleCardCount).map((project) => (
                <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
              ))
            : projects
                .filter((item) => item.category === toggle)
                .slice(0, visibleCardCount)
                .map((project) => (
                  <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal} />
                ))}
        </CardContainer>
        {projects.length > visibleCardCount }
      </Wrapper>
    </Container>
  );
};

export default Projects;
