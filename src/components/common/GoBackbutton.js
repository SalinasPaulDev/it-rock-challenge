import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export const GoBackbutton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigation.goBack}
        style={styles.checkoutContainer}
      >
        <MaterialIcons name="arrow-back" size={16} color="gray" />
        <Text style={styles.goBackText}>Volver</Text>
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
    alignItems: "flex-start",
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 50,
    paddingBottom: 0,
    height: 70,
  },
  checkoutContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  goBackText: {
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});
