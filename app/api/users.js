import apiClient from "./client";

const apiEndPoint = "/users";

const register = (userInfo) => {
  apiClient.post(apiEndPoint, userInfo);
};

export default {
  register,
};
