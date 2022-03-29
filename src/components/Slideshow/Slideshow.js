import React from "react";
import { Carousel } from "react-bootstrap";

import img1 from "../../assets/imgs/salad.jpg";
import img2 from "../../assets/imgs/burger.jpg";
import img3 from "../../assets/imgs/dosa.jpg";

import "./Slideshow.css";

const Slideshow = () => {
  const renderSlideShow = () => {
    return (
      <Carousel className="slide carousel-fade">
        <Carousel.Item data-interval="2000">
          <img
            className="d-block w-100"
            src={img1}
            alt="First slide"
            style={{ width: "500px", height: "250px", borderRadius: "5px" }}
          />
          <Carousel.Caption>
            <h3>Sumptuous Salads</h3>
            <p>Try our salads with crunchy nuts and fresh green veggies</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-interval="2000">
          <img
            className="d-block w-100"
            src={img2}
            alt="Second slide"
            style={{ width: "500px", height: "250px", borderRadius: "5px" }}
          />
          <Carousel.Caption>
            <h3>Burger Bonanza</h3>
            <p>
              {" "}
              Burgers that you want more of. Go ahead explore the Burger of the
              Day!!
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item data-interval="2000">
          <img
            className="d-block w-100"
            src={img3}
            alt="Third slide"
            style={{ width: "500px", height: "250px", borderRadius: "5px" }}
          />
          <Carousel.Caption>
            <h3>Delicious Dosas</h3>
            <p>Try our Southern delicacy. You will come back for more!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  };

  return <>{renderSlideShow()}</>;
};

export default Slideshow;
