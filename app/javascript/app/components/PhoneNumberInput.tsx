import React, { forwardRef } from "react";
import { TextField } from "@mui/material";

interface CustomProps {
  error: boolean;
  helperText?: string;
}

const PhoneNumberInput = (
  props: React.JSX.IntrinsicAttributes & CustomProps,
  ref: React.Ref<any> | undefined
) => {
  return (
    <TextField
      {...props}
      inputRef={ref}
      margin="normal"
      required
      fullWidth
      id="phone"
      label="Phone Number"
      name="phone"
      autoComplete="tel"
      type="tel"
      autoFocus
      variant="filled"
      error={props.error}
      helperText={props.helperText}
    />
  );
};
export default forwardRef(PhoneNumberInput);
