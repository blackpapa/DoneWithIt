import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ListingEditScreen from "../app/screens/ListingEditScreen";
import AccountScreen from "../app/screens/AccountScreen";
import ListNavigator from "./ListNavigator";

interface TabNavigatorProps {}

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<TabNavigatorProps> = () => {
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
      <Tab.Screen name="Edit" component={ListingEditScreen} />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
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
