import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import logo from "../../img/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-slider">
        <div className="slider">
          <div class="marquee-inner">
            <div class="marquee-content">
              <span>ENVÍO GRATIS A PARTIR DE $1.199 </span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199 </span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199 </span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199 </span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
            </div>
            <div class="marquee-content clone">
              <span>ENVÍO GRATIS A PARTIR DE $1.199</span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199</span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199</span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
              <span>ENVÍO GRATIS A PARTIR DE $1.199 </span>
              <span>
                PAGÁ EN 3 Y 6 CUOTAS SIN INTERÉS CON VISA, AMEX Y MASTER
              </span>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div className="container-fluid text--nav">
          <Link to="/">
            <img
              src={logo}
              width="55"
              height="50"
              className="d-inline-block mx-2"
              alt="Logo"
            />
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
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categorías
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
                </ul>
              </li>
            </ul>
            <div className="d-flex">
              <Link to="/CartItemList">
                <CartWidget />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
