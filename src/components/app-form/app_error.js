import { useFormikContext } from "formik";
import React from "react";

const AppError = ({ field }) => {
  const { errors, touched } = useFormikContext();

  return touched[field] && errors[field] ? (
    <p style={{ color: "red" }}>{errors[field]}</p>
  ) : null;
};

export default AppError;
