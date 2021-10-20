import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./app/navigation/TabNavigator";
import navigationTheme from "./app/config/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <OfflineNotice />
      <TabNavigator />
    </NavigationContainer>
  );
}
