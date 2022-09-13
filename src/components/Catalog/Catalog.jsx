import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Slideshow from '../UI/Slideshow/Slideshow';
import { getDishList, getFilteredDishList } from '../../api/dish/index';
import { getCategoryList } from '../../api/category/index';
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup';
import BrowseCard from '../UI/BrowseCard/BrowseCard';
import AppSpinner from '../UI/Spinner/AppSpinner';
import { addDishToCart } from '../Cart/cartHandler';

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  // console.log(dishes);
  console.log(
    '🚀 ~ file: Catalog.jsx ~ line 12 ~ Catalog ~ filteredDishes',
    filteredDishes
  );
  // console.log(categories);

  const init = async () => {
    try {
      setLoading(true);
      const result = await getDishList();
      // console.log('🚀 ~ file: Catalog.js ~ line 17 ~ init ~ result', result);
      setDishes(result.data);

      // get all categories

      const categoryList = await getCategoryList();
      setCategories(categoryList.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      if (error.response) {
        console.log(
          '🚀 ~ file: Catalog.js ~ line 21 ~ init ~ error.response',
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
                <BrowseCard dish={dish} key={dish._id} />
              </div>
            );
          })}
      </>
    );
  };

  const addToCart = (dish) => {
    console.log(
      '🚀 ~ file: Catalog.jsx ~ line 54 ~ addDishToCart ~ dish)',
      dish
    );
    addDishToCart(dish);
  };

  const getFilteredDishes = async (categories) => {
    console.log(
      '🚀 ~ file: Catalog.jsx ~ line 67 ~ getFilteredDishes ~ categories',
      categories
    );
    const categoriesLength = categories.length;

    try {
      setLoading(true);
      const result =
        categoriesLength > 0
          ? await getFilteredDishList(categories)
          : await getDishList();
      categoriesLength > 0 ? setDishes([]) : setFilteredDishes([]);
      categoriesLength > 0
        ? setFilteredDishes(result.data)
        : setDishes(result.data);

      console.log(
        '🚀 ~ file: Catalog.js ~ line 94 ~ getFilteredDishes ~ result',
        result
      );

      setFilteredDishes(result.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(
        '🚀 ~ file: Catalog.jsx ~ line 74 ~ getFilteredDishes ~ error',
        error
      );
    }
  };

  const renderCatalog = () => {
    return (
      <Layout title="Dishes Catalog" background={true}>
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
  return <div>{renderCatalog()}</div>;
};

export default Catalog;
