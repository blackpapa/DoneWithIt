import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import color from "../config/color";

interface WindowScreenProps {}

const WindowScreen: React.FC<WindowScreenProps> = () => {
  return (
    <React.Fragment>
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <AppText>Sell what you don't need</AppText>
        </View>

        <AppButton title="login" />
        <View style={styles.registerButton}></View>
      </ImageBackground>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  logo: {
    width: 70,
    height: 70,
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
