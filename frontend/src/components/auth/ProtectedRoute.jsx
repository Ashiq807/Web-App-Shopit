import React from "react";
import { useSelector } from "react-redux";
import { Navigate, replace } from "react-router-dom";

import Loader from "../layout/Layout";

const ProtectedRoute = ({ admin, children }) => {
  const { isAuthenticated, user, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={replace} />;
  }

  if (admin && user?.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
