import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/Styles";

function RecentExpenses() {
  return (
    <View>
      <Text>This is Recent expenses screen.</Text>
    </View>
  );
}

export default RecentExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: colors.primary100,
  },
});
