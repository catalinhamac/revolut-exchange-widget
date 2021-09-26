import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export enum Selection {
  In = "in",
  Out = "out",
}

export interface ICurrency {
  in: string;
  out: string;
}

export interface IValues {
  in: number;
  out: number;
}

export type ISelection = Selection.In | Selection.Out;

export interface InitialState {
  values: IValues;
  currency: ICurrency;
  selection: ISelection;
  isCardSwitchDirectionUp: boolean;
  isEchangedSuccess: boolean;
}

export const initialState: InitialState = {
  values: {
    in: 0,
    out: 0,
  },
  currency: {
    in: "USD",
    out: "GBP",
  },
  selection: Selection.In,
  isCardSwitchDirectionUp: false,
  isEchangedSuccess: false,
};

export const slice = createSlice({
  name: "currencies",
  initialState,
  reducers: {
    setCurrencyIn: (state, action: PayloadAction<string>) => {
      state.currency = { ...state.currency, in: action.payload };
    },
    setCurrencyOut: (state, action: PayloadAction<string>) => {
      state.currency = { ...state.currency, out: action.payload };
    },
    setValueIn: (state, action: PayloadAction<number>) => {
      state.values = {
        ...state.values,
        in: action.payload,
      };
    },
    setValueOut: (state, action: PayloadAction<number>) => {
      state.values = {
        ...state.values,
        out: action.payload,
      };
    },
    setSelectionIn: (state) => {
      state.selection = initialState.selection;
    },
    setSelectionOut: (state) => {
      state.selection = Selection.Out;
    },
    setConvert: (state, action: PayloadAction<IValues>) => {
      state.values = { ...state.values, ...action.payload };
    },
    setCardSwitchDirectionUp: (state, action: PayloadAction<boolean>) => {
      state.isCardSwitchDirectionUp = action.payload;
    },
    setEchangedSuccess: (state, action: PayloadAction<boolean>) => {
      state.isEchangedSuccess = action.payload;
    },
  },
});

export const {
  setCurrencyIn,
  setCurrencyOut,
  setValueIn,
  setValueOut,
  setSelectionIn,
  setSelectionOut,
  setConvert,
  setCardSwitchDirectionUp,
  setEchangedSuccess,
} = slice.actions;

export const selectCurrencies = (state: RootState): InitialState =>
  state.currencies;
export const selectCurrency = (state: RootState): ICurrency =>
  selectCurrencies(state).currency;
export const selectValues = (state: RootState): IValues =>
  selectCurrencies(state).values;
export const selectSelection = (state: RootState): ISelection =>
  selectCurrencies(state).selection;
export const selectIsCardSwitchDirectionUp = (state: RootState): boolean =>
  selectCurrencies(state).isCardSwitchDirectionUp;
export const selectIsEchangedSuccess = (state: RootState): boolean =>
  selectCurrencies(state).isEchangedSuccess;

export default slice.reducer;
