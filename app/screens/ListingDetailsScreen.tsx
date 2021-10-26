import * as React from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ListStackParamList } from "../navigation/ListNavigator";
import { Image } from "react-native-expo-image-cache";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";

import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import AppForm from "./../components/forms/AppForm";
import AppFormFiled from "../components/forms/AppFormField";
import messagesApi from "../api/messages";
import { SubmitButton } from "../components/forms";

interface ListingDetailsScreenProps
  extends NativeStackScreenProps<ListStackParamList, "ListingDetails"> {}

const ListingDetailsScreen: React.FC<ListingDetailsScreenProps> = ({
  route,
}) => {
  const item: any = route.params;

  const validationSchema = Yup.object().shape({
    listingId: Yup.number().required(),
    message: Yup.string().min(2).required().label("Message"),
  });

  const handleSubmit = async (values: any, resetForm: any) => {
    const content = { title: values.message };

    const response = await messagesApi.sendMessage(values);
    if (!response.ok) return alert("Error in sending message!");

    Notifications.scheduleNotificationAsync({ content, trigger: null });

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <Image
        uri={item.images[0].url}
        preview={{ uri: item.images[0].thumbnailUrl }}
        tint="light"
        style={styles.image}
      />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{item.title}</AppText>
        <AppText style={styles.subTitle}>${item.price}</AppText>
      </View>
      <View style={{ padding: 20, marginVertical: 10 }}>
        <ListItem
          image={require("../assets/Andy.jpg")}
          title={"Rogan Chen"}
          subTitle={"5 listing items"}
          style={{ padding: 0 }}
        />
      </View>
      <AppForm
        initialValues={{ listingId: item.id, message: "" }}
        onSubmit={(values: any, { resetForm }: any) =>
          handleSubmit(values, resetForm)
        }
        validationSchema={validationSchema}
      >
        <KeyboardAvoidingView
          behavior="position"
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100}
          style={styles.contactForm}
        >
          <AppFormFiled name="message" placeholder="Message..." />
          <SubmitButton title="Contact Seller" />
        </KeyboardAvoidingView>
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
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
  contactForm: {
    paddingHorizontal: 15,
  },
});

export default ListingDetailsScreen;
