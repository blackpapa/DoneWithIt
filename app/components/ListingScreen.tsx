import * as React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Card from "./Card";
import Screen from "./Screen";

interface ListingScreenProps {}

const cards = [
  {
    id: 1,
    title: "Person 5 Royal",
    subTitle: "$100",
    image: require("../assets/persona_5_royal.jpeg"),
  },
  {
    id: 2,
    title: "chair",
    subTitle: "$50",
    image: require("../assets/couch.jpg"),
  },
];

const ListingScreen: React.FC<ListingScreenProps> = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            subTitle={item.subTitle}
          />
        )}
      ></FlatList>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

export default ListingScreen;
