import "./App.css";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import Cart from "./components/Cart";
import Cuenta from "./pages/Cuenta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/NavBar";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import CartContextProvider from "./context/CartContext";

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;