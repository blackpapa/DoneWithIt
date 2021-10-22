import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./app/navigation/TabNavigator";
import navigationTheme from "./app/config/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";
import AppLoading from "expo-app-loading";

export default function App() {
  const [user, setUser] = useState<object>();
  const [isReady, setIsReady] = useState<boolean>(false);

  const restoreToken = async () => {
    const user: any = await AuthStorage.getUser();

    if (!user) return;

    setUser(user);
  };

  if (!isReady)
    return (
      <AppLoading
        startAsync={restoreToken}
        onError={console.log}
        onFinish={() => setIsReady(true)}
      />
    );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
