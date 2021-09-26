import React, { SyntheticEvent, useMemo } from "react";
import MuiDialog, { DialogProps } from "@mui/material/Dialog";
import Box from "@mui/system/Box";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete, {
  AutocompleteChangeDetails,
  AutocompleteChangeReason,
} from "@mui/material/Autocomplete";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCurrencies,
  Selection,
  setConvert,
  setCurrencyIn,
  setCurrencyOut,
} from "../../redux/currencies-slice/currencies-slice";
import { IFetchCurrenciesResponse } from "../../api/fetchCurrencies";
import { useRates } from "../useRates";
import { convert, IStateConvert } from "../../utils";

import styles from "./AutocompleteDialog.module.scss";

export const testId = "autocompleteDialogtestId";

const Icon = () => <></>;

interface IProps {
  selection: Selection.In | Selection.Out;
}

export const AutocompleteDialog = ({ selection }: IProps) => {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const { rates } = useRates();
  const { currency, values } = useAppSelector(selectCurrencies, shallowEqual);
  const isIn = selection === Selection.In;

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getOptions = (rates: IFetchCurrenciesResponse) =>
    rates &&
    Object.keys(rates).map((r: any) => ({
      label: r,
      value: rates[r],
    }));

  const getConvert = useMemo(
    () => convert({ rates, values, currency, selection } as IStateConvert),
    [rates, values, currency, selection]
  );

  const handleChange = (
    event: SyntheticEvent,
    value: { label: any; value: number } | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<unknown> | undefined
  ) => {
    const l = value && value.label;

    if (isIn) {
      dispatch(setCurrencyIn(l as string));
    } else {
      dispatch(setCurrencyOut(l as string));
    }
    dispatch(setConvert(getConvert));
    handleClose();
  };

  return (
    <div data-testid={testId}>
      <Button
        onClick={handleClickOpen("body")}
        style={{ color: "inherit", fontWeight: 700 }}
      >
        {isIn ? currency.in : currency.out}
        <ExpandMoreIcon />
      </Button>
      <MuiDialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        fullScreen
        fullWidth
      >
        <Box p="1.5rem">
          <IconButton aria-label="close" onClick={handleClose}>
            <ArrowBackIcon />
          </IconButton>
          <Autocomplete
            disablePortal
            id="currencyBox"
            options={getOptions(rates as IFetchCurrenciesResponse) || []}
            fullWidth
            open={true}
            popupIcon={<Icon />}
            classes={{
              listbox: styles.muiAutocompleteListbox,
              paper: styles.muiAutocompletePaper,
            }}
            renderInput={(params) => (
              <TextField {...params} fullWidth autoFocus variant="standard" />
            )}
            onChange={handleChange}
          />
        </Box>
      </MuiDialog>
    </div>
  );
};
