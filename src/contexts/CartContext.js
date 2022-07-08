import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

const CartContext = createContext();

const initialState = [
  // {
  //   id: "prod_Lzh9wsARbJqSMx",
  //   img: "https://i3.momoshop.com.tw/1649354068/goodsimg/0006/743/538/6743538_R.webp",
  //   name: "【DHC】藍莓精華 30日份(60粒/包)",
  //   price: 538,
  //   priceId: "price_1LHhlMG8vRr7lxeh5W2d1y2C",
  //   stock: 40,
  //   quantity: 1,
  // },
];

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState, () => {
    try {
      return JSON.parse(
        window.localStorage.getItem("cart") || String(initialState)
      );
    } catch (error) {
      console.log(error);
      return initialState;
    }
  });

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addItem = ({ id, images, name, price, stock, priceId }, quantity) => {
    dispatch({
      type: "CART_ADD",
      item: {
        id,
        img: images[0],
        name,
        price,
        priceId,
        stock,
        quantity,
      },
    });
  };

  const updateItemQuantity = (id, type) => {
    dispatch({ type: "CART_UPDATE_Quantity", data: { id, type } });
  };

  const deleteItem = (id) => {
    dispatch({ type: "CART_DELETE", id });
  };

  const clearCart = () => {
    dispatch({ type: "CART_CLEAR" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        dispatch,
        addItem,
        updateItemQuantity,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
