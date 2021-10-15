import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Navigators/TabNavigator";
import AuthNavigator from "./Navigators/AuthNavigator";
import navigationTheme from "./app/config/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthNavigator />
    </NavigationContainer>
  );
}
