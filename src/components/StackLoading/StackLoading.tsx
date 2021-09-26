import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";

export const StackLoading = () => {
  return (
    <Stack spacing={1} p="1rem">
      <Typography>Please wait...</Typography>
      <Skeleton variant="text" height={40} animation="wave" />
      <Skeleton variant="text" width={100} animation="wave" />
      <Skeleton variant="text" height={80} animation="wave" />
      <Skeleton variant="text" height={80} animation="wave" />
    </Stack>
  );
};
