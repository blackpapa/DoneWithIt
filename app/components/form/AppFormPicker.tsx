import { useFormikContext } from "formik";
import * as React from "react";
import AppPicker, { Item } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface AppFormPickerProps {
  name: string;
  items: Item[];
  placeholder: string;
  PickerItemComponent?: React.FC;
  width?: string;
}

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  name,
  items,
  placeholder,
  PickerItemComponent,
  width,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        width={width}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormPicker;
