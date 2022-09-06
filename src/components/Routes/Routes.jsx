import {
  BrowserRouter as Router,
  Routes as Road,
  Route,
} from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import LandingPage from '../LandingPage/LandingPage';

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Road>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<Catalog />} />
        </Road>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
