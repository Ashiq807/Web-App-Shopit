import React from "react";
import { useSelector } from "react-redux";
import { Navigate, replace } from "react-router-dom";

import Loader from "../layout/Layout";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (loading) return <Loader />

  if (!isAuthenticated) {
    return <Navigate to="/login" replace={replace} />
  }

  return children;
};

export default ProtectedRoute;
