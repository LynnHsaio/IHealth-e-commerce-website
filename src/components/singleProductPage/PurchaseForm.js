import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/CartContext";
import Quantity from "../Quantity";

function PurchaseForm(singleProduct) {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { dispatch, addItem } = useCartContext();

  const increment = () => {
    if (quantity < singleProduct.stock) {
      setQuantity((quantity) => quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addItem(singleProduct, quantity);

    navigate("/cart");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="SingleProduct-quantity margin-bottom-md">
        <span>數量:</span>
        <div>
          <Quantity
            quantity={quantity}
            increase={increment}
            decrease={decrement}
          />
        </div>
      </div>
      <button className="btn">放入購物車</button>
    </form>
  );
}

export default PurchaseForm;
