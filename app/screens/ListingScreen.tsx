import * as React from "react";
import { FlatList, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../../navigation/ListNavigator";

import Card from "../components/Card";
import Screen from "../components/Screen";

interface ListingScreenProps
  extends NativeStackScreenProps<ListStackParamList, "Listings"> {}

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

const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
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
            onPress={() => navigation.navigate("ListingDetails", item)}
          />
        )}
      ></FlatList>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 15,
  },
});

export default ListingScreen;
