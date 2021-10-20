import apiClient from "./client";

const apiEndPoint = "/auth";

const auth = (email, password) =>
  apiClient.post(apiEndPoint, { email, password });

export default {
  auth,
};
