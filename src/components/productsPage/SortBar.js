import React from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import styled from "styled-components";

function SortBar() {
  const { filteredProducts, sort, updateSort } = useFilterContext();

  return (
    <Wrapper className="SortBar">
      <p>共 {filteredProducts.length} 件產品</p>
      <hr />
      <div>
        <select
          className="SortBar-select"
          name="sort"
          id="sort"
          value={sort}
          onChange={updateSort}
        >
          <option value="priceLower">價格：低到高</option>
          <option value="priceHeigher">價格：高到低</option>
        </select>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 3.2rem;
  font-size: 1.6rem;
  margin-bottom: 4.8rem;

  hr {
    flex: 1;
    color: var(--clr-grey-10);
  }

  .SortBar-select {
    padding: 0.4rem 0.8rem;
    font-size: 1.6rem;
    margin-left: 0.4rem;
    margin-top: 0.4rem;
  }

  @media (max-width: 44em) {
    flex-direction: column;
    gap: 0.4rem;

    hr {
      width: 80%;
    }
  }
`;

export default SortBar;
