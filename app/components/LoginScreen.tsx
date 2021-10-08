import * as React from "react";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import Screen from "./Screen";
import { Image, StyleSheet } from "react-native";

interface LoginScreenProps {}

const LoginScreen: React.FC<LoginScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.image}
        source={require("./app/assets/logo-red.png")}
      />
      <AppTextInput icon="email" placeholder="Username" />
      <AppTextInput icon="lock" placeholder="Password" />
      <AppButton title="Login" />
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    paddingTop: 80,
  },
  image: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default LoginScreen;
