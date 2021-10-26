import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";
import logger from "./logger";

const prefix = "cache";
const expiryInMinutes = 5;

//Store item
const store = async (key: any, value: any) => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };

    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (error) {
    logger.log(error);
  }
};

//Determine if it is expiry
const isExpired = (item: any) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, "minutes") > expiryInMinutes;
};

//Get item
const get = async (key: any) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = value? JSON.parse(value) : null;

    if (!item) return null;

    if (isExpired(item)) {
      AsyncStorage.removeItem(prefix + key);
      return null;
    }

    return item.value;
  } catch (error) {
    logger.log(error);
  }
};

export default {
  store,
  get,
};
