import { useAuth0 } from "@auth0/auth0-react";
import { Outlet } from "react-router-dom"; //outlet is a component that renders the component that is matched by the route
import Signin from "../Signin/Singin";

const LoggedInRoutes = () => {
  const { user } = useAuth0();
  return user ? <Outlet /> : <Signin />; //Outlet element allows us to access the element inside another route .
};

export default LoggedInRoutes;
