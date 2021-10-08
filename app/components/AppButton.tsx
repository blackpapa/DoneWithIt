import * as React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import colors from "../config/colors";

interface AppButtonProps {
  title: string;
  color?: string;
  onPress?: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<AppButtonProps> = ({
  title,
  color = "primaryColor",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: colors.primaryColor,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
