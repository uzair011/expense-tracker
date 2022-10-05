import { useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import { IconButton } from "../components/ui/IconButton";
import { GlobalStyles } from "../constants/Styles";

function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense",
    });
  }, [navigation, isEditing]);

  function deleteExpenseHandler() {}

  return (
    <View>
      {isEditing && (
        <IconButton
          icon="trash"
          color={GlobalStyles.colors.error900}
          size={30}
          onPress={deleteExpenseHandler}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: colors.primary100,
  },
});

export default ManageExpenses;
