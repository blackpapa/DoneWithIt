import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <Icon name="email" size={50} backgroundColor="red" />
    </Screen>
  );
}
