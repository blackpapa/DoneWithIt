import React from "react";
import { View } from "react-native";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";

export default function App() {
  return (
    <Screen>
      <ListItem title={"Andy"} IconComponent={<Icon name="email" />} />
    </Screen>
  );
}
