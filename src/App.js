import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/categoria/:idCate"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/detalle/:id"
            element={
              <ItemDetailContainer greeting="hola soy ItemDetailContainer" />
            }
          />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

