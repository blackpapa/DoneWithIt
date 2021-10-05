import React from "react";
import { Image, StyleSheet, View } from "react-native";
import color from "../config/color";

interface ViewImageScreenProps {}

const ViewImageScreen: React.FC<ViewImageScreenProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.black,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.primaryColor,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: color.secondaryColor,
    position: "absolute",
    top: 40,
    right: 30,
  },
});

export default ViewImageScreen;
