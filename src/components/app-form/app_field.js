import { useFormikContext } from "formik";
import React from "react";

const AppField = ({ field, ...props }) => {
  const { values, handleChange } = useFormikContext();

  return (
    <input
      type="text"
      id={field}
      name={field}
      onChange={handleChange}
      value={values[field]}
      {...props}
    />
  );
};

export default AppField;
