import React from "react";
import styled from "styled-components";
import SingleProject from "../components/SingleProject";
import kanbanBg from "../assets/kanbanbg.JPG";
import expenseTrackerBg from "../assets/expensetracker.JPG";
import ComponentHeader from "../components/ComponentHeader";

const projectLinks = [
  {
    link: "https://reactkanban.netlify.app",
    sourceCode: "https://www.github.com/Jay906/ReactKanbanToDo",
    image: kanbanBg,
  },
  {
    link: "https://jay906-expense-tracker.netlify.app",
    sourceCode: "https://www.github.com/Jay906/ExpenseTracker2",
    image: expenseTrackerBg,
  },
];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin-top: 15px;
  grid-gap: 7px;
`;

function Projects({ id }) {
  return (
    <div id={id}>
      <ComponentHeader title="Projects" />
      <Container>
        {projectLinks.map((project, index) => (
          <SingleProject
            key={index}
            background={project.image}
            link={project.link}
            sourceCode={project.sourceCode}
          />
        ))}
      </Container>
    </div>
  );
}

export default Projects;
