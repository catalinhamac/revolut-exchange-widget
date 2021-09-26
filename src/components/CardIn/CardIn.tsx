import React, { ChangeEvent, useMemo, useEffect } from "react";
import Card from "@mui/material/Card";
import { shallowEqual } from "react-redux";

import { Input } from "../Input/Input";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  setValueIn,
  setConvert,
  selectCurrencies,
  setSelectionIn,
  Selection,
} from "../../redux/currencies-slice/currencies-slice";
import { convert, IStateConvert } from "../../utils";
import { useRates } from "../useRates";
import { AutocompleteDialog } from "../AutocompleteDialog/AutocompleteDialog";

import styles from "./CardIn.module.scss";

export const testId = "cardInTestId";

export const CardIn = () => {
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

    dispatch(setSelectionIn());
    dispatch(setValueIn(valueNo));
  };

  useEffect(() => {
    dispatch(setConvert(getConvert));
    // eslint-disable-next-line
  }, [getConvert.in]);

  const selectedValue = values.in < 1 ? "" : `- ${values.in}`;

  return (
    <Card sx={{ boxShadow: "none", borderRadius: "1rem" }} data-testid={testId}>
      <div className={styles.content}>
        <AutocompleteDialog selection={Selection.In} />
        <Input
          onChange={handleChange}
          selectedValue={selectedValue}
          disabled={isLoading}
        />
      </div>
    </Card>
  );
};
