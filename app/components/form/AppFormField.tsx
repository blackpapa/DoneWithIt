import { useFormikContext } from "formik";
import * as React from "react";
import { TextInputProps } from "react-native";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";

interface AppFormFiledProps extends TextInputProps {
  name: string;
  width?: string;
}

const AppFormFiled: React.FC<AppFormFiledProps> = ({
  name,
  width,
  ...rest
}) => {
  const { handleChange, setFieldTouched, errors, touched } =
    useFormikContext<any>();
  return (
    <>
      <AppTextInput
        width={width}
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormFiled;
