import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import styled from "styled-components";

function AuthBtn({ handleOpenNav }) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuthContext();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("登出失敗");
    }
  }

  const loginOrRegister =
    pathname === "/login" ? (
      <Link to="/register">
        註冊 <BsFillPersonFill />
      </Link>
    ) : (
      <Link to="/login">
        登入
        <BsFillPersonFill />
      </Link>
    );

  return (
    <Wrapper onClick={handleOpenNav}>
      {error && <span>{error}</span>}
      {currentUser ? (
        <>
          <span className="AuthBtn-displayName">{currentUser.displayName}</span>
          <span onClick={handleLogout}>登出</span>
        </>
      ) : (
        loginOrRegister
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-size: 2.4rem;
  font-weight: bold;
  color: var(--clr-font-title);
  transition: var(--transition);
  cursor: pointer;

  &:hover {
    color: var(--clr-primary-dark);
  }

  .AuthBtn-displayName {
    color: #54aa70;
    margin-right: 0.6rem;
    cursor: auto;
  }

  span {
    display: inline-block;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    color: inherit;
  }
`;

export default AuthBtn;
