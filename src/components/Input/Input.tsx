import React from "react";
import TextField, { TextFieldProps } from "@mui/material/TextField";

import styles from "./Input.module.scss";

export const testId = "inputTestId";

interface OwnProps {
  selectedValue: string;
}

type IProps = TextFieldProps & OwnProps;

export const Input = ({ selectedValue, ...rest }: IProps) => (
  <TextField
    data-testid={testId}
    variant="standard"
    InputProps={{
      disableUnderline: true,
      classes: { root: styles.muiInputRoot },
      sx: {
        "> input": {
          fontWeight: 700,
          textAlign: "right",
        },
      },
    }}
    placeholder="0"
    value={selectedValue}
    type="text"
    {...rest}
  />
);
