import React from "react";
import Heading from "./Heading";
// import dhcLogo from "../../assets/logos/dhc-logo.jpeg";
import dhcLogo from "../../assets/logos/DHC-logo.png";
import vitaboxLogo from "../../assets/logos/vitabox-logo.webp";
import natureMadeLogo from "../../assets/logos/NatureMade-logo.jpeg";
import styled from "styled-components";

function Brands() {
  const logos = [dhcLogo, vitaboxLogo, natureMadeLogo];
  return (
    <div className="Brands-section container">
      <Wrapper className="Brands section">
        <Heading title={"品牌一覽"} subtitle={"brands"} />
        <div className="Brands-container">
          {logos.map((logo, index) => (
            <img src={logo} alt="logo" key={index} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.section`
  .Brands-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    @media (max-width: 59em) {
      margin-top: -3.2rem;
    }

    img {
      width: 80%;
      height: 16rem;
      object-fit: contain;
    }
  }
`;

export default Brands;
