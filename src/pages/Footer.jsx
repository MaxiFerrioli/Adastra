import "./Footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <>
      <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
          <div class="row gy-4 gx-5">
            <div class="col-lg-4 col-md-6">
              <h5 class="h1 text-white">ADASTRA</h5>
              <p class="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p class="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6">
              <h5 class="text-white mb-3">Quick links</h5>
              <ul class="list-unstyled text-muted">
                <li>
                  <Link to="/detalle">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
                <li>
                  <Link to="/">Inicio</Link>
                </li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h5 class="text-white mb-3">Newsletter</h5>
              <p class="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div class="input-group mb-3">
                  <input
                    class="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  ></input>
                  <button
                    class="btn btn-primary"
                    id="button-addon2"
                    type="button"
                  >
                    <i class="fas fa-paper-plane"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
