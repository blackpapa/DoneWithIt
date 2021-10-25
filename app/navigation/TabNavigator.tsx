import React, { useEffect } from "react";
import * as Permission from "expo-permissions";
import * as Notifications from "expo-notifications";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ListingEditScreen from "../screens/ListingEditScreen";
import ListNavigator from "./ListNavigator";
import AccountNavigator from "./AccountNavigator";
import ListingEditButton from "./ListingEditButton";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavigatorProps> = () => {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const granted = await Permission.askAsync(Permission.NOTIFICATIONS);
      if (!granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      console.log(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };

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
