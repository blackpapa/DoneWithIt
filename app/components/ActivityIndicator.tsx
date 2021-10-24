import React from "react";
import LottieView from "lottie-react-native";
import { View, StyleSheet } from "react-native";

interface ActivityIndicatorProps {
  visible: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <View style={styles.overlay}>
      <LottieView
        autoPlay
        loop
        source={require("../assets/animations/loader.json")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "white",
    opacity: 0.8,
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
});

export default ActivityIndicator;
