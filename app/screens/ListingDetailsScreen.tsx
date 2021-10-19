import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../navigation/ListNavigator";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";

interface ListingDetailsScreenProps
  extends NativeStackScreenProps<ListStackParamList, "ListingDetails"> {}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  const item: any = route.params;
  return (
    <Screen style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={{ uri: item.images[0].url }}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>{item.price}</AppText>
        <View style={{ paddingTop: 20 }}>
          <ListItem
            image={require("../assets/Andy.jpg")}
            title={"Rogan Chen"}
            subTitle={"5 listing items"}
            style={{ padding: 0 }}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondaryColor,
  },
});

export default ListingDetailsScreen;
