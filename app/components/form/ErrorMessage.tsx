import { FormikTouched } from "formik";
import * as React from "react";
import AppText from "../AppText";

interface ErrorMessageProps {
  error: any;
  visible?: boolean | FormikTouched<any> | FormikTouched<any>[];
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error, visible }) => {
  if (!error || !visible) return null;
  return <AppText style={{ color: "red" }}>{error}</AppText>;
};

export default ErrorMessage;
