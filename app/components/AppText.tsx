import * as React from "react";
import { Platform, StyleSheet, Text } from "react-native";

interface AppTextProps {}

const AppText: React.FC<AppTextProps> = ({ children }) => {
  return <Text style={styles.font}>{children}</Text>;
};

const styles = StyleSheet.create({
  font: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
