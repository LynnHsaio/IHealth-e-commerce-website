import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import styled from "styled-components";

function Star({ stars, reviews }) {
  const starIcons = Array.from({ length: 5 }, (_, index) => {
    const interger = Math.floor(stars);
    const decimal = Number((stars - interger).toFixed(1));
    let starIcon;

    if (index < interger) {
      starIcon = <BsStarFill />;
    } else if (index === interger) {
      if (decimal <= 0.3) {
        starIcon = <BsStar />;
      }
      if (decimal >= 0.4) {
        starIcon = <BsStarHalf />;
      }
      if (decimal >= 0.8) {
        starIcon = <BsStarFill />;
      }
    } else {
      starIcon = <BsStar />;
    }

    return <span key={index}>{starIcon}</span>;
  });

  return (
    <Wrapper className="StarReview">
      <div className="StarReview-container"> {starIcons}</div>
      <p>
        ( {stars}分 {reviews} 評論 )
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  .StarReview-container {
    display: flex;
    gap: 0.4rem;
    color: orange;
  }
`;

export default Star;
