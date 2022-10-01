import { View, Text, StyleSheet } from "react-native";

import colors from "../constants/Styles";

function ManageExpenses() {
  return (
    <View>
      <Text>This is Manage expenses screen.</Text>
    </View>
  );
}

export default ManageExpenses;

const styles = StyleSheet.create({
  rootContainer: {
    // backgroundColor: colors.primary100,
  },
});
