import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import CartContainer from "./components/Cart/CartContainer";
import CheckoutCart from "./components/Checkout/CheckoutCart";
import Home from "./Pages/Home";
import { Navbar } from "./components/Navbar/NavBar";
import Products from "./Pages/Products";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/CartItemList" element={<CartContainer />} />
          <Route path="/checkoutCart" element={<CheckoutCart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
