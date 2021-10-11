import { useFormikContext } from "formik";
import * as React from "react";
import AppPicker, { Item, PickerItemComponentProps } from "../AppPicker";
import ErrorMessage from "./ErrorMessage";

interface AppFormPickerProps {
  name: string;
  items: Item[];
  placeholder: string;
  numColumns?: number;
  PickerItemComponent?: React.FC<PickerItemComponentProps>;
  width?: string;
}

const AppFormPicker: React.FC<AppFormPickerProps> = ({
  name,
  items,
  placeholder,
  numColumns,
  PickerItemComponent,
  width,
}) => {
  const { setFieldValue, values, errors, touched } = useFormikContext<any>();
  return (
    <>
      <AppPicker
        items={items}
        placeholder={placeholder}
        numColumns={numColumns}
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
