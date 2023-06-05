import React from "react";
import classes from "./TextBox.module.css";

export default function TextBox({
  title = "",
  placeHolder = "",
  value,
  onChangeText,
  customInputStyles,
  customInputProps,
  type = "text",
  errorText = "",
}) {
  return (
    <>
      <p>title</p>
      <input
        value={value}
        type={type}
        placeholder={placeHolder}
        {...customInputProps}
        className={classes.input + customInputStyles}
        onChange={(e) => {
          onChangeText(e.target.value);
        }}
      />
      {errorText ? <p>{errorText}</p> : null}
    </>
  );
}
