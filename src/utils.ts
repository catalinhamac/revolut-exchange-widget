import getSymbolFromCurrency from "currency-symbol-map";

import { IFetchCurrenciesResponse } from "./api/fetchCurrencies";
import {
  InitialState,
  IValues,
  Selection,
} from "./redux/currencies-slice/currencies-slice";

export interface IStateConvert extends InitialState {
  rates: IFetchCurrenciesResponse;
}

export const convert = ({
  rates = {},
  values,
  currency,
  selection,
}: IStateConvert): IValues => {
  const writeTo = selection === Selection.In ? Selection.Out : Selection.In;
  const resultRate = rates[currency[writeTo] as string];
  const selectedRate =
      rates[currency[selection] as string] !== undefined
        ? rates[currency[selection] as string]
        : 0,
    selectedValue = values[selection] as number;

  const converted = ((resultRate / selectedRate) * selectedValue).toFixed(2);

  // eslint-disable-next-line
  let ob = {} as any;
  ob[writeTo] = converted !== "NaN" ? converted : 0.0;

  return ob;
};

export const numberFormat = (
  number: number,
  options?: Intl.NumberFormat
): string => {
  const instance = new Intl.NumberFormat("en-UK", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    ...options,
  });

  return instance.format(number);
};

export const getNumberFormat = (
  value: number,
  curr = "GBP",
  options?: Intl.NumberFormat
): string =>
  `${getSymbolFromCurrency(curr)}${numberFormat(
    value,
    options || ({} as Intl.NumberFormat)
  )}`;
