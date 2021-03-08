import React from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaPhoneSquareAlt,
  FaGithub,
} from "react-icons/fa";
import ComponentHeader from "../components/ComponentHeader";

const Container = styled.div`
  .facebook {
    color: #3b5998;
  }

  .twitter {
    color: #1da1f2;
  }

  .phone {
    color: #008a00;
  }

  .github {
    color: #000;
  }

  .icons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
  }

  .icon {
    height: 3rem;
    width: 3rem;
  }

  div {
    text-align: center;
  }
`;

function Contacts({ id }) {
  return (
    <Container id={id}>
      <ComponentHeader title="Contact Us" />
      <div className="icons container">
        <div>
          <a href="https://www.facebook.com/jelaleddin.atalykov">
            <FaFacebook className="facebook icon" />
          </a>
        </div>
        <div>
          <a href="https://twitter.com/Jay03065595">
            <FaTwitter className="icon twitter" />
          </a>
        </div>
        <div>
          <a href="tel:+7(952)-211-64-77">
            <FaPhoneSquareAlt className="icon phone" />
          </a>
        </div>
        <div>
          <a href="https://www.github.com/Jay906">
            <FaGithub className="icon github" />
          </a>
        </div>
      </div>
    </Container>
  );
}

export default Contacts;
