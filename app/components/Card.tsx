import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface CardProps {
  image: any;
  title: string;
  subTitle: string;
}

const Card: React.FC<CardProps> = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <AppText numberOfLines={1} style={styles.title}>
          {title}
        </AppText>
        <AppText numberOfLines={1} style={styles.subTitle}>
          {subTitle}
        </AppText>
      </View>
    </View>
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
