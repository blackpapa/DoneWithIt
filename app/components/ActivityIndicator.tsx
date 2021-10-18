import React from "react";
import LottieView from "lottie-react-native";

interface ActivityIndicatorProps {
  visible: boolean;
}

const ActivityIndicator: React.FC<ActivityIndicatorProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <LottieView
      autoPlay
      loop
      source={require("../assets/animations/loader.json")}
    />
  );
};

export default ActivityIndicator;
