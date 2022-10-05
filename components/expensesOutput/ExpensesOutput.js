import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

import ExpenseList from "./ExpensesList";
import ExpenseSummary from "./ExpensesSummary";

const DUMMY_DATA = [
  {
    id: "e1",
    description: "A Nike shoe",
    amount: 130.001,
    date: new Date("2022-01-31"),
  },
  {
    id: "e2",
    description: "A Shirt",
    amount: 99.95,
    date: new Date("2022-01-31"),
  },
  {
    id: "e3",
    description: "A Polo Shirt",
    amount: 75.0,
    date: new Date("2020-02-21"),
  },
  {
    id: "e4",
    description: "A plane ticket",
    amount: 1199.9,
    date: new Date("2021-12-31"),
  },
  {
    id: "e5",
    description: "House rent",
    amount: 3500,
    date: new Date("2021-07-23"),
  },
  {
    id: "e6",
    description: "A Coffee",
    amount: 4.99,
    date: new Date("2022-06-12"),
  },
  {
    id: "e7",
    description: "A pair of sunglass",
    amount: 99.99,
    date: new Date("2022-08-09"),
  },
  {
    id: "e8",
    description: "A Nike shoe",
    amount: 130.001,
    date: new Date("2022-01-31"),
  },
  {
    id: "e9",
    description: "A Shirt",
    amount: 99.95,
    date: new Date("2022-01-31"),
  },
  {
    id: "e10",
    description: "A Polo Shirt",
    amount: 75.0,
    date: new Date("2020-02-21"),
  },
  {
    id: "e11",
    description: "A plane ticket",
    amount: 1199.9,
    date: new Date("2021-12-31"),
  },
  {
    id: "e12",
    description: "House rent",
    amount: 3500,
    date: new Date("2021-07-23"),
  },
];

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
