import Snackbar from "react-native-snackbar";

export const validateCardInfo = (cardNumber, securityCode, cardholderName) => {

  if (cardNumber.length !== 16) {
    Snackbar.show({
      text: "El número de tarjeta debe tener 16 dígitos",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }


  if (securityCode.length !== 3) {
    Snackbar.show({
      text: "El código de seguridad debe tener 3 dígitos",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }

  if (cardholderName.length < 4 || cardholderName.length > 50) {
    Snackbar.show({
      text: "El nombre del titular debe tener entre 4 y 50 caracteres",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }

  return true;
};
