import React from "react";
import Typography from "@mui/material/Typography";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { shallowEqual } from "react-redux";
import getSymbolFromCurrency from "currency-symbol-map";

import { selectCurrencies } from "../../redux/currencies-slice/currencies-slice";
import { useAppSelector } from "../../redux/hooks";
import { useRates } from "../useRates";

export const testId = "liveRateTestId";

export const LiveRate = () => {
  const { currency, isCardSwitchDirectionUp } = useAppSelector(
    selectCurrencies,
    shallowEqual
  );
  const { rates } = useRates();

  const currencyIn = `${getSymbolFromCurrency(currency.in)}1`;
  const currencyOutValueSell =
    rates && (rates[currency.in] / rates[currency.out]).toFixed(4);
  const currencyOutValueBuy =
    rates && (rates[currency.in] / rates[currency.out] + 0.003).toFixed(4);
  const currencyOutValue = isCardSwitchDirectionUp
    ? currencyOutValueBuy
    : currencyOutValueSell;
  const currencyOut = `${getSymbolFromCurrency(currency.out)}${
    currencyOutValue && currencyOutValue !== "NaN" ? currencyOutValue : "0.00"
  }`;

  return (
    <Typography
      data-testid={testId}
      variant="body2"
      color="primary"
      style={{ display: "flex", fontWeight: 700 }}
    >
      <TrendingUpIcon />
      {currencyIn} = {currencyOut}
    </Typography>
  );
};
