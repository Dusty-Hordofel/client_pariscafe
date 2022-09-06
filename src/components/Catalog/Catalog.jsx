import Layout from '../Layout/Layout';

const Catalog = () => {
  const renderCatalog = () => {
    return (
      <Layout title="Dishes Catalog" background={true}>
        <h2>Welcome to Catalog</h2>
      </Layout>
    );
  };
  return <div>{renderCatalog()}</div>;
};

export default Catalog;
