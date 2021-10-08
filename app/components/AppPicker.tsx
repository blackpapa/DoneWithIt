import React, { useState } from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

interface AppPickerProps {
  icon?: any;
}

const AppPicker: React.FC<AppPickerProps> = ({ icon }) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  return (
    <React.Fragment>
      <View style={styles.container}>
        <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
        <AppText style={styles.text}>Catergory</AppText>
        <MaterialCommunityIcons name="chevron-down" size={20} />
      </View>
      <Modal visible={modalVisible}></Modal>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    padding: 15,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
