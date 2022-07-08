import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { links } from "../../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import styled from "styled-components";
import CartBtn from "./CartBtn";
import AuthBtn from "./AuthBtn";

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav((state) => !state);
  };

  return (
    <NavbarContainer>
      <Link to="/" className="Navbar-logo-link">
        <img src={logo} alt="comfy sloth" className="Navbar-logo" />
      </Link>
      <div className={`Navbar-main-nav ${openNav ? "active" : null}`}>
        <ul className="Navbar-links">
          {links.map((link) => (
            <li key={link.id}>
              <Link
                to={link.url}
                className="Navbar-link"
                onClick={handleOpenNav}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <div className="Navbar-btns">
          <CartBtn handleOpenNav={handleOpenNav} />
          <AuthBtn handleOpenNav={handleOpenNav} />
        </div>
      </div>
      <div className="mobile-nav-btns">
        {openNav ? (
          <CgClose onClick={handleOpenNav} />
        ) : (
          <GiHamburgerMenu onClick={handleOpenNav} />
        )}
      </div>
    </NavbarContainer>
  );
}

const NavbarContainer = styled.nav`
  height: 10rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: var(--max-width);
  padding: 3.2rem;
  margin: 0 auto 2.4rem;
  position: relative;
  z-index: 2;
  border-bottom: solid 1px #cfd9e2;

  .Navbar-main-nav {
    flex: 1;
    display: flex;
    align-items: center;
    transition: var(--transition);
  }

  .Navbar-links {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6.4rem;
  }

  .Navbar-link:link,
  .Navbar-link:visited {
    font-size: 1.8rem;
    text-transform: capitalize;
    color: var(--clr-primary-dark);
    padding: 0.5rem;
    border-bottom: solid 2px transparent;

    transition: var(--transition);
  }

  .Navbar-link:hover,
  .Navbar-link:active {
    border-bottom: solid 2px var(--clr-primary-dark);
  }

  .Navbar-btns {
    display: flex;
    justify-content: center;
    gap: 3rem;
  }

  .mobile-nav-btns {
    font-size: 3rem;
    color: var(--clr-primary-dark);
    cursor: pointer;
    display: none;
  }

  .active {
    visibility: visible !important;
    opacity: 1 !important;
    pointer-events: auto !important;
    transform: translateX(0%) !important;
  }

  @media (max-width: 55em) {
    .mobile-nav-btns {
      display: block;
    }

    .Navbar-logo-link,
    .mobile-nav-btns {
      z-index: 3;
    }

    .Navbar-main-nav {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      padding-top: 9rem;
      display: flex;
      align-items: stretch;
      flex-direction: column;
      gap: 6.4rem;
      background-color: rgba(255, 255, 255, 0.95);
      z-index: 1;
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
      transform: translateX(100%);

      .Navbar-links {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        flex: none;
        gap: 0rem;

        .Navbar-link:link,
        .Navbar-link:visited {
          display: block;
          width: 100%;
          padding: 2.4rem;
          text-align: center;
          border-bottom: none;
        }
        .Navbar-link:hover,
        .Navbar-link:active {
          color: var(--clr-white);
          background-color: var(--clr-primary);
        }
      }
    }
  } ;
`;

export default Navbar;
