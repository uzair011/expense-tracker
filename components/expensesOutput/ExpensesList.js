import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function expenseRenderItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

function ExpenseList({ expenses }) {
  return (
    <FlatList
      data={expenses}
      renderItem={expenseRenderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ExpenseList;
