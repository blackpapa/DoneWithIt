import React from "react";
import { View } from "react-native";
import AccountScreen from "./app/components/AccountScreen";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingScreen from "./app/components/ListingScreen";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}
