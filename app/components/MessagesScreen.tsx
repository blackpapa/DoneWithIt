import * as React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";
import ListItemSeperator from "./ListItemSeperator";
import Screen from "./Screen";

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
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
      />
    </Screen>
  );
};

export default MessagesScreen;
