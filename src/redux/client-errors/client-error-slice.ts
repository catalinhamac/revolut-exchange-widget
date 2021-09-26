import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface InitialState {
  message: string;
}

export const initialState: InitialState | null = null;

export const slice = createSlice({
  name: "clientErrors",
  initialState,
  reducers: {
    setClientError: (state, action: PayloadAction<InitialState | null>) =>
      // eslint-disable-next-line
      (state = action.payload as null),
  },
});

export const { setClientError } = slice.actions;

export const selectClientError = (state: RootState): InitialState | null =>
  state.clientError;

export default slice.reducer;
