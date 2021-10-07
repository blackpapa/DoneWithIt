import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "./ListItem";
import Screen from "./Screen";
import colors from "../config/colors";
import Icon from "./Icon";
import ListItemSeperator from "./ListItemSeperator";

interface AccountScreenProps {}

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryColor,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondaryColor,
    },
  },
];

const AccountScreen: React.FC<AccountScreenProps> = () => {
  return (
    <Screen style={styles.screen}>
      <ListItem
        title="Andy"
        subTitle="andyAdmin@gmail.com"
        image={require("../assets/Andy.jpg")}
        style={{ backgroundColor: colors.white }}
      />
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        ></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: colors.white,
  },
});

export default AccountScreen;
