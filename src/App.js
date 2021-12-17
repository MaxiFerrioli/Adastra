import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
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
            path="/detalle"
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
