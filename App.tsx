import React from "react";
import { View } from "react-native";
import AppButton from "./app/components/AppButton";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WindowScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 30,
        flex: 1,
      }}
    >
      <Card
        title={"Person 5 Royal"}
        subTitle={"$100"}
        image={require("./app/assets/persona_5_royal.jpeg")}
      />
    </View>
  );
}
