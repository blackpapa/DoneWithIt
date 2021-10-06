import * as React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface ListItemDeleteActionProps {
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

const ListItemDeleteAction: React.FC<ListItemDeleteActionProps> = ({
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.deleteAction}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color={colors.white}
          size={35}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  deleteAction: {
    width: 70,
    backgroundColor: colors.danger,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
