import React, { ChangeEvent, useMemo, useEffect } from "react";
import Card from "@mui/material/Card";
import { shallowEqual } from "react-redux";

import { Input } from "../Input/Input";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setValueOut,
  setConvert,
  selectCurrencies,
  setSelectionOut,
  Selection,
} from "../../redux/currencies-slice/currencies-slice";
import { convert, IStateConvert } from "../../utils";
import { useRates } from "../useRates";
import { AutocompleteDialog } from "../AutocompleteDialog/AutocompleteDialog";

import styles from "./CardOut.module.scss";

export const testId = "cardOutTestId";

export const CardOut = () => {
  const dispatch = useAppDispatch();
  const { rates, isLoading } = useRates();
  const { values, currency, selection } = useAppSelector(
    selectCurrencies,
    shallowEqual
  );
  const getConvert = useMemo(
    () => convert({ rates, values, currency, selection } as IStateConvert),
    [rates, values, currency, selection]
  );

  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = event.target;
    const valueNo = parseInt(value.replace(/\D/g, ""), 10) || 0;

    dispatch(setSelectionOut());
    dispatch(setValueOut(valueNo));
  };

  useEffect(() => {
    dispatch(setConvert(getConvert));
    // eslint-disable-next-line
  }, [getConvert.out]);

  const selectedValue = values.out < 1 ? "" : `+ ${values.out}`;

  return (
    <Card sx={{ boxShadow: "none", borderRadius: "1rem" }} data-testid={testId}>
      <div className={styles.content}>
        <AutocompleteDialog selection={Selection.Out} />
        <Input
          onChange={handleChange}
          selectedValue={selectedValue}
          disabled={isLoading}
        />
      </div>
    </Card>
  );
};
