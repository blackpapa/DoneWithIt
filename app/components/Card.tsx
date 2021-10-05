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
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.subTitle}>{subTitle}</AppText>
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
  image: {
    width: "100%",
    height: 200,
    marginBottom: 5,
  },
  subTitle: {
    color: colors.secondaryColor,
    fontWeight: "bold",
    marginBottom: 5,
    marginLeft: 5,
  },
  title: {
    marginBottom: 5,
    marginLeft: 5,
    fontWeight: "bold",
  },
});

export default Card;
