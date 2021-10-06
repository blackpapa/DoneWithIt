import * as React from "react";
import { FlatList, View } from "react-native";
import colors from "../config/colors";
import ListItem from "./ListItem";
import ListItemSeperator from "./ListItemSeperator";
import Screen from "./Screen";
import ListItemDeleteAction from "./ListItemDeleteAction";

interface MessagesScreenProps {}

const messages = [
  {
    id: 1,
    title: "Andy",
    subTitle: "gentlemen",
    image: require("../assets/Andy.jpg"),
  },
  {
    id: 2,
    title: "Rogan",
    subTitle: "gentlemen",
    image: require("../assets/Andy.jpg"),
  },
];

const MessagesScreen: React.FC<MessagesScreenProps> = () => {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={ListItemDeleteAction}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
};

export default MessagesScreen;
