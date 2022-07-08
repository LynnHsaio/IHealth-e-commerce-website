import React from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import { getUniqueVals } from "../../helpers";
import SupplementEffect from "../SupplementEffect";
import styled from "styled-components";

function Filters({ toggleFilters, handleToggleFilters }) {
  const { initialProducts, filters, updateFilters, clearFilters } =
    useFilterContext();
  const { search, category, company, maxPrice, price } = filters;

  const categories = getUniqueVals(initialProducts, "category");
  const effects = getUniqueVals(initialProducts, "effects");
  const companies = getUniqueVals(initialProducts, "company");

  const handleFilterChange = (e) => {
    updateFilters(e);
  };

  const handleClearFilters = () => {
    clearFilters();
    handleClearFilters();
  };

  return (
    <Wrapper className={`Filters ${toggleFilters ? "show-filters" : null}`}>
      <span className="mobile-filters-btn" onClick={handleToggleFilters}>
        篩選條件
      </span>

      <form
        className="Filters-inputs"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/* search input */}
        <input
          type="text"
          placeholder="搜尋"
          className="Filter-search"
          name="search"
          value={search}
          onChange={handleFilterChange}
        />

        {/* category */}
        <div className="Filters-category">
          <label htmlFor="category-select">成份</label>
          <select
            name="category"
            id="category-select"
            onChange={handleFilterChange}
            value={category}
          >
            {categories.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* effects */}
        <div className="Filters-effects">
          <label>功能</label>

          {effects.map((item, index) => (
            <SupplementEffect
              item={item}
              key={index}
              handleFilterChange={handleFilterChange}
            />
          ))}
        </div>

        {/* company */}
        <div className="Filters-company">
          <label htmlFor="company-select">品牌</label>
          <select
            id="company-select"
            name="company"
            onChange={handleFilterChange}
            value={company}
          >
            {companies.map((item, index) => (
              <option value={item} key={index}>
                {item}
              </option>
            ))}
          </select>
        </div>

        {/* price range */}
        <div className="Filters-price">
          <label htmlFor="price">價格範圍</label>
          <p>NT${price}</p>
          <input
            type="range"
            id="price"
            name="price"
            min="0"
            max={maxPrice}
            step="1"
            value={price}
            onChange={handleFilterChange}
          />
        </div>
        <button
          type="button"
          className="btn Filters-comfirm-btn"
          onClick={handleToggleFilters}
        >
          確定
        </button>

        <button
          type="button"
          className="btn Filters-clear-btn"
          onClick={handleClearFilters}
        >
          重設篩選
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  z-index: 1;
  transition: var(--transition);

  .Filters-inputs {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    align-items: start;
    background-color: rgba(255, 255, 255, 0.99);
    padding: 2.4rem 1.2rem;
    border-radius: 0px 5px 5px 0px;
    transition: var(--transition);

    .Filter-search {
      width: 100%;
      font-size: 1.6rem;
      letter-spacing: var(--spacing);
      background: var(--clr-grey-10);
      padding: 0.8rem;
      border: none;
      border-radius: var(--radius);
    }

    label {
      display: block;
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 0.6rem;
    }

    select {
      font-size: 1.6rem;
      border: none;
      background: var(--clr-grey-10);
      padding: 0.8rem;
    }

    .Filters-effects {
      width: 18rem;

      .active {
        opacity: 0.8;
        box-shadow: inset 0 0 0 2px var(--clr-font-title);
      }
    }

    .SupplementEffect {
      font-size: 0.6rem;

      margin: 0.2rem;
    }

    .Filters-comfirm-btn {
      display: none;
    }

    .Filters-clear-btn {
      background: var(--clr-font-red);
    }
  }

  .mobile-filters-btn {
    position: absolute;
    right: 0;
    top: 0;
    transform: translate(100%, 1.6rem);
    transform-origin: bottom left;
    border: none;
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
    -webkit-writing-mode: vertical-lr;
    writing-mode: vertical-lr;
    padding: 1.6rem 0.4rem;
    border-radius: 0 5px 5px 0;
    background-color: var(--clr-primary);
    color: #fff;
    cursor: pointer;
    z-index: 2;
    display: none;
  }

  @media (max-width: 44em) {
    width: 20rem;
    transform: translateX(-100%);

    .Filters-inputs {
      width: 20rem;
      visibility: hidden;
      pointer-events: none;
      border: solid 1px var(--clr-primary-dark);
      border-left: none;

      .Filters-comfirm-btn {
        display: block;
      }
    }
    .mobile-filters-btn {
      display: block;
    }
  }
`;

export default Filters;
