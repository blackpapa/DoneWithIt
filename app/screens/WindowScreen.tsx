import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

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
        <View style={styles.buttonsContainer}>
          <AppButton title="login" onPress={() => console.log("title")} />
          <AppButton
            title="register"
            color="secondaryColor"
            onPress={() => console.log("register")}
          />
        </View>
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

  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WindowScreen;
