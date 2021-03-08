import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgImg from "../bgimg.jpg";

const HeaderContainer = styled.header`
  height: 98vh;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${bgImg}) center center/cover no-repeat;
  color: #f4f4f4;
  backdrop-filter: blur(5px);
  line-height: 140%;

  .container {
    height: 100%;
  }
`;

function Header({ id }) {
  return (
    <HeaderContainer id={id}>
      <div className="container">
        <Banner
          title="Front-end Web Developer."
          subTitle="Specialized in developing web applications using React + Redux.
           If you are a bussiness or an individual seeking a web presenence or
            employer seeking to hire, you can get in touch with me here."
        >
          <a
            href="mailto:atalykovj@gmail.com?subject=QandA"
            title="To send me email"
            className="button"
          >
            Email me
          </a>
          <a href="#about" className="button button-pink">
            About me
          </a>
        </Banner>
      </div>
    </HeaderContainer>
  );
}

export default Header;
