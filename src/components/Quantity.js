import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import styled from "styled-components";

function Quantity({ quantity = 1, increase, decrease }) {
  return (
    <Wrapper className="Quantity">
      <button
        type="button"
        className="Quantity-btn-decrement"
        data-math="decrement"
        onClick={decrease}
      >
        <FaMinus />
      </button>
      <span className="Quantity-value">{quantity}</span>
      <button
        type="button"
        className="Quantity-btn-increment"
        data-math="increment"
        onClick={increase}
      >
        <FaPlus />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  align-items: center;
  justify-items: center;
  width: 15rem;
  font-size: 3.6rem;
  border: solid 1px var(--clr-middle-gray);
  border-radius: 4px;

  .Quantity-value {
    width: 100%;
    font-weight: bold;
    text-align: center;
    border-right: solid 1px var(--clr-middle-gray);
    border-left: solid 1px var(--clr-middle-gray);
  }

  .Quantity-btn-increment,
  .Quantity-btn-decrement {
    height: 100%;
    width: 100%;
    border: none;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: #fff;
      background: var(--clr-primary);
    }
  }
`;

export default Quantity;
