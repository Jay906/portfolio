import React, { useState } from "react";
import Logo from "./Logo";
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.9);
  z-index: 1;

  .nav-header {
    display: flex;
    justify-content: space-between;
  }

  .nav-btn {
    border: none;
    outline: none;
    background: transparent;
    padding: 14px;
    font-size: 1.5rem;
    color: #f4f4f4;
  }

  .nav-center a {
    text-decoration: none;
    color: #f4f4f4;
  }

  .nav-links {
    height: 0;
    overflow: hidden;
    transition: all 0.4s;
  }

  .nav-links a {
    display: block;
    text-decoration: none;
    padding: 14px 16px;
    transition: all 0.4s;
    text-align: center;
    font-size: 1rem;
    position: relative;
  }

  a.active::after {
    width: 100%;
  }

  .nav-link::after {
    position: absolute;
    content: "";
    transition: all 0.4s;
    height: 4px;
    width: 0%;
    background: #ff4747;
    left: 0;
    bottom: 0px;
  }

  .nav-link:hover::after {
    width: 100%;
  }

  .show-nav {
    height: 200px;
  }

  @media screen and (min-width: 768px) {
    .nav-btn {
      display: none;
    }
    .nav-center {
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
    .nav-links {
      height: 60px;
      display: flex;
      margin-left: 4rem;
    }
    .nav-links a {
      margin: 0 1rem;
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
    }
  }
`;

const links = [
  {
    name: "Home",
    link: "#header",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Contacts",
    link: "#contacts",
  },
  {
    name: "About",
    link: "#about",
  },
];

function Nav() {
  const [showNav, setShowNav] = useState(false);

  return (
    <Navbar>
      <div className="container">
        <div className="nav-center">
          <div className="nav-header">
            <Logo className="nav-icon" />
            <button className="nav-btn" onClick={() => setShowNav(!showNav)}>
              <GiHamburgerMenu />
            </button>
          </div>
          <div className={`nav-links ${showNav && "show-nav"}`}>
            {links.map((link, index) => (
              <a className="nav-link" href={link.link} key={index}>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default Nav;
