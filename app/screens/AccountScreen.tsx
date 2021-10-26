import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeperator from "../components/lists/ListItemSeperator";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AccountStackParamList } from "../navigation/AccountNavigator";
import useAuth from "./../hooks/useAuth";

interface AccountScreenProps
  extends NativeStackScreenProps<AccountStackParamList, "Accounts"> {}

const menuItems = [
  {
    title: "My Listing",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primaryColor,
    },
    targetScreen: "",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondaryColor,
    },
    targetScreen: "Messages",
  },
];

const AccountScreen: React.FC<AccountScreenProps> = ({ navigation }) => {
  const { user, logout } = useAuth();

  return (
    <Screen style={styles.screen}>
      <ListItem
        title={user.name}
        subTitle={user.email}
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
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeperator}
        ></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
          onPress={() => logout()}
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
