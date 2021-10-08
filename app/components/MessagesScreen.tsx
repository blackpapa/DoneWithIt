import React, { useState } from "react";
import { FlatList, View } from "react-native";

import ListItem from "./ListItem";
import ListItemSeperator from "./ListItemSeperator";
import Screen from "./Screen";
import ListItemDeleteAction from "./ListItemDeleteAction";

interface MessagesScreenProps {}

interface Message {
  id: number;
  title: string;
  subTitle: string;
  image: any;
}

const initialMessages = [
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
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const handleDelete = (message: Message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };

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
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeperator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "Rogan",
              subTitle: "gentlemen",
              image: require("../assets/Andy.jpg"),
            },
          ])
        }
      />
    </Screen>
  );
};

export default MessagesScreen;