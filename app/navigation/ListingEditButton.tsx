import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

interface ListingEditButtonProps {}

const ListingEditButton: React.FC<ListingEditButtonProps> = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="plus-circle"
        size={40}
        color={colors.white}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryColor,
    borderRadius: 40,
    width: 70,
    height: 70,
    bottom: 10,
    borderColor: colors.white,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListingEditButton;
