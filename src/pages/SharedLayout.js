import React from "react";
import Navbar from "../components/header/Navbar";
import { Outlet, useLocation } from "react-router-dom";
// import Footer from "../components/Footer";
import Breadcrumb from "../components/header/Breadcrumb";
import { useProductsContext } from "../contexts/ProductsContext";

function SharedLayout() {
  const { pathname } = useLocation();
  const { singleProduct } = useProductsContext();

  const path = pathname.split("/").splice(1);

  const page = path[0];
  const productId = path[1];
  let pageName = "";
  let productName = "";

  switch (page) {
    case "products":
      pageName = "全部商品";
      break;
    case "cart":
      pageName = "購物車";
      break;

    default:
      break;
  }

  if (productId) {
    productName = singleProduct?.category;
  }

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      {pathname.includes("/products") || pathname === "/cart" ? (
        <Breadcrumb page={page} pageName={pageName} productName={productName} />
      ) : (
        ""
      )}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default SharedLayout;
