import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../contexts/FilterContext";

function SupplementEffect({ item, handleFilterChange = null }) {
  const {
    filters: { effect },
  } = useFilterContext();

  let backgroundColor = "#0369a1";

  switch (item) {
    case "增強體力":
      backgroundColor = "darkOrange";
      break;
    case "健康":
      backgroundColor = "#60a5fa";
      break;
    case "美容":
      backgroundColor = "pink";
      break;

    default:
      break;
  }

  return (
    <Wrapper
      className={`SupplementEffect ${item === effect ? "active" : null}`}
      style={{ backgroundColor }}
      name="effect"
      value={item}
      onClick={handleFilterChange}
    >
      {item}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: inline-block;
  padding: 0.6rem 1.2rem;
  margin-right: 0.8rem;
  border: none;
  border-radius: 99px;
  font-size: 1.6rem;
  font-weight: bold;
  color: var(--clr-white);
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export default SupplementEffect;
