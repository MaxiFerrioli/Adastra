import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartWidget from "./CartWidget";

import "./NavBar.css";

export const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <Link to="/" class="navbar-brand">
            Adastra
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Cuenta" className="nav-link">
                  Cuenta
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categorias
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/category/hoodies">
                      Hoodies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/remeras">
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/medias">
                      Medias
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/category/accesorios">
                      Accesorios
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/Cart">
                  <CartWidget />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
