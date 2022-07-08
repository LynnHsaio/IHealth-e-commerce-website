import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CheckoutSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/products");
    }, 2000);
  }, []);

  return (
    <Wrapper className="CheckoutSuccess">
      <div className="container page-full-height">
        <div className="CheckoutSuccess-text-box">
          <p>結帳成功</p>
          <p>2秒後進入全部商品頁面...</p>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  font-size: 3rem;
  color: var(--clr-font-title);
`;

export default CheckoutSuccess;
