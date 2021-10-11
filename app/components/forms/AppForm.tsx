import { Formik } from "formik";
import * as React from "react";

interface AppFormProps {
  initialValues: any;
  onSubmit: any;
  validationSchema: any;
}

const AppForm: React.FC<AppFormProps> = ({
  initialValues,
  onSubmit,
  validationSchema,
  children,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppForm;
