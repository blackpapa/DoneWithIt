import apiClient from "./client";

const apiEndPoint = "/messages";

const sendMessage = (message, listingId) =>
  apiClient.post(apiEndPoint, { message, listingId });

export default {
  sendMessage,
};
