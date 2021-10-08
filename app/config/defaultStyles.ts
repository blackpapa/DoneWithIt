import { Platform } from "react-native";
import colors from "./colors";

const defaultStyles = {
    text: {
        color: colors.dark,
        fontSize: 15,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
      }
}

export default defaultStyles