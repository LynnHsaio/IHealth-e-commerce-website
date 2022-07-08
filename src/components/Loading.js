import React from "react";
import styled from "styled-components";

function Loading() {
  return (
    <Wrapper className="page-full-height">
      <div className="Loading"></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }
  .Loading {
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    margin-top: 10rem;
    border-radius: 50%;
    border: 4px solid #ccc;
    border-top-color: var(--clr-primary-dark);
    animation: spinner 0.6s linear infinite;
  }
`;

export default Loading;
