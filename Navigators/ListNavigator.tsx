import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListingScreen from "../app/screens/ListingScreen";
import ListingDetailsScreen from "../app/screens/ListingDetailsScreen";

interface ListNavigatorProps {}

export interface ListStackParamList {
  Listings: undefined;
  ListingDetails: any;
  [x: string]: object | undefined;
}

const Stack = createNativeStackNavigator();

const ListNavigator: React.FC<ListNavigatorProps> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        presentation: "modal",
      }}
    >
      <Stack.Screen name="Listings" component={ListingScreen} />
      <Stack.Screen
        name="ListingDetails"
        component={ListingDetailsScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ListNavigator;
