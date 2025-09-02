import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
} from "react-native";
import { useAuth } from "../../hooks/useAuth";
import Snackbar from "react-native-snackbar";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      Snackbar.show({
        text: "Por favor completa todos los campos",
        duration: Snackbar.LENGTH_LONG,
        textColor: "white",
        backgroundColor: "#FF3B30",
      });
      return;
    }

    if (!EMAIL_REGEX.test(email)) {
      Snackbar.show({
        text: "Por favor ingresa un email válido",
        duration: Snackbar.LENGTH_LONG,
        textColor: "white",
        backgroundColor: "#FF3B30",
      });
      return;
    }
    if (password.length < 8) {
      Snackbar.show({
        text: "La contraseña debe tener al menos 8 caracteres",
        duration: Snackbar.LENGTH_LONG,
        textColor: "white",
        backgroundColor: "#FF3B30",
      });
      return;
    }

    const result = await login(email, password);

    if (!result.success) {
      Snackbar.show({
        text: result.error || "Error al iniciar sesión",
        duration: Snackbar.LENGTH_LONG,
        textColor: "white",
        backgroundColor: "#FF3B30",
      });
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../../assets/img/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.loginText}>Iniciar Sesión</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 70,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    backgroundColor: "#000000",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 10,
  },
  loginText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "start",
    marginBottom: 10,
  },
});
