import { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import Slideshow from '../UI/Slideshow/Slideshow';
import { getDishList } from '../../api/dish/index';

const Catalog = () => {
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);

  const init = async () => {
    try {
      setLoading(true);
      const result = await getDishList();
      console.log('🚀 ~ file: Catalog.js ~ line 17 ~ init ~ result', result);
      setDishes(result.data);

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

  const renderCatalog = () => {
    return (
      <Layout title="Dishes Catalog" background={true}>
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <Slideshow />
            </div>
            <div className="row justify-content-center mt-4">
              <div className="col-lg-2 mt-2"></div>
              <div className="col-lg-10 mt-2">
                <div className="row justify-content-center"></div>
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
