import React, { useState } from "react";
import { API_BASE_URL } from "../../config/Config";
import {
  faInr,
  faMinus,
  faPlus,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./MenuCard.css";

const MenuCard = ({ dish, updateCart, removeDish }) => {
  const [count, setCount] = useState(dish.count);

  const handleCartOperation = (action) => {
    let newDish, newCount;

    switch (action) {
      case "increment":
        newDish = { ...dish };
        newCount = count + 1;
        newDish.count = newCount;
        setCount(newCount);
        updateCart(newDish, "increment");
        break;
      case "decrement":
        newDish = { ...dish };
        newCount = count - 1;
        if (newCount === 0) {
          return;
        }
        newDish.count = newCount;
        setCount(newCount);
        updateCart(newDish, "decrement");
        break;
      case "remove":
        removeDish(dish);
        break;
      default:
        break;
    }
  };

  const renderCard = () => (
    <div className="menu-card">
      <div className="title">{dish.name}</div>
      <div>
        <img
          src={`${API_BASE_URL}/api/dish/${dish._id}/photo`}
          alt={dish.name}
          className="dish-img"
        />
      </div>
      <div className="quantity">Qty: {dish.count}</div>
      <div className="price">
        <FontAwesomeIcon icon={faInr} />
        {dish.price.toFixed(2)}
      </div>
      <div className="d-flex controls">
        <div className="descrease mr-4">
          <FontAwesomeIcon
            icon={faMinus}
            className="fa fa-minus"
            data-placement="top"
            title="Decrease Quantity"
            onClick={() => handleCartOperation("decrement")}
          ></FontAwesomeIcon>
        </div>
        <div className="increase mr-4">
          <FontAwesomeIcon
            icon={faPlus}
            data-placement="top"
            title="Increase Quantity"
            onClick={() => handleCartOperation("increment")}
          ></FontAwesomeIcon>
        </div>
        <div className="remove">
          <FontAwesomeIcon
            icon={faTrash}
            data-placement="top"
            title="Remove Dish"
            onClick={() => handleCartOperation("remove")}
          ></FontAwesomeIcon>
        </div>
      </div>
    </div>
  );

  return <>{renderCard()}</>;
};

export default MenuCard;
