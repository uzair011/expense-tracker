import { useState } from "react";
import { View, Text, Alert, StyleSheet } from "react-native";

import Input from "./Input";
import Button from "../ui/Button";
import { getFormattedDate } from "../../utils/Date";
import { GlobalStyles } from "../../constants/Styles";

function ExpenseForm({ onCancel, onSubmit, submitButtonLabel, defaultValues }) {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount.toString() : "",
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues.date) : "",
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : "",
      isValid: true,
    },
  });

  function inputChangedHandler(inputIdentifier, enterdValue) {
    setInputs((currentInputs) => {
      return {
        ...currentInputs,
        [inputIdentifier]: { value: enterdValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const isAmountValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const isDateValid = expenseData.date.toString() !== "Invalid Date";
    const isDescriptionValid = expenseData.description.trim().length > 0;

    if (isAmountValid && isDateValid && isDescriptionValid) {
      onSubmit(expenseData);
    } else {
      // Alert.alert("Invalid input", "Please check your input values.");
      setInputs((currentInputs) => {
        return {
          amount: { value: currentInputs.amount.value, isValid: isAmountValid },
          date: { value: currentInputs.date.value, isValid: isDateValid },
          description: {
            value: currentInputs.description.value,
            isValid: isDescriptionValid,
          },
        };
      });
    }
  }

  const isFormInvalid =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.overall}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.innerContainer}>
        <Input
          style={styles.inputRow}
          label="Amount"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangedHandler.bind(this, "amount"),
            value: inputs.amount.value,
          }}
          invalid={!inputs.amount.isValid}
        />
        <Input
          style={styles.inputRow}
          label="Date"
          textInputConfig={{
            placeholder: "YYYY-MM-DD",
            maxLength: 10,
            onChangeText: inputChangedHandler.bind(this, "date"),
            value: inputs.date.value,
          }}
          invalid={!inputs.date.isValid}
        />
      </View>
      <Input
        label="Description"
        textInputConfig={{
          multiline: true,
          // autoCapitalize: "none",
          // autoCorrect: false
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputs.description.value,
        }}
        invalid={!inputs.description.isValid}
      />
      {isFormInvalid && (
        <Text style={styles.errorStyle}>
          Invalid input data. Please check your input data
        </Text>
      )}
      <View style={styles.buttonsContainer}>
        <Button mode="flat" onPress={onCancel} style={styles.SingleButtonStyle}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.SingleButtonStyle}>
          {/* {isEditing ? "Update" : "Add"} */}
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
}

export default ExpenseForm;

const styles = StyleSheet.create({
  overall: { marginTop: 40 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginVertical: 20,
    textAlign: "center",
  },
  innerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputRow: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  SingleButtonStyle: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  errorStyle: {
    color: GlobalStyles.colors.error900,
    margin: 8,
    textAlign: "center",
  },
});
