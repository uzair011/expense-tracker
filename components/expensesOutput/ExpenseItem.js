import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function ExpenseItem({ description, amount, date }) {
  <Pressable>
    <View style={styles.expenseItemStyle}>
      <View>
        <Text style={[styles.textBase, styles.descriptionStyle]}>
          {description}
        </Text>
        <Text style={styles.textBase}>{date.toString()}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>{amount}</Text>
      </View>
    </View>
  </Pressable>;
}

const styles = StyleSheet.create({
  expenseItemStyle: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.accent100,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 6,
    elevation: 4,
    shadowColor: GlobalStyles.colors.primary200,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  textBase: {
    color: GlobalStyles.colors.accent200,
  },
  descriptionStyle: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bald",
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
  amount: {
    color: GlobalStyles.colors.primary900,
    fontWeight: "bold",
  },
});

export default ExpenseItem;
