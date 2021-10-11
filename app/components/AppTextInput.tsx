import * as React from "react";
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyles from "../config/defaultStyles";

export interface AppTextInputProps extends TextInputProps {
  placeholder?: string;
  icon?: any;
  autoCorrect?: boolean;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  textContentType?: any;
  width?: string;
  secureTextEntry?: boolean | undefined;
  onChangeText?: ((text: string) => void) | undefined;
  onBlur?:
    | ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void)
    | undefined;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  icon,
  placeholder,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  textContentType,
  secureTextEntry,
  onChangeText,
  onBlur,
  width = "100%",
  ...rest
}) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
      )}
      <TextInput
        style={defaultStyles.text}
        placeholder={placeholder}
        placeholderTextColor={colors.medium}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        onBlur={onBlur}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
