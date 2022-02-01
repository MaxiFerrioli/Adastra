import "./Footer.css";

export function Footer() {
  return (
    <>
      <footer className="w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4 gx-5 cont-flex">
            <div className="col-lg-4 col-md-6">
              <h5 className="h1 text-white">ADASTRA</h5>
              <p className="small text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-muted mb-0">
                &copy; Copyrights. All rights reserved.{" "}

              </p>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-muted">
                Si desea recibir todas las novedades de Ad astra, ingrese su email:
              </p>
              <form>
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ej: example@hotmail.com"
                  ></input>
                  <button
                    className="btn btn-primary"
                    id="button-addon2"
                    type="button">
                    <i className="fas fa-paper-plane"></i>
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

