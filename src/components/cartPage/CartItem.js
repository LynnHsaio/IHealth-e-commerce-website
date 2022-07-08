import React from "react";
import Quantity from "../Quantity";
import { BsFillTrashFill } from "react-icons/bs";
import { useCartContext } from "../../contexts/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";

function CartItem({ id, img, name, price, quantity }) {
  const { updateItemQuantity, deleteItem } = useCartContext();

  const handleIncrease = () => {
    updateItemQuantity(id, "increment");
  };
  const handleDecrease = () => {
    updateItemQuantity(id, "decrement");
  };

  const handleDelete = () => {
    deleteItem(id);
  };

  return (
    <Wrapper className="CartItem">
      <Link to={`/products/${id}`}>
        <div className="CartItem-info">
          <img src={img} alt={name} className="CartItem-img" />
          <p className="CartItem-name">{name}</p>
        </div>
      </Link>
      <div className="CartItem-price">NT${price}</div>
      <Quantity
        quantity={quantity}
        increase={handleIncrease}
        decrease={handleDecrease}
      />
      <div className="CartItem-total">NT${price * quantity}</div>
      <button className="btn-delete" onClick={handleDelete}>
        <BsFillTrashFill />
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr repeat(3, 1fr) auto;
  justify-items: center;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 4.8rem;

  .CartItem-info {
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
    color: initial;

    &:hover {
      opacity: 0.8;
    }

    .CartItem-img {
      width: 100%;
      height: 8rem;
      border-radius: 5px;
      object-fit: contain;
    }

    .CartItem-name {
      font-size: 1.6rem;
      font-weight: bold;
      text-transform: capitalize;
    }
  }

  .Quantity {
    font-size: 2.4rem;
  }
  .CartItem-total {
    color: var(--clr-primary-dark);
  }

  @media (max-width: 41em) {
    grid-template-columns: 1.5fr repeat(2, 1fr) auto;

    .CartItem-price {
      display: none;
    }

    .Quantity {
      width: 12rem;
    }
  }
`;

export default CartItem;
