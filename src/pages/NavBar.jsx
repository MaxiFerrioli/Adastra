import { Link } from "react-router-dom";
import "./NavBar.css";
export function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <Link to='/' class="navbar-brand">LOGO</Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to="/" class="nav-link">Inicio</Link>
              </li>
              <li class="nav-item">
              <Link to="/" class="nav-link">Inicio</Link>
              </li>
              <li class="nav-item">
              <Link to="/" class="nav-link">Inicio</Link>
              </li>
              <li class="nav-item dropdown">
                <Link
                  class="nav-link dropdown-toggle"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Productos
                </Link>
                <ul class="dropdown-menu">
                  <li>
                    <Link class="dropdown-item" to="/">
                      Link
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      Another link
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/">
                      A third link
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
