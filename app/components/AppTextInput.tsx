import * as React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";

interface AppTextInputProps {
  placeholder?: string;
  icon?: any;
}

const AppTextInput: React.FC<AppTextInputProps> = ({ icon, placeholder }) => {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
      )}
      <TextInput style={defaultStyles.text} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;