import React from "react";
import * as Yup from "yup";
import * as Notifications from "expo-notifications";
import { View, StyleSheet, Keyboard } from "react-native";

import { AppForm, SubmitButton, AppFormField } from "./forms";
import messagesApi from "../api/messages";

interface ContactSellerFormProps {
  item: any;
}

const ContactSellerForm: React.FC<ContactSellerFormProps> = ({ item }) => {
  const validationSchema = Yup.object().shape({
    message: Yup.string().min(2).required().label("Message"),
  });

  const handleSubmit = async (values: any, resetForm: any) => {
    Keyboard.dismiss();

    const content = {
      title: "Awesome!",
      body: "You message was sent to the seller.",
    };

    const response = await messagesApi.sendMessage(values.message, item.id);

    if (!response.ok) {
      console.log("Error", response);
      return alert("Error in sending message!");
    }

    Notifications.scheduleNotificationAsync({ content, trigger: null });

    resetForm();
  };
  return (
    <AppForm
      initialValues={{ message: "" }}
      onSubmit={(values: any, { resetForm }: any) =>
        handleSubmit(values, resetForm)
      }
      validationSchema={validationSchema}
    >
      <View style={styles.contactForm}>
        <AppFormField name="message" placeholder="Message..." />
        <SubmitButton title="Contact Seller" />
      </View>
    </AppForm>
  );
};

const styles = StyleSheet.create({
  container: {},
  contactForm: {
    paddingHorizontal: 15,
  },
});

export default ContactSellerForm;
