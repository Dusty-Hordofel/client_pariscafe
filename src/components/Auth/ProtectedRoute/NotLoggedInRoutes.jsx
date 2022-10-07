import { useAuth0 } from "@auth0/auth0-react";

import { Navigate, Outlet } from "react-router-dom"; //outlet is a component that renders the component that is matched by the route

const NotLoggedInRoutes = () => {
  const { user } = useAuth0();
  return user ? <Navigate to="/" /> : <Outlet />;
};

export default NotLoggedInRoutes;
