import React from "react";
import { Carousel } from "react-bootstrap";

function Carousel1() {
  return (
    <>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1647463339/Banner2_ssmrac.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1647463337/Banner3_qls4a7.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://res.cloudinary.com/adastrashop/image/upload/v1647463339/Banner1_s0genb.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Carousel1;
