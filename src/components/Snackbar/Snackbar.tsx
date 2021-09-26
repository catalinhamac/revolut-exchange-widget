import React, { FC, useState, useEffect, SyntheticEvent } from "react";
import MuiSnackbar, { SnackbarProps } from "@mui/material/Snackbar";

import { Alert } from "../Alert/Alert";
import { AlertProps } from "@mui/material";

export const testId = "snackbarTestId";

interface OwnProps {
  message?: string;
  alertProps?: AlertProps;
}

type IProps = SnackbarProps & OwnProps;

export const Snackbar: FC<IProps> = ({
  message = "",
  alertProps = {} as AlertProps,
  ...rest
}: IProps) => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const hasError = !!message;

  const handleCloseSnackbar = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (hasError) {
      setOpenSnackbar(true);
    }
  }, [hasError, message]);

  return (
    <MuiSnackbar
      data-testid={testId}
      open={openSnackbar}
      autoHideDuration={8000}
      onClose={handleCloseSnackbar}
      {...rest}
    >
      <div>
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          color="error"
          {...alertProps}
        >
          {message}
        </Alert>
      </div>
    </MuiSnackbar>
  );
};
