import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Breadcrumb({ page, pageName, productName }) {
  return (
    <Wrapper className="Breadcrumb">
      <div className="container">
        <div className="Breadcrumb-content">
          <Link to="/" className="link">
            Home
          </Link>

          {productName ? (
            <>
              <span>/</span>
              <Link to={page}>{pageName}</Link>
              <span>/</span>
              <span>{productName}</span>
            </>
          ) : (
            <>
              <span>/</span>
              <span>{pageName}</span>
            </>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .Breadcrumb-content {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    padding: 2rem 0;
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: bold;
    color: var(--clr-dark-gray);

    a {
      color: var(--clr-dark-gray);
    }
    a:hover {
      color: var(--clr-font-title);
    }
  }
`;

export default Breadcrumb;
