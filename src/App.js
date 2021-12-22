import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/categoria/:idCate" element={<ItemListContainer />} />
          <Route
            exact
            path="/"
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
