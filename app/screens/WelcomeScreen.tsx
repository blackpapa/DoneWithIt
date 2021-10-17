import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AtuhStackParamList } from "../../navigation/AuthNavigator";

interface WelcomeScreenProps
  extends NativeStackScreenProps<AtuhStackParamList, "Welcome"> {}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <React.Fragment>
      <ImageBackground
        blurRadius={3}
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../assets/logo-red.png")}
          />
          <Text style={styles.tagline}>Sell what you don't need</Text>
        </View>
        <View style={styles.buttonsContainer}>
          <AppButton
            title="login"
            onPress={() => navigation.navigate("Login")}
          />
          <AppButton
            title="register"
            color="secondaryColor"
            onPress={() => navigation.navigate("Register")}
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

  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 15,
  },
});

export default WelcomeScreen;
