import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SharedLayout from "./pages/SharedLayout";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import CartPage from "./pages/CartPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import "@stripe/stripe-js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products">
              <Route index element={<ProductsPage />} />
              <Route path=":productId" element={<SingleProductPage />} />
            </Route>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="checkout-success" element={<CheckoutSuccess />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
