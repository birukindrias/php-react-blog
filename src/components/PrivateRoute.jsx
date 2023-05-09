// import { Route, Navigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// function PrivateRoute({ path, element }) {
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   return isAuthenticated ? (
//     <Route path={path} element={element} />
//   ) : (
//     <Navigate to="/login" />
//   );
// }

import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PrivateRoute({ element: Component, ...rest }) {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
}

export default PrivateRoute;
