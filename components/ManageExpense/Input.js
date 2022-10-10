import { View, Text, TextInput, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function Input({ label, textInputConfig, style, invalid }) {
  let inputStyle = [styles.input];

  if (textInputConfig && textInputConfig.multiline) {
    inputStyle.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyle.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyle} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 6,
    marginVertical: 6,
  },
  label: {
    fontSize: 14,
    color: GlobalStyles.colors.accent900,
    marginBottom: 3,
  },
  input: {
    color: GlobalStyles.colors.accent900,
    backgroundColor: GlobalStyles.colors.accent100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    marginBottom: 10,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyles.colors.error900,
  },
  invalidInput: {
    backgroundColor: GlobalStyles.colors.error100,
  },
});
