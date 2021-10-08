import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import AppText from "./AppText";

interface PickerItemProps {
  label: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const PickerItem: React.FC<PickerItemProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

export default PickerItem;
