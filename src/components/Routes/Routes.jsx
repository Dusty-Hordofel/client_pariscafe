import {
  BrowserRouter as Router,
  Routes as Road,
  Route,
} from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Road>
          <Route path="/" exact element={<LandingPage />} />
        </Road>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
