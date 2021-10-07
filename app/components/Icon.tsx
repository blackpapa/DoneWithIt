import * as React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View } from "react-native";
import colors from "../config/colors";

interface IconProps {
  name: any;
  size?: number;
  backgroundColor?: string;
  iconColor?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 40,
  backgroundColor = colors.black,
  iconColor = colors.white,
}) => {
  return (
    <View
      style={{
        backgroundColor,
        width: size,
        height: size,
        borderRadius: size / 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size / 2} color={iconColor} />
    </View>
  );
};

export default Icon;
