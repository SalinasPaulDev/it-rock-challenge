import Snackbar from "react-native-snackbar";

export const validateDate = (expirationDate) => {
  if (expirationDate.length !== 10) {
    Snackbar.show({
      text: "La fecha de expiración debe tener el formato dd/mm/yyyy",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }

  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!dateRegex.test(expirationDate)) {
    Snackbar.show({
      text: "La fecha de expiración debe estar en formato dd/mm/yyyy",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }

  const [day, month, year] = expirationDate.split("/");
  const currentExpirationDate = new Date(year, month - 1, day);

  if (currentExpirationDate < new Date()) {
    Snackbar.show({
      text: "La fecha de expiración no puede ser anterior a la fecha actual",
      duration: Snackbar.LENGTH_LONG,
      textColor: "white",
      backgroundColor: "red",
    });
    return false;
  }

  return true;
};
