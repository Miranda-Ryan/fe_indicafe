import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

import "./Notification.css";

const Notification = ({ show, close, text }) => {
  if (!show) {
    console.log("show", show);
    return null;
  } else {
    console.log("show", show, text);
  }

  const showNotificationText = () => {
    switch (text) {
      case "ADD_TO_CART":
        return (
          <>
            Item added to{" "}
            {
              <Link to="/cart">
                <span style={{ textDecoration: "underline", color: "#FFF" }}>
                  Cart
                </span>
              </Link>
            }
          </>
        );

      case "REMOVE_FROM_CART":
        return (
          <>
            Item removed from{" "}
            {
              <Link to="/cart">
                <span style={{ textDecoration: "underline", color: "#FFF" }}>
                  Cart
                </span>
              </Link>
            }
          </>
        );

      case "ITEM_QTY_INCREASED":
        return <>Item Quantity Increased </>;

      case "ITEM_QTY_DECREASED":
        return <>Item Quantity Decreased </>;

      case "ORDER_CANCELLED":
        return <>Order Cancelled </>;

      case "ORDER_ACCEPTED":
        return <>Order Accepted </>;

      default:
        return <>{text}</>;
    }
  };

  return (
    <>
      {show ? <div onClick={close} className="notification-backdrop" /> : null}
      <div
        className="notification"
        style={{
          opacity: show ? "1" : "0",
          transform: show ? "translateY(0vh)" : "translateY(-100vh)"
        }}
      >
        <div className="notification-content">
          <FontAwesomeIcon
            icon={faCheckCircle}
            style={{ color: "#1BD4A5", marginBottom: "9.6px" }}
          />
          <p>{showNotificationText()}</p>
          <div
            onClick={close}
            className="close-button"
            style={{ marginBottom: "0.7rem" }}
          >
            X
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
