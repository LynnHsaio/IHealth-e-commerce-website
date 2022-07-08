import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SingleProduct({ id, name, images, price }) {
  const imgSrc = images[0];

  return (
    <Link to={`/products/${id}`}>
      <Wrapper className="SingleProduct">
        <div className="SingleProduct-img-box">
          <img className="SingleProduct-img" src={imgSrc} alt={name} />
        </div>
        <div className="SingleProduct-name">{name}</div>
        <p className="SingleProduct-price">NT${price}</p>
      </Wrapper>
    </Link>
  );
}

const Wrapper = styled.div`
  .SingleProduct-img {
    width: 100%;
    margin-bottom: 1.6rem;
  }

  .SingleProduct-name {
    font-size: 1.6rem;
    font-weight: bold;
    text-overflow: ellipsis;
    color: var(--clr-font);
    min-height: 5.2rem;
    max-height: 5.2rem;
    overflow: hidden;
  }

  .SingleProduct-price {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    color: var(--clr-font-red);
  }
`;

export default SingleProduct;
