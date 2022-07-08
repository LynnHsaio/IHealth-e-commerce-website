import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import styled from "styled-components";
import { useCartContext } from "../../contexts/CartContext";

function CartBtn({ handleOpenNav }) {
  const { cart } = useCartContext();

  const cartAmount = cart.reduce((accu, curr) => accu + curr.quantity, 0);

  return (
    <Wrapper className="CartBtn" onClick={handleOpenNav}>
      <Link to="/cart" className="CartBtn-link">
        Cart
        <span className="CartBtn-icon">
          <FaShoppingCart />
          <span className="CartBtn-value">{cartAmount}</span>
        </span>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .CartBtn-link:link,
  .CartBtn-link:visited {
    display: flex;
    align-items: center;
    font-size: 2.4rem;
    color: var(--clr-font-title);
    font-weight: bold;
    transition: var(--transition);
  }

  .CartBtn-link:hover,
  .CartBtn-link:active {
    color: var(--clr-primary-dark);
  }

  .CartBtn-icon {
    display: flex;
    align-items: center;
    position: relative;

    .CartBtn-value {
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(50%, -50%);
      background-color: var(--clr-primary);
      color: var(--clr-white);
      font-size: 1.6rem;
      font-weight: normal;
      width: 2.3rem;
      height: 2.3rem;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export default CartBtn;
