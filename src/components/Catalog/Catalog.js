import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { getDishList, getFilteredDishList } from "../../api/dish";
import { getCategoryList } from "../../api/category";

import Slideshow from "../UI/Slideshow/Slideshow";
import BrowseCard from "../UI/BrowseCard/BrowseCard";
import CheckboxGroup from "../UI/CheckboxGroup/CheckboxGroup";
import AppSpinner from "../UI/Spinner/AppSpinner";
import { Notification } from "../UI/Notification/Notification";

import { addDishToCart } from "../Cart/cartHandler";

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);

  const [categories, setCategories] = useState([]);
  const [selecetdCategories, setSelectedCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [show, setShow] = useState(false);

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

  const init = async () => {
    try {
      setLoading(true);
      const result = await getDishList();
      console.log("🚀 ~ file: Catalog.js ~ line 17 ~ init ~ result", result);
      setDishes(result.data);

      // get all categories

      const categoryList = await getCategoryList();
      setCategories(categoryList.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(
          "🚀 ~ file: Catalog.js ~ line 21 ~ init ~ error.response",
          error.response.data.error
        );
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  const displayDishes = () => {
    return (
      <>
        {dishes.length > 0 &&
          dishes.map((dish) => {
            return (
              <div className="col-10 col-lg-3 col-md-4 mt-2" key={dish._id}>
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
              <div className="col-10 col-lg-3 col-md-4 mt-2" key={dish.id}>
                <BrowseCard dish={dish} key={dish._id} addToCart={addToCart} />
              </div>
            );
          })}
      </>
    );
  };

  const addToCart = (dish) => {
    console.log("🚀 ~ file: Catalog.js ~ line 54 ~ addDishToCart ~ dish", dish);
    addDishToCart(dish);
    setShow(true);
  };

  const getFilteredDishes = async (categories) => {
    console.log(
      "🚀 ~ file: Catalog.js ~ line 72 ~ getFilteredDishes ~ categories",
      categories
    );

    const categoriesLength = categories.length;
    setDishes([]);
    setFilteredDishes([]);
    setSelectedCategories(categories);

    try {
      setLoading(true);
      const result =
        categoriesLength > 0
          ? await getFilteredDishList(categories)
          : await getDishList();
      // categoriesLength > 0 ? setDishes([]) : setFilteredDishes([]);
      setFilteredDishes(result.data);

      // categoriesLength > 0
      //   ? setFilteredDishes(result.data)
      //   : setDishes(result.data);

      console.log(
        "🚀 ~ file: Catalog.js ~ line 94 ~ getFilteredDishes ~ result",
        result
      );

      setFilteredDishes(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(
          "🚀 ~ file: Catalog.js ~ line 81 ~ getFilteredDishes ~ error.response",
          error.response.data.error
        );
      }
    }
  };

  const renderCatalog = () => (
    <Layout title="Savor Our Delicacies">
      {showNotification()}
      <section className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <Slideshow />
          </div>

          {loading && <AppSpinner />}

          <div className="row justify-content-center mt-4">
            <div className="col-lg-2 mt-2">
              <h4>Filter By Category</h4>
              <CheckboxGroup
                categories={categories}
                handleFiltering={getFilteredDishes}
                categoriesSeleted={selecetdCategories}
              />
            </div>
            <div className="col-lg-10 mt-2">
              <div className="row justify-content-center">
                {displayDishes()}
                {displayFilteredDishes()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );

  return <>{renderCatalog()}</>;
};

export default Catalog;
