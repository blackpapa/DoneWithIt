import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../navigation/ListNavigator";

import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";
import useApi from "../hooks/useApi";

interface ListingScreenProps
  extends NativeStackScreenProps<ListStackParamList, "Listings"> {}

const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const {
    data: listings,
    error,
    loading,
    request: loadlistings,
  } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadlistings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText style={{ fontSize: 20 }}>
            Please click the button to retry!
          </AppText>
          <AppButton title="Retry" onPress={() => loadlistings()} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            imageUrl={item.images[0].url}
            title={item.title}
            subTitle={item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
        refreshing={false}
        onRefresh={() => loadlistings()}
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
