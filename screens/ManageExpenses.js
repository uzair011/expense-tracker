import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/ui/IconButton";
import Button from "../components/ui/Button";
import { GlobalStyles } from "../constants/Styles";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    console.log("Deleted");
  }

  function cancelButtonHandler() {}
  function confirmButtonHandler() {}

  return (
    <View style={styles.mainContainer}>
      <View style={styles.buttonsContainer}>
        <Button
          mode="flat"
          onPress={cancelButtonHandler}
          style={styles.SingleButtonStyle}
        >
          Cancel
        </Button>
        <Button onPress={confirmButtonHandler} style={styles.SingleButtonStyle}>
          {isEditing ? "Update" : "Add"}
        </Button>
      </View>
      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error900}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary100,
    padding: 24,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.accent100,
    alignItems: "center",
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
});
