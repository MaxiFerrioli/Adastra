import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget";
import logo from "../../img/logo.png";
import React, { useState } from "react";
import "./NavBar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky-top">
      <div className="container-slider">
        <div className="slider">
          <div className="marquee-inner">
            <div className="marquee-content">
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
            <div className="marquee-content clone">
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
      <div className="container-nav">
        <Link to="/home">
          <img src={logo} className="nav-logo" alt="Logo" title="Inicio" />
        </Link>
        <div
          className={`nav-items ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link to="/home" className="link-nav">
            Inicio
          </Link>
          <Link
            to="/Products"
            className="link-nav"
            onClick={() => setIsOpen(!isOpen)}
          >
            Productos
          </Link>
          {/* <Link
            to="/Login"
            className="link-nav"
            onClick={() => setIsOpen(!isOpen)}
          >
            Mi cuenta
          </Link> */}
          <Link
            to="/CartItemList"
            className="link-cart"
            onClick={() => setIsOpen(!isOpen)}
          >
            <CartWidget />
          </Link>
        </div>
        <div
          className={`nav-toggle ${isOpen && "open"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="menu-icon" onClick={handleClick}>
            <i className={"fas fa-bars"} />
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
