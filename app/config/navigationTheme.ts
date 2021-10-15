import {DefaultTheme} from "@react-navigation/native"
import colors from "./colors"

export default {
    ...DefaultTheme,
    colors : {
        ...DefaultTheme.colors,
        text: colors.primaryColor,
        background: colors.white,
    }
}