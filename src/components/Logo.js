import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <h2>Jelaleddin Atalykov</h2>
        <p>Front End Developer</p>
      </Link>
    </div>
  );
}

export default Logo;
