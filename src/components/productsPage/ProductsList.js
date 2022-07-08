import React from "react";
import { useFilterContext } from "../../contexts/FilterContext";
import SingleProduct from "../SingleProduct";
import styled from "styled-components";

function ProductsList() {
  const { filteredProducts, clearFilters } = useFilterContext();

  if (filteredProducts.length < 1) {
    return (
      <div>
        <h4 className="margin-bottom-md">
          哎呀！我們找不到任何商品。試試關閉一些篩選?
        </h4>
        <button type="button" className="btn" onClick={clearFilters}>
          重設篩選
        </button>
      </div>
    );
  }

  return (
    <Wrapper>
      {filteredProducts.map((product) => (
        <SingleProduct {...product} key={product.id} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  gap: 3.2rem 2.4rem;
`;

export default ProductsList;
