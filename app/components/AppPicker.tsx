import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Button,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import PickerItem from "./PickerItem";

interface AppPickerProps {
  items?: any[];
  icon?: any;
  placeholder?: string;
  selectedItem?: any;
  onSelectItem: (item: any) => void;
}

const AppPicker: React.FC<AppPickerProps> = ({
  items,
  icon,
  placeholder,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={20} />
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.button}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          )}
        ></FlatList>
      </Modal>
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
  button: {
    alignItems: "center",
  },
});

export default AppPicker;
