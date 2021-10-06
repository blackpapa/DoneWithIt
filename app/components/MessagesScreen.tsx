import * as React from "react";
import { FlatList } from "react-native";
import ListItem from "./ListItem";

interface MessagesScreenProps {}

const messages = [
  {
    id: 1,
    title: "Andy",
    subTitle: "subtitle",
    image: require("../assets/Andy.jpg"),
  },
  {
    id: 2,
    title: "Rogan",
    subTitle: "subtitle",
    image: require("../assets/Andy.jpg"),
  },
];

const MessagesScreen: React.FC<MessagesScreenProps> = () => {
  return (
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
    />
  );
};

export default MessagesScreen;
