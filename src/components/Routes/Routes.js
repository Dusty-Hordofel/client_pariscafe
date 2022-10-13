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
import AddCategory from "../Admin/AddCategory/AddCategory";
import AddDish from "../Admin/AddDish/AddDish";

const Routes = () => {
  const deployRoutes = () => {
    return (
      <Router>
        <Road>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signout" element={<Signout />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/category/create" element={<AddCategory />} />
          <Route path="/admin/dish/create" element={<AddDish />} />
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

// import React from 'react'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import LandingPage from '../LandingPage/LandingPage';
// import Catalog from '../Catalog/Catalog';
// import Cart from '../Cart/Cart';
// import Signin from '../Auth/Signin/Singin';
// import Signup from '../Auth/Signup//Signup';
// import Signout from '../Auth/Signout/Signout';
// import Profile from '../Auth/Profile/Profile';
// import Orders from '../Orders/Orders';
// import Order from '../Orders/Order/Order';

// import ProtectedRoute from '../Auth/ProtectedRoute/ProtectedRoute';

// const Routes = () => {

//   const deployRoutes = () => {

//     return (
//       <Router>
//         <Switch>
//           <Route path="/" exact component={LandingPage} />
//           <Route path="/catalog" exact component={Catalog} />
//           <Route path="/cart" exact component={Cart} />
//           <Route path="/signin" exact component={Signin} />
//           <Route path="/signup" exact component={Signup} />
//           <Route path="/signout" exact component={Signout} />
//           <ProtectedRoute path="/me" exact component={Profile} />
//           <ProtectedRoute path="/orders" exact component={Orders} />
//           <ProtectedRoute path="/orders/:id" exact component={Order} />

//         </Switch>
//       </Router>
//     )
//   }

//   return (
//     <>
//       {deployRoutes()}
//     </>
//   )

// }

// export default Routes
