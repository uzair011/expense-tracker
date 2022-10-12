import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import Button from "./Button";

function ErrorOverlay({ message, onConfirm }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.text]}>An error occurred.</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onConfirm}>Okay</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary200,
  },
  text: {
    color: "white",
    marginBottom: 10,
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ErrorOverlay;
