import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../navigation/ListNavigator";
import { Image } from "react-native-expo-image-cache";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import ContactSellerForm from "../components/ContactSellerForm";

interface ListingDetailsScreenProps
  extends NativeStackScreenProps<ListStackParamList, "ListingDetails"> {}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  const item: any = route.params;

  return (
    <KeyboardAvoidingView
      behavior="position"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
    >
      <Image
        uri={item.images[0].url}
        preview={{ uri: item.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>${item.price}</AppText>
      </View>
      <View style={{ padding: 20, marginVertical: 10 }}>
        <ListItem
          image={require("../assets/Andy.jpg")}
          title={"Rogan Chen"}
          subTitle={"5 listing items"}
          style={{ padding: 0 }}
        />
      </View>
      <ContactSellerForm item={item} />
    </KeyboardAvoidingView>
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
