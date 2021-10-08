import { useFormikContext } from "formik";
import * as React from "react";
import AppButton from "./AppButton";

interface SubmitButtonProps {
  title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit} />;
};

export default SubmitButton;
