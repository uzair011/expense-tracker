import { FlatList } from "react-native";

import ExpenseItem from "./ExpenseItem";

function expenseRenderItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
  // (
  //   <View>
  //     <Text>{itemData.item.description}</Text>
  //     <Text>{itemData.item.amount}</Text>
  //     {/* <Text>{itemData.item.date}</Text> */}
  //   </View>
  // );
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
