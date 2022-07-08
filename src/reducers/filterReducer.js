import React from "react";
import { getMaxNumber } from "../helpers";

function filterReducer(state, action) {
  switch (action.type) {
    case "INITIAL_PRODUCTS":
      const { products } = action;
      const getPrice = products.map((product) => product.price);
      const maxPrice = getMaxNumber(getPrice);

      return {
        ...state,
        initialProducts: products,
        filteredProducts: products,
        filters: {
          ...state.filters,
          maxPrice,
          price: maxPrice,
        },
      };

    case "FILTER_PRODUCTS":
      const { search, category, effect, company, price } = state.filters;
      const filteredProducts = state.initialProducts.filter((product) => {
        const matchProducts = product.name
          .toLowerCase()
          .includes(search.toLowerCase());
        const matchCategory =
          category === "全部" || product.category === category;
        const matchEffect =
          effect === "全部" || product.effects.includes(effect);
        const matchCompany = company === "全部" || product.company === company;
        const matchPrice = product.price <= price;

        return (
          matchProducts &&
          matchCategory &&
          matchEffect &&
          matchCompany & matchPrice
        );
      });

      return { ...state, filteredProducts };

    case "FILTERS_UPDATE":
      const { name, value } = action.filter;

      return { ...state, filters: { ...state.filters, [name]: value } };

    case "FILTERS_RESET":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: "",
          category: "全部",
          effect: "全部",
          company: "全部",
          price: state.filters.maxPrice,
        },
      };

    case "SORT_UPDATE":
      return { ...state, sort: action.value };

    case "SORT_PRODUCTS":
      const { sort } = state;
      const sortedProducts = [...state.filteredProducts].sort((a, b) => {
        if (sort === "priceLower") {
          return a.price - b.price;
        }
        if (sort === "priceHeigher") {
          return b.price - a.price;
        }
      });

      return { ...state, filteredProducts: sortedProducts };

    default:
      throw new Error(`No Matching "${action.type}" - action type`);
  }
}

export default filterReducer;
