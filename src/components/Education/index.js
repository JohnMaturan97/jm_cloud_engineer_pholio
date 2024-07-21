import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import React from "react";
import styled from "styled-components";
import { education, experiences } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: clamp(15px, 2.5vw, 18px); // Dynamically adjusts between 15px and 18px based on viewport width
  text-align: center;
  max-width: 600px; // Maintains maximum width for readability
  color: ${({ theme }) => theme.text_secondary}; // Uses theme for consistent styling
  margin: 20px auto 0 auto; // Centers the description and provides vertical spacing only at the top
  padding: 0 10px; // Provides horizontal padding to prevent text from touching the container edges
  line-height: 1.6; // Ensures proper line spacing for readability

  @media (max-width: 768px) {
    margin-top: 12px; // Ensures sufficient space above the description in smaller viewports
    margin-bottom: 0; // Removes bottom margin for smaller screens
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: end;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit; /* Inherit text color from parent */
  cursor: pointer; /* Add pointer cursor to indicate a clickable element */
`;

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <StyledLink
                  href={edu.eduLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <EducationCard education={edu} />
                  </TimelineContent>
                </StyledLink>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length && (
                    <TimelineConnector style={{ background: "#854CE6" }} />
                  )}
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
