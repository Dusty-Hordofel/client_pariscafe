import {
  BrowserRouter as Router,
  Routes as Road,
  Route,
} from "react-router-dom";
import Cart from "../Cart/Cart";
import Catalog from "../Catalog/Catalog";
import LandingPage from "../LandingPage/LandingPage";
import Signin from "../Auth/Signin/Singin";
import Signup from "../Auth/Signup/Signup";
import Signout from "../Auth/Signout/Signout";
import Profile from "../Auth/Profile/Profile";
import Orders from "../Orders/Orders";
import Order from "../Orders/Order/Order";
import LoggedInRoutes from "../Auth/ProtectedRoute/LoggedInRoutes";
import NotLoggedInRoutes from "../Auth/ProtectedRoute/NotLoggedInRoutes";

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Road>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route element={<LoggedInRoutes />}>
            <Route path="/orders" element={<Orders />} />
            <Route path="/orders/:id" element={<Order />} />
            <Route path="/me" element={<Profile />} />
          </Route>
          <Route element={<NotLoggedInRoutes />}>
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Road>
      </Router>
    );
  };

  return <>{deployRoutes()}</>;
};

export default Routes;
