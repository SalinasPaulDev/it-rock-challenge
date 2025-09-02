import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useAuth } from "../hooks/useAuth";
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <ActivityIndicator size="large" color="#007AFF" />
  </View>
);

const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
