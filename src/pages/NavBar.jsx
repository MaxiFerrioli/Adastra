import { Link } from "react-router-dom";
import "./NavBar.css";
export function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
          <Link to="/detalle" class="navbar-brand">Inicio</Link>
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
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="javascript:void(0)">
                  Link
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Dropdown
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Another link
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      A third link
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="text"
                placeholder="Search"
              ></input>
              <button class="btn btn-primary" type="button">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
