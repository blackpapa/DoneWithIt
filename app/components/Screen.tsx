import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import Constants from "expo-constants";
import colors from "../config/colors";

interface ScreenProps {
  style: object;
}

const Screen: React.FC<ScreenProps> = ({ children, style }) => {
  return <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default Screen;
