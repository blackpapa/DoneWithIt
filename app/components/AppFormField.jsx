import { useFormikContext } from "formik";
import * as React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

const AppFormField = ({ name, ...rest }) => {
  const { handleChange, setFieldTouched, errors, touched } = useFormikContext();

  return (
    <>
      <AppTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
