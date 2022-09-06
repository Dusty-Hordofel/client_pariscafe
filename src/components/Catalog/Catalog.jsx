import Layout from '../Layout/Layout';
import Slideshow from '../UI/Slideshow/Slideshow';

const Catalog = () => {
  const renderCatalog = () => {
    return (
      <Layout title="Dishes Catalog" background={true}>
        <section className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-12">
              <Slideshow />
            </div>
          </div>
        </section>
      </Layout>
    );
  };
  return <div>{renderCatalog()}</div>;
};

export default Catalog;
