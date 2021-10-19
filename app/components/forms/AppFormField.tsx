import { useFormikContext } from "formik";
import * as React from "react";

import AppTextInput, { AppTextInputProps } from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFiledProps extends AppTextInputProps {
  name: string;
  width?: string;
}

const AppFormFiled: React.FC<AppFormFiledProps> = ({
  name,
  width,
  ...rest
}) => {
  const {
    handleChange,
    setFieldValue,
    setFieldTouched,
    values,
    errors,
    touched,
  } = useFormikContext<any>();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={(text) => setFieldValue(name, text)}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFiled;
