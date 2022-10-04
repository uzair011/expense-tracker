import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function ExpenseSummary({ expenses, periodName }) {
  const allExpensesSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.period}>{periodName}</Text>
      <Text style={styles.sum}>Total: $ {allExpensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpenseSummary;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: GlobalStyles.colors.primary200,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  period: {
    fontSize: 12,
    color: GlobalStyles.colors.accent100,
  },
  sum: {
    fontSize: 18,
    fontWeight: "bold",
    color: GlobalStyles.colors.accent100,
  },
});
