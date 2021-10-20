import React from "react";
import Constants from "expo-constants";
import { View, StyleSheet } from "react-native";

import colors from "../config/colors";
import AppText from "./AppText";

interface OfflineNoticeProps {}

const OfflineNotice: React.FC<OfflineNoticeProps> = () => {
  return (
    <View style={styles.container}>
      <AppText style={styles.text}>No Internet Connect</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    height: 50,
    width: "100%",
    marginTop: Constants.statusBarHeight,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default OfflineNotice;
