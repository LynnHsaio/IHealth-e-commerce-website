export default function cartReducer(state, action) {
  switch (action.type) {
    case "CART_ADD":
      const { item } = action;
      const isExisit = state.find((cartItem) => cartItem.id === item.id);

      if (isExisit) {
        return [...state].map((cartItem) => {
          if (cartItem.id === item.id) {
            return { ...cartItem, quantity: cartItem.quantity + item.quantity };
          } else {
            return cartItem;
          }
        });
      } else {
        return [...state, action.item];
      }

    case "CART_UPDATE_Quantity":
      const { id, type } = action.data;
      const value = type === "increment" ? +1 : type === "decrement" ? -1 : 0;

      return [...state].map((cartItem) => {
        if (cartItem.id === id) {
          const newQuantity = cartItem.quantity + value;
          if (newQuantity < cartItem.stock && newQuantity > 0) {
            return { ...cartItem, quantity: newQuantity };
          }
        }
        return cartItem;
      });

    case "CART_DELETE":
      return state.filter((cartItem) => cartItem.id !== action.id);

    case "CART_CLEAR":
      return [];

    default:
      break;
  }
}
