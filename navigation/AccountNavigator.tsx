import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountScreen from "../app/screens/AccountScreen";
import MessagesScreen from "../app/screens/MessagesScreen";

interface AccountNavigatorProps {}

export interface AccountStackParamList {
  Accounts: undefined;
  Message: undefined;
  [x: string]: object | undefined;
}

const Stack = createNativeStackNavigator();

const AccountNavigator: React.FC<AccountNavigatorProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Stack.Screen name="Accounts" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Messages" component={MessagesScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default AccountNavigator;
