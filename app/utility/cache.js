import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache";

const store = async (key, value) => {
  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};
