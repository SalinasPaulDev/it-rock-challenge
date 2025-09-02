import { useAuth } from "../../hooks/useAuth";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const LogoutButton = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout} style={styles.logoutContainer}>
        <MaterialIcons name="logout" size={16} color="gray" />
        <Text style={styles.logoutText}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "flex-end",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 50,
    paddingBottom: 0,
    height: 70,
  },
  logoutContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  logoutText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});
