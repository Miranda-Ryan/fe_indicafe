import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Slideshow from "../Slideshow/Slideshow";
import BrowseCard from "../BrowseCard/BrowseCard";
import CheckboxGroup from "../CheckboxGroup/CheckboxGroup";
import AppSpinner from "../Spinner/Spinner";
import Notification from "../Notification/Notification";

import { addDishToCart } from "../Cart/cartHandler";
import { getDishList, getFilteredDishList } from "../../api/dish/index";
import { getCategoryList } from "../../api/category/index";

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const init = async () => {
    try {
      setLoading(true);
      const response = await getDishList();
      setDishes(response.data.dishes);

      const categoryList = await getCategoryList();
      setCategories(categoryList.data.result);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  const getFilteredDishes = async (categories) => {
    const categoriesLength = categories.length;

    try {
      setLoading(true);
      const result =
        categoriesLength > 0
          ? await getFilteredDishList(categories)
          : await getDishList();

      categoriesLength > 0 ? setDishes([]) : setFilteredDishes([]);
      categoriesLength > 0
        ? setFilteredDishes(result.data.result)
        : setDishes(result.data.dishes);

      // setFilteredDishes(result.data.result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(error.response);
      }
    }
  };

  const addToCart = (dish) => {
    addDishToCart(dish);

    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };

  const showNotification = () => (
    <>
      {show && (
        <Notification show={show} text={"ADD_TO_CART"} close={closeHandler} />
      )}
    </>
  );

  useEffect(() => {
    init();
  }, []);

  const displayDishes = () => {
    return (
      <>
        {dishes.length > 0 &&
          dishes.map((dish) => {
            return (
              <div className="col-10 col-lg-4 col-md-4 mt-2" key={dish._id}>
                <BrowseCard dish={dish} key={dish._id} addToCart={addToCart} />
              </div>
            );
          })}
      </>
    );
  };

  const displayFilteredDishes = () => {
    return (
      <>
        {filteredDishes.length > 0 &&
          filteredDishes.map((dish) => {
            return (
              <div className="col-10 col-lg-4 col-md-4 mt-2" key={dish._id}>
                <BrowseCard dish={dish} key={dish._id} addToCart={addToCart} />
              </div>
            );
          })}
      </>
    );
  };

  const renderCatalog = () => {
    return (
      <Layout title="Savor our Delicacies">
        {showNotification()}
        {loading ? (
          <AppSpinner />
        ) : (
          <section className="container mt-4">
            <div className="row justify-content-center">
              <div className="col-md-8 col-12">
                <Slideshow />
              </div>

              <div className="row justify-content-center mt-4">
                <div className="col-lg-2 mt-2">
                  <h4>Filter By Category</h4>
                  <CheckboxGroup
                    categories={categories}
                    handleFiltering={getFilteredDishes}
                  />
                </div>
                <div className="col-lg-10 mt-2">
                  <div className="row justify-content-center">
                    {/* Display all dishes */}
                    {displayDishes()}
                    {displayFilteredDishes()}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </Layout>
    );
  };

  return <>{renderCatalog()}</>;
};

export default Catalog;
