import { View, Text, TextInput, StyleSheet } from "react-native";

function Input({ label, textInputConfig }) {
  return (
    <View>
      <Text>{label}</Text>
      <TextInput {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({});
