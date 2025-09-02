import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const ErrorMessage = ({
  icon = "alert-circle",
  text,
  iconSize = 48,
  iconColor = "#ef4444",
  textColor = "#6b7280",
}) => {
  return (
    <View style={styles.errorContainer}>
      <Ionicons name={icon} size={iconSize} color={iconColor} />
      <Text style={[styles.errorText, { color: textColor }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
  errorText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",
    lineHeight: 24,
    maxWidth: 300,
  },
});
