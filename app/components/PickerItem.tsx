import * as React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
} from "react-native";
import { Item } from "./AppPicker";
import AppText from "./AppText";

interface PickerItemProps {
  item: Item;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const PickerItem: React.FC<PickerItemProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 10,
  },
});

export default PickerItem;
