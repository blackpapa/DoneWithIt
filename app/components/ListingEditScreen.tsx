import * as React from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import AppForm from "./form/AppForm";
import AppFormField from "./form/AppFormField";
import SubmitButton from "./form/SubmitButton";
import Screen from "./Screen";
import AppFormPicker from "./form/AppFormPicker";
import CategoryPickerItem from "./CategoryPickerItem";

interface ListEditScreenProps {}

const categories = [
  {
    label: "Furnishing",
    value: 1,
  },
  {
    label: "Clothing",
    value: 2,
  },
  {
    label: "Game",
    value: 3,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
});

const ListEditScreen: React.FC<ListEditScreenProps> = () => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
        }}
        onSubmit={(values: any) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField maxLength={255} name={"title"} placeholder="Title" />
        <AppFormField
          width="25%"
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          width="50%"
          name="category"
          items={categories}
          placeholder="Category"
        />
        <AppFormField
          maxLength={255}
          multiline={true}
          numberOfLines={3}
          name="description"
          placeholder="Description"
        />
        <SubmitButton title="post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ListEditScreen;
