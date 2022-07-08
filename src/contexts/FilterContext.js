import React, { createContext, useContext, useReducer, useEffect } from "react";
import filterReducer from "../reducers/filterReducer";
import { useProductsContext } from "./ProductsContext";
const FilterContext = createContext();

const initialState = {
  initialProducts: [],
  filteredProducts: [],
  sort: "priceLower",
  filters: {
    search: "",
    category: "全部",
    effect: "全部",
    company: "全部",
    maxPrice: 0,
    price: 0,
  },
};

export function FilterContextProvider({ children }) {
  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { products } = useProductsContext();

  useEffect(() => {
    dispatch({ type: "INITIAL_PRODUCTS", products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [state.filters, state.sort]);

  const updateFilters = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === "price") {
      value = Number(value);
    }

    dispatch({ type: "FILTERS_UPDATE", filter: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "FILTERS_RESET" });
  };

  const updateSort = (e) => {
    dispatch({ type: "SORT_UPDATE", value: e.target.value });
  };

  return (
    <FilterContext.Provider
      value={{ ...state, updateFilters, clearFilters, updateSort }}
    >
      {children}
    </FilterContext.Provider>
  );
}

export const useFilterContext = () => {
  return useContext(FilterContext);
};
