import { useContext, useLayoutEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/Styles";
import { ExepnsesContext } from "../store/Expenses-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { StoreExpense, updateExpense, deleteExpense } from "../utils/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

function ManageExpenses({ route, navigation }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setIsError] = useState();

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

  async function deleteExpenseHandler() {
    // *
    setIsSubmitting(true);
    // setIsError(true); //===================

    try {
      await deleteExpense(editedExpenseId); // sending delete request to the backend - firebase
      //  setIsSubmitting(false);  // because we are closing the screen by going back
      expensesCtx.deleteExpense(editedExpenseId); // deleting localy
      navigation.goBack();
    } catch (error) {
      error("An error occoured while deleting...");
      setIsSubmitting(false);
    }
  }

  function cancelButtonHandler() {
    navigation.goBack();
  }

  async function confirmButtonHandler(expenseData) {
    setIsSubmitting(true);
    try {
      if (isEditing) {
        await updateExpense(editedExpenseId, expenseData); // sending update request to the backend - firebase
        expensesCtx.updateExpense(editedExpenseId, expenseData); // updating localy
      } else {
        // getting the Id form the firebase
        const id = await StoreExpense(expenseData);
        expensesCtx.addExpense({ ...expenseData, id: id });
      }

      navigation.goBack();
    } catch (error) {
      setIsError("Could not save data. Please try again later.");
      setIsSubmitting(false);
    }
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  function deleteErrorHandler() {
    setIsError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={deleteErrorHandler} />;
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
