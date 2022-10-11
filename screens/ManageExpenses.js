import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/Styles";
import { ExepnsesContext } from "../store/Expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { StoreExpense } from "../utils/http";

function ManageExpenses({ route, navigation }) {
  const expensesCtx = useContext(ExepnsesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  const selectedExpenseId = expensesCtx.expenses.find(
    (expense) => expense.id === editedExpenseId
  );

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {
    navigation.goBack();
    expensesCtx.deleteExpense(editedExpenseId);
  }

  function cancelButtonHandler() {
    navigation.goBack();
  }

  function confirmButtonHandler(expenseData) {
    navigation.goBack();

    if (isEditing) {
      expensesCtx.updateExpense(editedExpenseId, expenseData);
    } else {
      StoreExpense(expenseData);
      expensesCtx.addExpense(expenseData);
    }
  }

  return (
    <View style={styles.mainContainer}>
      <ExpenseForm
        onCancel={cancelButtonHandler}
        onSubmit={confirmButtonHandler}
        submitButtonLabel={isEditing ? "Update" : "Add"}
        defaultValues={selectedExpenseId}
      />

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
});
