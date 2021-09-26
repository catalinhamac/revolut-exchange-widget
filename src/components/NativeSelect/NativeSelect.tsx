import React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MuiNativeSelect, { NativeSelectProps } from "@mui/material/NativeSelect";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useRates } from "../useRates";

import styles from "./NativeSelect.module.scss";

export const testId = "nativeSelectTestId";

export interface IOption {
  label: string;
  value: number;
}

interface OwnProps {
  name?: string;
  label?: string;
  currency: string;
}

type IProps = NativeSelectProps & OwnProps;

export const NativeSelect = ({
  name = "currency",
  label = "",
  currency,
  ...rest
}: IProps) => {
  const { rates, reversedRates = {} } = useRates();

  return (
    <Box data-testid={testId}>
      <FormControl>
        <InputLabel
          variant="standard"
          htmlFor={name}
          classes={{ root: styles.muiInputLabelRoot }}
        >
          {label}
        </InputLabel>
        <MuiNativeSelect
          disableUnderline
          value={rates && rates[`${currency}`]}
          inputProps={{
            name: name,
            id: name,
          }}
          IconComponent={ExpandMoreIcon}
          {...rest}
        >
          {Object.keys(reversedRates).map((value: string) => {
            return (
              <option key={value} value={value}>
                {reversedRates[value]}
              </option>
            );
          })}
        </MuiNativeSelect>
      </FormControl>
    </Box>
  );
};
