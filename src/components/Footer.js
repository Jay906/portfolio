import React from "react";
import styled from "styled-components";

const Container = styled.footer`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f4f4f4;
  height: 60px;
`;

function Footer() {
  return (
    <Container>
      <div>All Rights Reserved &copy; Jelaleddin Atalykov</div>;
    </Container>
  );
}

export default Footer;
