import React from "react";
import { Link } from "react-router-dom";
import Carousel1 from "../components/Carousel/Carousel";
import "./Home.css"

function Home() {
  return (
    <>
      <Carousel1 />
      <h1 className="title-destacados">Categorías destacadas</h1>
      <div className="container-destacados">
        <div className="item-destacado">
          <Link to="/category/hoodies">
            <img
              src="https://res.cloudinary.com/adastrashop/image/upload/v1648066264/Buzos_gqeo8w.png"
              alt="seccion 1"
            ></img>
          </Link>
        </div>
        <div className="item-destacado">
          <Link to="/category/remeras">
            <img
              src="https://res.cloudinary.com/adastrashop/image/upload/v1648066264/Remeras_vab6oc.png"
              alt="seccion 2"
            ></img>
          </Link>
        </div>
        <div className="item-destacado">
          <Link to="/category/medias">
            <img
              src="https://res.cloudinary.com/adastrashop/image/upload/v1648066264/medias_oodd74.png"
              alt="seccion 3"
            ></img>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
