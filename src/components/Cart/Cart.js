import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import { faInr, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Notification from "../Notification/Notification";
import MenuCard from "../MenuCard/MenuCard";

import {
  getTotalItems,
  getCartTotal,
  getCart,
  updateDishQuantity,
  removeDishFromCart
} from "./cartHandler";

const Cart = () => {
  const [dishes, setDishes] = useState([]);
  const [show, setShow] = useState(false);
  const [notificationText, setNotificationText] = useState("");

  const init = async () => {
    try {
      const items = await getCart();
      setDishes(items);
    } catch (error) {
      console.log(error);
    }
  };

  const updateCart = async (dish, action) => {
    await updateDishQuantity(dish);
    setDishes(getCart());

    setNotificationText(
      action === "increment" ? "ITEM_QTY_INCREASED" : "ITEM_QTY_DECREASED"
    );
    setShow(true);
  };

  const removeDish = (dish) => {
    removeDishFromCart(dish._id);
    setDishes(getCart());

    setNotificationText("REMOVE_FROM_CART");
    setShow(true);
  };

  const showCart = () => {
    return (
      <>
        {dishes.map((dish) => (
          <div className="col-lg-4 col-md-5" key={dish._id}>
            <MenuCard
              dish={dish}
              updateCart={updateCart}
              removeDish={removeDish}
            />
          </div>
        ))}
      </>
    );
  };

  const closeHandler = () => {
    setShow(false);
  };

  const displayNotification = () => (
    <>
      {show && (
        <Notification
          show={show}
          text={notificationText}
          close={closeHandler}
        />
      )}
    </>
  );

  useEffect(() => {
    init();
  }, []);

  const renderCart = () => {
    return (
      <Layout title={"Cart Summary"}>
        {displayNotification()}
        <div className="row justify-content-center mt-3 mb-3">
          <div className="col-12 col-lg-4">
            <h4>Your Cart contains {getTotalItems()} dish(es)</h4>
          </div>
          <div className="col-12 col-lg-auto">
            <button className="btn btn-primary">
              Continue Shopping <strong>&#x27F9;</strong>
            </button>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-lg-6 col-7">
            <div className="row justify-content-start">{showCart()}</div>
          </div>
          <div className="col-lg-5 col-md-6">
            <h5 style={{ textDecoration: "underline" }}>
              Total: <FontAwesomeIcon icon={faInr} />
              <span style={{ padding: "0 5px" }}>
                {getCartTotal().toFixed(2)}
              </span>
            </h5>

            <Link to="/signin">
              <button className="btn btn-success">
                <FontAwesomeIcon icon={faLock} />
                <span style={{ padding: "5px 10px" }}>Signin to Checkout</span>
              </button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  };

  return <>{renderCart()}</>;
};

export default Cart;
