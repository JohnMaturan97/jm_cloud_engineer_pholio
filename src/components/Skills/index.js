import React from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
`

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  padding: 12px 20px;  // Add horizontal padding for better edge spacing
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
    padding: 12px 15px;  // Slightly smaller padding on smaller screens
  }
  @media (max-width: 500px) {
    padding: 12px 10px;  // Even smaller padding for very small screens
  }
`;

export const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
margin-top: 12px;
      font-size: 32px;
      margin-bottom: -1rem;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin-bottom: -1em;
  color: ${({ theme }) => theme.text_secondary};
  padding: 0 10px;  // Horizontal padding for all screen sizes
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: -1em;
    padding: 0 15px;  // Adjust for small screens
  }
  @media (max-width: 500px) {
    font-size: 15px;
    padding: 0 20px;  // Even more padding for very small screens
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 20px;
  padding: 0 5px;  // Add horizontal padding to avoid content touching edges
  justify-content: center;
  @media (max-width: 768px) {
    gap: 15px;
    padding: 0 10px;  // Increase padding for better edge spacing
  }
  @media (max-width: 500px) {
    padding: 0 15px;  // Further increase padding to maximize usability on small screens
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;  // Suitable padding for desktop
  @media (max-width: 768px) {
    max-width: 100%;  // Take full width of its container
    padding: 10px 20px;  // Reduce horizontal padding for better edge spacing
  }
  @media (max-width: 500px) {
    padding: 10px 15px;  // Optimal padding for small screens
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;  // Smaller font for better fit
    padding: 8px 12px;  // Reduce padding to save space
  }
  @media (max-width: 500px) {
    font-size: 13px;  // Further reduction for small devices
    padding: 6px 10px;  // Minimal padding to maximize space
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  @media (max-width: 768px) {
    width: 20px;  // Slightly smaller on mobile
    height: 20px;  // Maintain aspect ratio
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Over the years, I've continuously improved my technical expertise.
        </Desc>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage  src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default Skills