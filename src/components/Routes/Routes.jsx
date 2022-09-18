import {
  BrowserRouter as Router,
  Routes as Road,
  Route,
} from 'react-router-dom';
import Cart from '../Cart/Cart';
import Catalog from '../Catalog/Catalog';
import LandingPage from '../LandingPage/LandingPage';
import Signin from '../Auth/Signin/Singin';
import Signup from '../Auth/Signup/Signup';
import Signout from '../Auth/Signout/Signout';

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Road>
          <Route path="/" element={<LandingPage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signout" element={<Signout />} />
        </Road>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
