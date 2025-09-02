import { useAuth } from "../../hooks/useAuth";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export const LogoutHeader = () => {
  const { logout } = useAuth();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout} style={styles.logoutContainer}>
        <MaterialIcons name="logout" size={16} color="gray" />
        <Text style={styles.logout}>Cerrar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    width: "100%",
    paddingRight: 16,
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
  logout: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});
