import React, { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { shallowEqual } from "react-redux";

import { Snackbar } from "../Snackbar/Snackbar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectClientError } from "../../redux/client-errors/client-error-slice";
import {
  setEchangedSuccess,
  selectCurrencies,
} from "../../redux/currencies-slice/currencies-slice";
import { LiveRate } from "../LiveRate/LiveRate";
import { CardSwitch } from "../CardSwitch/CardSwitch";
import { ActionButton } from "../ActionButton/ActionButton";
import { CardIn } from "../CardIn/CardIn";
import { CardOut } from "../CardOut/CardOut";
import { useRates } from "../useRates";
import { StackLoading } from "../StackLoading/StackLoading";
import Button from "@mui/material/Button";
import { getNumberFormat } from "../../utils";

export const testId = "appTestId";

export const App = () => {
  const dispatch = useAppDispatch();
  const clientError = useAppSelector(selectClientError, shallowEqual);
  const { currency, isCardSwitchDirectionUp, values } = useAppSelector(
    selectCurrencies,
    shallowEqual
  );
  const { isLoading, hasReachedLimitUsage } = useRates();
  const [modalOpen, setModalOPen] = useState(false);

  const title = `${isCardSwitchDirectionUp ? "Buy" : "Sell"} ${currency.in}`;
  const currencyIn = getNumberFormat(values.in, currency.in);
  const currencyOut = getNumberFormat(values.out, currency.out);

  const handleExchange = () => {
    dispatch(setEchangedSuccess(true));
    setModalOPen(true);
  };

  const handleLimit = () => {
    setModalOPen(false);
  };

  return (
    <Container maxWidth="sm" className="App" data-testid={testId}>
      {isLoading ? (
        <StackLoading />
      ) : (
        <Box p="1rem">
          <Box mb="0.5rem">
            <Typography variant="h5" component="h2" fontWeight="700">
              {title}
            </Typography>
          </Box>
          <Box mb="1rem">
            <LiveRate />
          </Box>
          <CardIn />
          <CardSwitch />
          <CardOut />
          <ActionButton variant="contained" onClick={handleExchange} />
        </Box>
      )}
      {clientError ? <Snackbar message={`${clientError.message}`} /> : null}
      {hasReachedLimitUsage ? (
        <Snackbar
          alertProps={{ severity: "info", color: "info" }}
          message="Mocked data will be used to render application."
        />
      ) : null}
      <Modal open={modalOpen}>
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
    </Container>
  );
};
