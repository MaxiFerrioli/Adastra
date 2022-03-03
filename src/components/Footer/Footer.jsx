import "./Footer.css";

export function Footer() {
  return (
    <>
      <div className="fondo_newsletter">
        <div>
          <h3>¡Suscribete para conocer nuestras promos y novedades!</h3>
        </div>
        <form className="footer-form">
          <input
            name="mail"
            type="text"
            placeholder="Ej: example@hotmail.com"
          ></input>
          <button id="button-addon2" type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div className="social-icons">
        <a href="#">
          <img
            alt="Icono Instagram"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646020733/insta_dmtckr.png"
          ></img>
        </a>
        <a href="#">
          <img
            alt="Icono Facebook"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646020733/facebook_m0udhr.png"
          ></img>
        </a>
        <a href="#">
          <img
            alt="Icono Whatsapp"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1646020733/wpp_fzbypy.png"
          ></img>
        </a>
      </div>
      <footer>
        <div className="footer-cont">
          <h5>ADASTRA</h5>
          <p>&copy; Copyrights. All rights reserved. </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
