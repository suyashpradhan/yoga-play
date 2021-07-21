import { Navigate, Route } from "react-router";
import { useAuth } from "../context/auth-context/auth-context";

export const PrivateRoutes = ({ path, ...props }) => {
  const { userAuthState } = useAuth();

  return userAuthState.isLoggedIn ? (
    <Route path={path} {...props} />
  ) : (
    <Navigate state={{ from: path }} replace to="/login" />
  );
};
