import { Navigate, Route } from "react-router";
import { useAuth } from "../Context/auth-context/authContext";

export const PrivateRoutes = ({ path, ...props }) => {
  const { userAuthState } = useAuth();

  return userAuthState.isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
