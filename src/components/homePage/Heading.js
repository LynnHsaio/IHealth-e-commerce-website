import React from "react";
import styled from "styled-components";

function Heading({ title, subtitle }) {
  return (
    <Wrapper className="Heading">
      <h2>{title}</h2>
      <span>{subtitle}</span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  letter-spacing: 0.1rem;
  text-align: center;
  padding: 0 3.2rem;
  position: relative;
  margin-bottom: 3.2rem;

  &::after {
    content: "";
    display: inline-block;
    width: 90%;
    border: solid 0.5px var(--clr-font-subtitle);
    position: absolute;
    top: 82%;
    left: 50%;
    transform: translateX(-50%);
    z-index: -1;
  }

  h2 {
    font-size: 2.4rem;

    color: var(--clr-font-title);
  }
  span {
    display: inline-block;
    padding: 0 1.2rem;
    font-size: 1.6rem;

    color: var(--clr-font-subtitle);
    background-color: #fff;
    text-transform: uppercase;
    font-weight: bold;
  }
`;

export default Heading;
