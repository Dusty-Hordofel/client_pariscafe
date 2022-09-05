import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const LandingPage = () => {
  const renderLandingPage = () => {
    return (
      <Layout title="Savor Our Delicacies" background={true} backdrop={true}>
        <section style={{ color: 'var(--primary-white)' }}>
          <h1
            style={{
              color: 'var(--primary-orange)',
              fontFamily: 'Roboto Bold',
            }}
          >
            indiCaf&egrave;
          </h1>
          <p>
            <button
              className="btn btn-warning"
              style={{
                padding: '5px 20px',
                fontWeight: 'bold',
                margin: '3px 10px',
              }}
            >
              <Link to="/browse" style={{ color: 'inherit' }}>
                Explore
              </Link>
            </button>{' '}
            our offers and enjoy the savories
          </p>
          <p>Home Deiveries under 30 minutes flat.</p>
        </section>
      </Layout>
    );
  };
  return <div>{renderLandingPage()}</div>;
};

export default LandingPage;
