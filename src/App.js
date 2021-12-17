import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link} from 'react-router-dom'
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { Navbar } from "./pages/NavBar";
import { Footer } from "./pages/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ItemListContainer greeting="hola soy ItemListContainer" />
            }
          />
          <Route
            exact
            path="/categoria"
            element={<ItemListContainer greeting="hola soy" />}
          />
          <Route
            exact
            path="/detalle"
            element={
              <ItemDetailContainer greeting="hola soy ItemDetailContainer" />
            }
          />
          <Route
            exact
            path="/carrito"
            element={<ItemListContainer greeting="hola soy" />}
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
