import React, { useReducer, useEffect, createContext, useContext } from "react";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import productsReducer from "../reducers/productsReducer";

const ProductContext = createContext();

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  singleProduct: {},
  singleProduct_loading: false,
  singleProduct_error: false,
};

export function ProductContextProvider({ children }) {
  const [state, dispatch] = useReducer(productsReducer, initialState);
  const productsCollectionRef = collection(db, "products");

  const fetchProducts = async () => {
    dispatch({ type: "PRODUCTS_LOADING" });
    try {
      const filtrarActiveProducts = query(
        productsCollectionRef,
        where("active", "==", true)
      );
      const data = await getDocs(filtrarActiveProducts);
      const formatedProducts = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));

      dispatch({ type: "PRODUCTS_SET", products: formatedProducts });
    } catch (error) {
      console.log(error);
      dispatch({ type: "PRODUCTS_SET", products: [] });
    }
  };

  const fetchSingleProduct = async (id) => {
    dispatch({ type: "SINGLE_PRODUCT_LOADING" });
    try {
      const pricesCollectionRef = collection(db, `products/${id}/prices`);
      const pricesData = await getDocs(pricesCollectionRef);
      const priceId = pricesData.docs[0].id;

      const product = state.products.find((product) => {
        return product.id === id;
      });

      dispatch({
        type: "SINGLE_PRODUCT_SET",
        singleProduct: { ...product, priceId },
      });
    } catch (e) {
      console.log(e);
      dispatch({ type: "SINGLE_PRODUCT_SET", singleProduct: {} });
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, fetchSingleProduct }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductsContext = () => {
  return useContext(ProductContext);
};
