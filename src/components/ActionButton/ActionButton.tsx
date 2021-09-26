import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { shallowEqual } from "react-redux";

import { useAppSelector } from "../../redux/hooks";
import { selectCurrencies } from "../../redux/currencies-slice/currencies-slice";

export const testId = "actionButtonTestId";

export const ActionButton = (props: ButtonProps) => {
  const { currency, isCardSwitchDirectionUp, values } = useAppSelector(
    selectCurrencies,
    shallowEqual
  );

  const isDisabled = values.in === 0 || values.out === 0;

  const title = `${isCardSwitchDirectionUp ? "Buy" : "Sell"} ${currency.in} ${
    isCardSwitchDirectionUp ? "with" : "for"
  } ${currency.out}`;

  return (
    <Button
      data-testid={testId}
      color="primary"
      aria-label="add"
      style={{
        textTransform: "none",
        width: "calc(100% - 64px)",
        position: "fixed",
        left: "auto",
        bottom: "2rem",
        borderRadius: "4rem",
        maxWidth: "520px",
      }}
      size="large"
      disabled={isDisabled}
      {...props}
    >
      {title}
    </Button>
  );
};
