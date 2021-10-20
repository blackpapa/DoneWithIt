import * as React from "react";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { Image } from "react-native-expo-image-cache";

interface CardProps {
  imageUrl: any;
  thumbnailUrl: any;
  title: string;
  subTitle: number;
  onPress: any;
}

const Card: React.FC<CardProps> = ({
  title,
  subTitle,
  imageUrl,
  thumbnailUrl,
  onPress,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          preview={{ uri: thumbnailUrl }}
          tint="light"
          uri={imageUrl}
        ></Image>
        <View style={styles.detailsContainer}>
          <AppText numberOfLines={1} style={styles.title}>
            {title}
          </AppText>
          <AppText numberOfLines={1} style={styles.subTitle}>
            ${subTitle}
          </AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    overflow: "hidden",
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondaryColor,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
    fontWeight: "bold",
  },
});

export default Card;
