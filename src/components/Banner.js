import React, { useState, useEffect } from "react";
import styled from "styled-components";

const BannerContainer = styled.div`
  height: calc(100% - 80px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    margin-bottom: 15px;
  }
`;

function Banner({ title, subTitle, children }) {
  const [flash, setFlash] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    let number = 0;
    const interval = setInterval(() => {
      const numberIncrement = number >= title.length;
      number = numberIncrement ? clearInterval(interval) : ++number;
      setText(title.substring(0, number));
    }, 300);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let stop = title.length === text.length;
    const interval = setInterval(() => {
      setFlash(!flash);
    }, 200);
    if (stop) {
      clearInterval(interval);
      setFlash(false);
    }
    return () => clearInterval(interval);
  }, [flash]);
  return (
    <BannerContainer>
      <h1>
        {text}
        <span
          style={{
            visibility: flash ? "visible" : "hidden",
          }}
        >
          |
        </span>
      </h1>
      <p>{subTitle}</p>
      <div className="banner-links">{children}</div>
    </BannerContainer>
  );
}

export default Banner;
