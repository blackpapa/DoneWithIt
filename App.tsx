import React, { useState } from "react";
import { View } from "react-native";
import AccountScreen from "./app/components/AccountScreen";
import AppPicker from "./app/components/AppPicker";
import AppTextInput from "./app/components/AppTextInput";
import Card from "./app/components/Card";
import Icon from "./app/components/Icon";
import ListingScreen from "./app/components/ListingScreen";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";

const categories = [
  {
    label: "Furniture",
    id: 1,
  },
  {
    label: "Clothing",
    id: 2,
  },
  {
    label: "Game",
    id: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState();

  return (
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon="apps"
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}
