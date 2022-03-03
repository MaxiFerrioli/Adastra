import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import CartWidget from "../Cart/CartWidget";
import logo from "../../img/logo.png";
import "./Navbar.css";

export const Navegation = () => {
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                width="55"
                height="50"
                className="d-inline-block mx-2"
                alt="Logo"
                title="Inicio"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className="nav-link">
                Inicio
              </Link>
              <Link to="/" className="nav-link">
                Cuenta
              </Link>
              <Nav.Link>Contacto</Nav.Link>
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/category/hoodies">
                    Hoodies
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/category/remeras">
                    Remeras
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/category/medias">
                    Medias
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="dropdown-item" to="/">
                    Accesorios
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Link to="/CartItemList">
              <CartWidget />
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navegation;
