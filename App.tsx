import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/components/ListingDetailsScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WindowScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <ListingDetailsScreen
      title={"Person 5 Royal"}
      subTitle={"$100"}
      image={require("./app/assets/persona_5_royal.jpeg")}
    />
  );
}
