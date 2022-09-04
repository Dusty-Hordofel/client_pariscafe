import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const LandingPage = () => {
  const renderLandingPage = () => {
    return <Layout>Landing Page</Layout>;
  };
  return <div>{renderLandingPage()}</div>;
};

export default LandingPage;
