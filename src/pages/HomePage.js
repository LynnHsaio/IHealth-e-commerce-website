import React from "react";
import Slides from "../components/homePage/Slides";
import BestSeller from "../components/homePage/BestSeller";
import Brands from "../components/homePage/Brands";
import styled from "styled-components";

function HomePage() {
  return (
    <Wrapper>
      <div className="hero-container">
        <Slides />
      </div>
      <BestSeller />
      <Brands />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .hero-container {
    max-width: 120rem;
    margin: 0 auto;
  }
`;

export default HomePage;
