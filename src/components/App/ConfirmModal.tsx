import React from "react";
import { Box, Button, Modal, ModalProps, Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { shallowEqual } from "react-redux";

import { selectCurrencies } from "../../redux/currencies-slice/currencies-slice";
import { useAppSelector } from "../../redux/hooks";
import { getNumberFormat } from "../../utils";

interface OwnProps {
  handleLimit: () => void;
}

type IProps = OwnProps & ModalProps;

export const ConfirmModal = ({ handleLimit, ...rest }: IProps) => {
  const { currency, values } = useAppSelector(selectCurrencies, shallowEqual);

  const currencyIn = getNumberFormat(values.in, currency.in);
  const currencyOut = getNumberFormat(values.out, currency.out);

  return (
    <Modal {...rest}>
      <Box
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "50%",
          transform: "translate(-50%)",
          width: "calc(100% - 3rem)",
          backgroundColor: "white",
          padding: "1.5rem",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <Box>
          <CheckCircleOutlineIcon color="primary" fontSize="large" />
        </Box>
        <Box mb="1rem">
          <Typography variant="h6">You exchanged</Typography>
          <Typography variant="h6" color="primary">
            {currencyIn} to {currencyOut}
          </Typography>
        </Box>
        <Button
          variant="contained"
          style={{
            textTransform: "none",
            width: "100%",
            borderRadius: "1.5rem",
          }}
          onClick={handleLimit}
        >
          Set up limit order
        </Button>
      </Box>
    </Modal>
  );
};
