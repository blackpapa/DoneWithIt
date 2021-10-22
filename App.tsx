import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import { NavigationContainer } from "@react-navigation/native";

import TabNavigator from "./app/navigation/TabNavigator";
import navigationTheme from "./app/config/navigationTheme";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AuthContext from "./app/auth/context";
import AuthStorage from "./app/auth/storage";

export default function App() {
  const [user, setUser] = useState<object>();

  const restoreToken = async () => {
    const token = await AuthStorage.getToken();

    if (!token) return null;

    setUser(jwtDecode(token));
  };

  useEffect(() => {
    restoreToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <TabNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
