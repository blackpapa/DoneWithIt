import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import color from "../config/color";

interface WindowScreenProps {}

const WindowScreen: React.FC<WindowScreenProps> = () => {
  return (
    <React.Fragment>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.primaryColor,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: color.secondaryColor,
  },
});

export default WindowScreen;
