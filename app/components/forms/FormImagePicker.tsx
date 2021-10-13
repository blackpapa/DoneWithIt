import { useFormikContext } from "formik";
import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";

interface FormImagePickerProps {
  name: string;
}

const FormImagePicker: React.FC<FormImagePickerProps> = ({ name }) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  const imageUris = values[name];

  const handleAddImage = (uri: string) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemoveImage = (uri: string) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri: string) => imageUri !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAddImage}
        onRemoveImage={handleRemoveImage}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
