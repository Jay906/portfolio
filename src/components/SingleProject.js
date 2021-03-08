import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-height: 200px;
  width: 100%;
  background: ${(props) =>
    props.background
      ? `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${props.background}) center center/cover no-repeat`
      : "rgba(0, 0, 0, 0.5)"};
  border: 1px solid white;

  .overlay {
    display: flex;
    opacity: 0;
    justify-content: center;
    align-items: center;
    height: 0%;
    background: rgba(0, 0, 0, 0.7);
    overflow: hidden;
    width: 100%;
    transition: all 0.4s;
  }

  &:hover .overlay {
    opacity: 1;
    height: 100%;
  }

  button {
    padding: 1rem 1.2rem;
    display: inline-block;
    margin-left: 7px;
    border: none;
    outline: none;
    border-radius: 5px;
  }
`;

function SingleProject({ background, link, sourceCode }) {
  console.log(background);
  return (
    <Container background={background}>
      <div className="overlay">
        <a className="button" href={link}>
          Visit project
        </a>
        <a className="button button-pink" href={sourceCode}>
          Source code
        </a>
      </div>
    </Container>
  );
}

export default SingleProject;
