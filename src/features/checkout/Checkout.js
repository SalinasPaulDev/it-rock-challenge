import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { validateCardInfo } from "../../utils/validateCardInfo";
import { validateDate } from "../../utils/validateDate";
import Snackbar from "react-native-snackbar";

const Checkout = ({ route }) => {
  const { item } = route.params;
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [cardholderName, setCardholderName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const handleValdidateForm = () => {
    if (!validateCardInfo(cardNumber, securityCode, cardholderName)) {
      return false;
    }

    if (!validateDate(expirationDate)) {
      return false;
    }

    return true;
  };

  const handleBuy = () => {
    if (!handleValdidateForm()) {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      Snackbar.show({
        text: "Compra realizada correctamente",
        duration: Snackbar.LENGTH_LONG,
        textColor: "white",
        backgroundColor: "green",
      });
      navigation.navigate("MainTabs");
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>
          Finaliza tu compra de:{" "}
          <Text style={styles.productName}>{item.title}</Text>
        </Text>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <Text style={styles.totalText}>Total a pagar: ${item.price}</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre del titular"
        value={cardholderName}
        onChangeText={setCardholderName}
        keyboardType="default"
        autoCapitalize="none"
        maxLength={50}
      />
      <TextInput
        style={styles.input}
        placeholder="Número de tarjeta"
        value={cardNumber}
        onChangeText={setCardNumber}
        keyboardType="number-pad"
        autoCapitalize="none"
        maxLength={16}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.expirationDateInput]}
          placeholder="dd/mm/yyyy"
          value={expirationDate}
          onChangeText={setExpirationDate}
          keyboardType="datetime"
          autoCapitalize="none"
          format="dd/MM/yyyy"
          maxLength={10}
        />
        <TextInput
          style={[styles.input, styles.cvvInput]}
          placeholder="CVV"
          value={securityCode}
          onChangeText={setSecurityCode}
          keyboardType="numeric"
          autoCapitalize="none"
          maxLength={3}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleBuy}>
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Comprar</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    flexDirection: "column",
    gap: 10,
  },
  totalText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#000",
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  titleText: {
    width: "60%",
  },
  productName: {
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 4,
  },
  expirationDateInput: {
    width: "50%",
  },
  cvvInput: {
    width: "40%",
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 2,
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 64,
    height: 64,
    resizeMode: "contain",
  },
});
