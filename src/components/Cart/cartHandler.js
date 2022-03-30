// Cart items will be stored in localStorage
import _ from "lodash";

export const addDishToCart = (dish) => {
  let cart = { dishes: [] };

  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    cart.dishes.push({ ...dish, count: 1 });
    const uniqueDishes = _.uniqBy(cart.dishes, "_id");
    cart.dishes = uniqueDishes;

    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

export const getCart = () => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      return cart.dishes;
    }

    return [];
  }
  return [];
};

export const getCartTotal = () => {
  let dishes = [];
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      dishes = cart.dishes;
      const total = _.sumBy(dishes, (dish) => {
        return dish.count * dish.price;
      });

      return total;
    }

    return 0;
  }
  return 0;
};

export const getTotalItems = () => {
  let cart = {};

  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }

    return cart.dishes ? cart.dishes.length : 0;
  }
  return 0;
};

export const updateDishQuantity = (dish) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      const updatedDishes = _.map(cart.dishes, (item) => {
        if (item._id === dish._id) {
          item.count = dish.count;
        }
        return item;
      });

      cart.dishes = updatedDishes;
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};

export const removeDishFromCart = (id) => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("cart")) {
      const cart = JSON.parse(localStorage.getItem("cart"));
      _.remove(cart.dishes, { _id: id });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }
};
