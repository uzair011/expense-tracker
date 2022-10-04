import { View, Text, StyleSheet } from "react-native";
import ExpenseOutput from "../components/expensesOutput/ExpensesOutput";

import colors from "../constants/Styles";

function RecentExpenses() {
  return <ExpenseOutput expensePeriod="Last 7 days" />;
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: colors.primary100,
  },
});
