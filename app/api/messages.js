import apiClient from "./client";

const apiEndPoint = "/messages";

const sendMessage = (message) => apiClient.post(apiEndPoint, message);

export default {
  sendMessage,
};
