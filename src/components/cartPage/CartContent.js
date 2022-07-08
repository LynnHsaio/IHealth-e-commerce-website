import React from "react";
import { useCartContext } from "../../contexts/CartContext";
import CartItem from "./CartItem";
import styled from "styled-components";

function CartContent() {
  const { cart } = useCartContext();

  return (
    <Wrapper className="CartContent container">
      <div className="CartContent-head">
        <h5>商品</h5>
        <h5 className="CartContent-head-price">單價</h5>
        <h5>數量</h5>
        <h5>總計</h5>
        <span>&nbsp;</span>
      </div>
      <div className="CartContent-list">
        {cart.map((item, index) => (
          <CartItem {...item} key={index} />
        ))}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .CartContent-head {
    display: grid;
    grid-template-columns: 1.5fr repeat(3, 1fr) 2.5rem;
    justify-items: center;
    padding-bottom: 2.4rem;
    margin-bottom: 4.8rem;
    border-bottom: solid 1px rgb(208, 208, 208);

    h5 {
      font-size: 1.8rem;
      font-weight: normal;
    }
  }

  .CartContent-list {
    border-bottom: solid 1px rgb(208, 208, 208);
    margin-bottom: 3.2rem;
  }

  @media (max-width: 41em) {
    .CartContent-head {
      grid-template-columns: 1.5fr repeat(2, 1fr) 2.5rem;
    }

    .CartContent-head-price {
      display: none;
    }
  }
`;

export default CartContent;
