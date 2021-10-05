import * as React from "react";
import { Platform, StyleSheet, Text } from "react-native";

interface AppTextProps {
  style?: object;
}

const AppText: React.FC<AppTextProps> = ({ children, style }) => {
  return <Text style={[styles.font, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  font: {
    fontSize: 15,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
