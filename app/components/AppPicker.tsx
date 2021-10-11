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

export interface Item {
  label: string;
  value: number;
}

interface AppPickerProps {
  items?: Item[];
  icon?: any;
  placeholder?: string;
  width?: string;
  PickerItemComponent?: React.FC;
  selectedItem?: any;
  onSelectItem: (item: any) => void;
}

const AppPicker: React.FC<AppPickerProps> = ({
  items,
  icon,
  placeholder,
  width = "100%",
  PickerItemComponent = PickerItem,
  selectedItem,
  onSelectItem,
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons style={styles.icon} name={icon} size={20} />
          )}

          <AppText style={selectedItem ? styles.text : styles.placeholder}>
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
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            <PickerItemComponent
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
    marginVertical: 10,
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    color: colors.black,
    flex: 1,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
  },
});

export default AppPicker;
