import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../../navigation/ListNavigator";

import listingsApi from "../api/listings";
import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../../navigation/routes";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

interface ListingScreenProps
  extends NativeStackScreenProps<ListStackParamList, "Listings"> {}

const ListingScreen: React.FC<ListingScreenProps> = ({ navigation }) => {
  const [listings, setListings] = useState<any>([]);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadlistings();
  }, []);

  const loadlistings = async () => {
    const response = await listingsApi.getListings();
    setLoading(false);

    if (!response.ok) {
      setError(true);
      return;
    }

    setListings(response.data);
    setError(false);
  };

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
