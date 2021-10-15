import * as React from "react";
import { Image, View, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../../Navigators/ListNavigator";

interface ListingDetailsScreenProps
  extends NativeStackScreenProps<ListStackParamList, "ListingDetails"> {
  title: string;
  subTitle: string;
  image: any;
}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  title,
  subTitle,
  image,
}) => {
  return (
    <View>
      <Image resizeMode="contain" style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
        <View style={{ paddingTop: 20 }}>
          <ListItem
            image={require("../assets/Andy.jpg")}
            title={"Rogan Chen"}
            subTitle={"5 listing items"}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
    paddingTop: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.secondaryColor,
  },
});

export default ListingDetailsScreen;
