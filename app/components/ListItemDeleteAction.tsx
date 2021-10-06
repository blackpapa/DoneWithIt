import * as React from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface ListItemDeleteActionProps {}

const ListItemDeleteAction: React.FC<ListItemDeleteActionProps> = () => {
  return (
    <View style={styles.deleteAction}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        color={colors.white}
        size={35}
      />
    </View>
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
