import "./App.css";
import Cuenta from "./pages/Cuenta";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import React from "react";
import CartContextProvider from "./context/CartContext";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import CartContainer from "./components/Cart/CartContainer";

function App() {
  return (
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cuenta" element={<Cuenta />} />
            <Route path="/category/:id" element={<ItemListContainer/>} />
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/CartItemList" element={<CartContainer/>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
  );
}

export default App;