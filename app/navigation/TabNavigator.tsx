import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListNavigator from "./ListNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditButton from "./ListingEditButton";
import useNotifications from "../hooks/useNotifications";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavigatorProps> = () => {
  useNotifications();

  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "tomato" }}
    >
      <Tab.Screen
        name="Feed"
        component={ListNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Edit"
        component={ListingEditScreen}
        options={{ tabBarIcon: () => <ListingEditButton /> }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
