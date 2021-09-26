import { combineReducers } from "@reduxjs/toolkit";

import currenciesReducer from "./currencies-slice/currencies-slice";
import clientErrorReducer from "./client-errors/client-error-slice";

const combinedReducer = combineReducers({
  currencies: currenciesReducer,
  clientError: clientErrorReducer,
});

export default combinedReducer;
