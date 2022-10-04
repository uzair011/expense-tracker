import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

import RecentExpenses from "./screens/RecentExpenses";
import AllExpenses from "./screens/AllExpenses";

import ManageExpenses from "./screens/ManageExpenses";
import { GlobalStyles } from "./constants/Styles";

const bottomTabs = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function ExpenseOverview() {
  return (
    <bottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalStyles.colors.primary900 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary900 },
        tabBarActiveTintColor: GlobalStyles.colors.accent900,
      }}
    >
      <bottomTabs.Screen
        name="Recent Expenses"
        component={RecentExpenses}
        options={{
          title: "Recent Expenses",
          tabBarLabel: "Recent",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <bottomTabs.Screen
        name="All Expenses"
        component={AllExpenses}
        options={{
          title: "All Expenses",
          tabBarLabel: "All",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
    </bottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Expenses Overview"
            component={ExpenseOverview}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Manage Expenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
