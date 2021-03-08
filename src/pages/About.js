import React from "react";
import styled from "styled-components";
import ComponentHeader from "../components/ComponentHeader";
import myImg from "../assets/me.jpg";

const Container = styled.div`
  line-height: 1.6rem;
  text-indent: 1.5rem;
  text-align: justify;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    border: none;
    border-radius: 50%;
    max-height: 300px;
    max-width: 300px;
    margin: 1rem;
  }

  @media screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

function About({ id }) {
  return (
    <div id={id}>
      <ComponentHeader title="About Me " />
      <div className="container">
        <Container>
          <img src={myImg} alt="Myself" />
          <div>
            I am a selft-taught front-end developer. Technologies that are used
            to create web-sites are React + Redux. Currently I am studying in
            Polytechnic University in Saint-Petersburg, Russia. If you are
            seeking for hiring me you can contact me. I am available 24/7. If
            you want to get familiar with my work you can check my
            <a href="https://www.github.com/Jay906"> Github</a>.
          </div>
        </Container>
      </div>
    </div>
  );
}

export default About;
