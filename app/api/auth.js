import apiClient from "./client";

const apiEndPoint = "/auth";

const login = (email, password) =>
  apiClient.post(apiEndPoint, { email, password });

export default {
  login,
};
