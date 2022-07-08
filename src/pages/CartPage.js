import React, { useState } from "react";
import CartContent from "../components/cartPage/CartContent";
import { useCartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import createCheckoutSession from "../stripe/createCheckoutSession";
import { useAuthContext } from "../contexts/AuthContext";

function CartPage() {
  const { cart, clearCart } = useCartContext();
  const { currentUser } = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);

  function checkout() {
    setIsLoading(true);
    createCheckoutSession(currentUser.uid, cart);
  }

  if (cart.length <= 0) {
    return (
      <Wrapper className="CartPage">
        <div className="CartPage-empty container">
          <div className="CartPage-empty-textBox">
            <h3>你的購物車是空的</h3>
            <Link to="/products" className="btn">
              去逛逛吧
            </Link>
          </div>
        </div>
      </Wrapper>
    );
  }

  const total = cart.reduce(
    (accu, curr) => accu + curr.price * curr.quantity,
    0
  );

  return (
    <Wrapper className="CartPage">
      <CartContent />
      <div className="CartPage-bottom container">
        <button className="btn CartPage-clear-btn" onClick={clearCart}>
          清空購物車
        </button>
        <p className="CartPage-total">
          總金額（共{cart.length}個商品）：
          <span className="CartPage-total">NT${total}</span>
        </p>
        <div className="CartPage-btn">
          {currentUser ? (
            <button className="btn " onClick={checkout} disabled={isLoading}>
              {isLoading ? "正在處理..." : "結帳"}
            </button>
          ) : (
            <Link to="/login" className="btn">
              登入以結帳
            </Link>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding: 3.6rem 0;

  .CartPage-empty {
    min-height: calc(100vh - 20rem - 10rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .CartPage-empty-textBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.2rem;

    h3 {
      font-size: 3.2rem;
    }
  }

  .CartPage-clear-btn {
    display: flex;
    margin-right: auto;
    margin-bottom: 4.8rem;
    background-color: var(--clr-font-red);
  }

  .CartPage-total {
    text-align: right;
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
    span {
      font-size: 3rem;
      font-weight: bold;
      color: var(--clr-primary-dark);
    }
  }

  .CartPage-btn {
    display: flex;
    justify-content: flex-end;
  }
`;

export default CartPage;
