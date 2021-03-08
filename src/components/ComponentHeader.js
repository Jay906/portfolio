import React from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  justify-content: center;
  align-items: center;

  div {
    margin-top: 10px;
    width: 80px;
    height: 4px;
    background: #ff4747;
  }
`;

function ComponentHeader({ title }) {
  return (
    <Header>
      <h1>{title}</h1>
      <div></div>
    </Header>
  );
}

export default ComponentHeader;
