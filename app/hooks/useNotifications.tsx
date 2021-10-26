import React, { useEffect } from "react";
import * as Notifications from "expo-notifications";

import expoPushTokensApi from "../api/expoPushTokens";

const useNotifications = (notificationsListener?: any) => {
  useEffect(() => {
    registerForPushNotifications();

    const subscription = Notifications.addNotificationReceivedListener(
      notificationsListener
    );

    return () => subscription.remove();
  });

  const registerForPushNotifications = async () => {
    try {
      //Register the app to get the token
      const granted = Notifications.requestPermissionsAsync();
      if (!granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync();

      expoPushTokensApi.register(token);
    } catch (error) {
      console.log("Error getting a push token", error);
    }
  };
};

export default useNotifications;
