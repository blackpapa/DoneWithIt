import * as React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import color from "../config/color";

interface AppButtonProps {
  title: string;
}

const AppButton: React.FC<AppButtonProps> = ({ title }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    backgroundColor: color.primaryColor,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  text: {
    color: color.white,
    fontWeight: "bold",
    fontSize: 18,
    textTransform: "uppercase",
  },
});

export default AppButton;
