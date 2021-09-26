import { configureStore, AnyAction, Reducer } from "@reduxjs/toolkit";

import combinedReducer from "./combinedReducer";

type AppState = ReturnType<typeof combinedReducer>;

const rootReducer: Reducer<AppState, AnyAction> = (state, action) =>
  combinedReducer(state, action);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
