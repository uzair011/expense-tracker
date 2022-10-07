import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

import ExpenseList from "./ExpensesList";
import ExpenseSummary from "./ExpensesSummary";

function ExpenseOutput({ expenses, expensePeriod }) {
  return (
    <View style={styles.container}>
      {/* <ExpenseSummary expenses={expenses} periodName={expensePeriod} /> */}
      <ExpenseSummary expenses={DUMMY_DATA} periodName={expensePeriod} />
      <ExpenseList expenses={DUMMY_DATA} />
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
});
