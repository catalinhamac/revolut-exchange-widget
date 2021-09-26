import "./bootstrapApp";

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { QueryClientProvider } from "react-query";

import { App } from "./components/App/App";
import { store } from "./redux/store";
import { queryClient } from "./config/react-query/react-query-config";
import reportWebVitals from "./reportWebVitals";
import { ErrorBoundary } from "./components/ErrorBoundary";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
