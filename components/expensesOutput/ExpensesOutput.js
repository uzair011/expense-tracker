import { View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

import ExpenseList from "./ExpensesList";
import ExpenseSummary from "./ExpensesSummary";

function ExpenseOutput({ expenses, expensePeriod, fallbackText }) {
  let content = <Text style={styles.infoText}>{fallbackText}</Text>;

  if (expenses.length > 0) {
    content = <ExpenseList expenses={expenses} />;
  }

  return (
    <View style={styles.container}>
      <ExpenseSummary expenses={expenses} periodName={expensePeriod} />
      {content}
    </View>
  );
}

export default ExpenseOutput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.primary100,
    paddingHorizontal: 8,
    paddingTop: 10,
    // paddingVertical: 6,
    flex: 1,
  },
  infoText: {
    color: "white",
    fontSize: 18,
    marginTop: 32,
    textAlign: "center",
  },
});
