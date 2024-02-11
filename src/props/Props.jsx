import React from "react";
import usePropsFormValue from "../hooks/usePropsFormValue";

export default function Props({ value, children }) {
  const { value } = usePropsFormValue();

  return <div>{value}</div>;
}
