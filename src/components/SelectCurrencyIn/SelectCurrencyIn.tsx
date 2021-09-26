import React, { ChangeEvent } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { shallowEqual } from "react-redux";

import { NativeSelect } from "../NativeSelect/NativeSelect";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCurrency,
  setCurrencyIn,
} from "../../redux/currencies-slice/currencies-slice";
import { useRates } from "../useRates";
import { Snackbar } from "../Snackbar/Snackbar";

export const testId = "selectCurrencyInTestId";

export const SelectCurrencyIn = () => {
  const dispatch = useAppDispatch();
  const { rates, reversedRates, isLoading, error } = useRates();
  const currency = useAppSelector(selectCurrency, shallowEqual);

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    dispatch(setCurrencyIn(reversedRates[value]));
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Snackbar message={error.message} />;
  }

  return (
    <div data-testid={testId}>
      {rates ? (
        <NativeSelect onChange={handleChange} currency={currency.in} />
      ) : null}
    </div>
  );
};
