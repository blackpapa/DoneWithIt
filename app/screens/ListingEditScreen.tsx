import React, { useState } from "react";
import * as Yup from "yup";
import { StyleSheet } from "react-native";

import listingsApi from "../api/listings";
import AppForm from "../components/forms/AppForm";
import AppFormField from "../components/forms/AppFormField";
import SubmitButton from "../components/forms/SubmitButton";
import Screen from "../components/Screen";
import AppFormPicker from "../components/forms/AppFormPicker";
import CategoryPickerItem from "../components/CategoryPickerItem";
import colors from "../config/colors";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "./../../hooks/useLocation";
import UploadScreen from "./UploadScreen";

interface ListingEditScreenProps {}

const categories = [
  {
    label: "Furniture",
    value: 1,
    iconName: "floor-lamp",
    iconColor: "#fc5c65",
  },
  {
    label: "Cars",
    value: 2,
    iconName: "car",
    iconColor: "#fd9644",
  },
  {
    label: "Cameras",
    value: 3,
    iconName: "camera",
    iconColor: "#fed330",
  },
  {
    label: "Games",
    value: 4,
    iconName: "cards",
    iconColor: "#26de81",
  },
  {
    label: "Clothing",
    value: 5,
    iconName: "shoe-heel",
    iconColor: "#2bcbba",
  },
  {
    label: "Sports",
    value: 6,
    iconName: "basketball",
    iconColor: "#45aaf2",
  },
  {
    label: "Movies & Music",
    value: 7,
    iconName: "headphones",
    iconColor: "#4b7bec",
  },
  {
    label: "Books",
    value: 8,
    iconName: "book-open-variant",
    iconColor: "#800080",
  },
  {
    label: "Other",
    value: 9,
    iconName: "crop-square",
    iconColor: colors.medium,
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().label("Description"),
  images: Yup.array().min(1, "Please select at least one image"),
});

const ListingEditScreen: React.FC<ListingEditScreenProps> = () => {
  const [progress, setProgress] = useState<number>(0);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const location = useLocation();

  const handleSubmit = async (listing: any) => {
    setProgress(0);
    setModalVisible(true);
    const result = await listingsApi.addListing(
      { ...listing, location },
      (progress: any) => setProgress(progress)
    );
    setModalVisible(false);

    if (!result.ok) return alert("Could not save the listing.");
    alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen progress={progress} visible={modalVisible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          category: null,
          description: "",
          images: [],
        }}
        onSubmit={(values: any) => handleSubmit(values)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name={"title"} placeholder="Title" />
        <AppFormField
          width="30%"
          maxLength={8}
          keyboardType="numeric"
          name="price"
          placeholder="Price"
        />
        <AppFormPicker
          width="50%"
          name="category"
          numColumns={3}
          items={categories}
          placeholder="Category"
          PickerItemComponent={CategoryPickerItem}
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

export default ListingEditScreen;
