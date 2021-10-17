import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../app/screens/LoginScreen";
import RegisterScreen from "../app/screens/RegisterScreen";
import WelcomeScreen from "../app/screens/WelcomeScreen";

interface AuthNavigatorProps {}

export interface AtuhStackParamList {
  Welcome: undefined;
  Login: undefined;
  Register: undefined;
  [x: string]: object | undefined;
}

const Stack = createNativeStackNavigator();

const AuthNavigator: React.FC<AuthNavigatorProps> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
