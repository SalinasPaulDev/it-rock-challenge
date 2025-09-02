import React from "react";
import { useAuth } from "../hooks/useAuth";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { Loader } from "../components/common/Loader";

const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <Loader text="Cargando sesión..." />;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
