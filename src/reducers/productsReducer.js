export default function productsReducer(state, action) {
  switch (action.type) {
    case "PRODUCTS_LOADING":
      return { ...state, products_loading: true };
    case "PRODUCTS_SET":
      return { ...state, products: action.products, products_loading: false };
    case "PRODUCTS_ERROR":
      return { ...state, products_loading: false, products_error: true };

    case "SINGLE_PRODUCT_LOADING":
      return { ...state, singleProduct_loading: true };
    case "SINGLE_PRODUCT_SET":
      return {
        ...state,
        singleProduct: action.singleProduct,
        singleProduct_loading: false,
      };

    case "SINGLE_PRODUCT_ERROR":
      return {
        ...state,
        singleProduct_error: action.error,
        singleProduct_loaded: false,
      };
  }
}
