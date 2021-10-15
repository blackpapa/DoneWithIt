import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../app/screens/ListingScreen";
import ListingDetailsScreen from "../app/screens/ListingDetailsScreen";

interface ListNavigatorProps {}

export interface ListStackParamList {
  Listing: undefined;
  ListingDetails: undefined;
  [x: string]: object | undefined;
}

const Stack = createNativeStackNavigator();

const ListNavigator: React.FC<ListNavigatorProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Listing" component={ListingScreen} />
      <Stack.Screen name="ListingDetails" component={ListingDetailsScreen} />
    </Stack.Navigator>
  );
};

export default ListNavigator;
