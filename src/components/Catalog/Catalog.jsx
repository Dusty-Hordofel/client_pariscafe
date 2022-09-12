import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Slideshow from '../UI/Slideshow/Slideshow';
import { getDishList, getFilteredDishList } from '../../api/dish/index';
import { getCategoryList } from '../../api/category/index';
import CheckboxGroup from '../UI/CheckboxGroup/CheckboxGroup';
import BrowseCard from '../UI/BrowseCard/BrowseCard';

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);

  console.log(categories);

  const init = async () => {
    try {
      setLoading(true);
      const result = await getDishList();
      console.log('🚀 ~ file: Catalog.js ~ line 17 ~ init ~ result', result);
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
                <BrowseCard
                  dish={dish}
                  key={dish._id}
                  addDishToCart={addDishToCart}
                />
              </div>
            );
          })}
      </>
    );
  };

  const addDishToCart = (dish) => {
    console.log(
      '🚀 ~ file: Catalog.jsx ~ line 54 ~ addDishToCart ~ dish)',
      dish
    );
  };

  const getFilteredDishes = async (categories) => {
    console.log(
      '🚀 ~ file: Catalog.js ~ line 72 ~ getFilteredDishes ~ categories',
      categories
    );

    try {
      const result = await getFilteredDishList(categories);
      console.log(
        '🚀 ~ file: Catalog.js ~ line 94 ~ getFilteredDishes ~ result',
        result
      );
      setFilteredDishes(result.data);
    } catch (error) {
      if (error.response) {
        console.log(
          '🚀 ~ file: Catalog.js ~ line 81 ~ getFilteredDishes ~ error.response',
          error.response.data.error
        );
      }
    }
  };

  const renderCatalog = () => {
    return (
      <Layout title="Dishes Catalog" background={true}>
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  };
  return <div>{renderCatalog()}</div>;
};

export default Catalog;
