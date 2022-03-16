import React from "react";
import Typed from "react-typed";
import image1 from "../../../assets/add-images/breakfast-thali.jpeg";
import image2 from "../../../assets/add-images/italian-cobmo-meal.jpeg";
import image3 from "../../../assets/add-images/enchilladas.jpeg";
import "./Menu.css";

const Menu = () => {
  const renderMenu = () => {
    return (
      <section>
        <Typed
          className="typed-text"
          strings={[
            "Our Daily Specials",
            "Burger Bonanza",
            "Southern Delicacies"
          ]}
          loop
          typeSpeed={40}
          backSpeed={60}
        />
        <div className="container">
          <a href="/browse">
            <div className="d-flex justify-content-center align-items-center flex-wrap">
              <div
                className="card"
                style={{
                  width: "192px"
                }}
              >
                <img src={image1} className="card-img-top" alt="Dish 1" />
                <div className="card-body text-muted">
                  <h5 className="card-title">South Indian Breakfast Thali</h5>
                  <p className="card-text">
                    Assortment of delicious soft idli, crunchy dosa served with
                    green chutney and sambar.
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "192px"
                }}
              >
                <img src={image2} className="card-img-top" alt="Dish 2" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Italian Combo Meal</h5>
                  <p className="card-text">
                    Assortment of delicious pizza with multiple toppings, and
                    spaghetti.
                  </p>
                </div>
              </div>

              <div
                className="card"
                style={{
                  width: "192px"
                }}
              >
                <img src={image3} className="card-img-top" alt="Dish 3" />
                <div className="card-body text-muted">
                  <h5 className="card-title">Enchilladas</h5>
                  <p className="card-text">
                    Assortment of crunchy dorito served with salsa sauce and
                    mayonnaise.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
    );
  };

  return <>{renderMenu()}</>;
};

export default Menu;
