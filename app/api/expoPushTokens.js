import apiClient from "./client";

const apiEndPoint = "/expoPushTokens";

const register = (pushToken) => {
  apiClient.post(apiEndPoint, { token: pushToken });
};

export default {
  register,
};
