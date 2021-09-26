import { setClientError } from "../redux/client-errors/client-error-slice";
import { store } from "../redux/store";

export interface IFetchCurrenciesResponse {
  [key: string]: number;
}

export const fetchCurrencies = async (): Promise<
  IFetchCurrenciesResponse | unknown
> => {
  try {
    const response = await fetch(process.env.REACT_APP_ENDPOINT as RequestInfo);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const json = await response.json();

    if (json.error) {
      throw json.error;
    }

    const { rates } = json;
    rates.USD = 1;

    return Object.keys(rates).reduce((acc, curr) => {
      acc = {
        ...acc,
        [curr]: (rates[curr] += Math.random() / 20),
      };

      return acc;
    }, {});

    // eslint-disable-next-line
  } catch (e: any) {
    store.dispatch(setClientError({ message: e.message || e.info }));
    throw e;
  }
};
