import { Link } from "react-router-dom";
import "./NavBar.css";
export function Navbar() {
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
                <Link to="/" className="nav-link">
                  Cuenta
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Contacto
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categorias
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/categoria/hoodies">
                      Hoodies
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/remeras">
                      Remeras
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/medias">
                      Medias
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/categoria/accesorios">
                      Accesorios
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/CartWidget" className="nav-link ">
                  <i className="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
