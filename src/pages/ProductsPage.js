import React, { useState } from "react";
import Filters from "../components/productsPage/Filters";
import ProductsList from "../components/productsPage/ProductsList";
import SortBar from "../components/productsPage/SortBar";
import styled from "styled-components";

function ProductsPage() {
  const [toggleFilters, setToggleFilters] = useState(false);

  function handleToggleFilters() {
    setToggleFilters((state) => !state);
  }

  return (
    <Wrapper className="Products">
      <div
        className={`overlay ${toggleFilters ? "show-overlay" : null}`}
        onClick={handleToggleFilters}
      ></div>
      <div className="container">
        <div className="Products-container">
          <aside className="Products-sidebar">
            <Filters
              toggleFilters={toggleFilters}
              handleToggleFilters={handleToggleFilters}
            />
          </aside>
          <div className="Products-content">
            <SortBar />
            <ProductsList />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  min-height: 100vh;
  position: relative;

  .Products-container {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 3.2rem;
    position: relative;
    padding: 3.2rem 0;
    // position: sticky不能使用overflow: hidden 要用clip
    overflow: clip;
  }

  @media (max-width: 44em) {
    .Products-container {
      grid-template-columns: 0 1fr;
      padding: 1.6em 0;
      gap: 0;
    }

    .overlay {
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 100%;
      z-index: 1;
      display: none;
    }

    .show-overlay {
      display: block;
    }

    .show-filters {
      transform: translateX(0);

      .Filters-inputs {
        visibility: visible;
        pointer-events: auto;
      }
    }
  }
`;

export default ProductsPage;
