import * as React from "react";
import { GestureResponderEvent, View } from "react-native";
import AppText from "./AppText";
import Icon from "./Icon";

interface CategoryPickerItemProps {
  label?: string;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const CategoryPickerItem: React.FC<CategoryPickerItemProps> = ({
  label,
  onPress,
}) => {
  return (
    <View>
      <Icon name="apps" />
      <AppText>{label}</AppText>
    </View>
  );
};

export default CategoryPickerItem;
