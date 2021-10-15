import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./Navigators/TabNavigator";
import AuthNavigator from "./Navigators/AuthNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
