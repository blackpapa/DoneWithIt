import * as React from "react";
import {
  GestureResponderEvent,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Item } from "./AppPicker";
import AppText from "./AppText";
import Icon from "./Icon";

interface CategoryPickerItemProps {
  item: Item;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CategoryPickerItem: React.FC<CategoryPickerItemProps> = ({
  item,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={item.iconName} backgroundColor={item.iconColor} size={60} />
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 15,
    alignItems: "center",
  },
  label: {
    marginTop: 7,
    textAlign: "center",
  },
});

export default CategoryPickerItem;
