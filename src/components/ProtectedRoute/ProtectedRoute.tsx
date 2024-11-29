import React from "react";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
  allowAccess: boolean;
  redirectTo: string;
  Component: React.ComponentType;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  allowAccess,
  redirectTo,
  Component,
}) => {
  if (!allowAccess) {
    return <Navigate to={redirectTo} replace />;
  }
  return <Component />;
};

export default ProtectedRoute;
