import { useFetchCurrencies } from "./useFetchCurrencies/useFetchCurrencies";
import { RatesMock } from "../mocks/RatesMock";
import { IFetchCurrenciesResponse } from "../api/fetchCurrencies";

interface IProps {
  rates: IFetchCurrenciesResponse | undefined;
  reversedRates: { [key: string]: string };
  isLoading: boolean;
  error: Error | null;
  hasReachedLimitUsage: boolean | null;
}

export const useRates = (): IProps => {
  const { data: rates, isLoading, error } = useFetchCurrencies();
  // eslint-disable-next-line
  const hasReachedLimitUsage = error && (error as any).code === 104;

  // eslint-disable-next-line
  const setReversedRates = (rates: IFetchCurrenciesResponse) =>
    rates &&
    Object.keys(rates).reduce((acc: any, curr: string) => {
      acc[rates[curr]] = curr;

      return acc;
    }, {});

  const dataFromApi = {
    rates,
    reversedRates: setReversedRates(rates as IFetchCurrenciesResponse),
    isLoading,
    error,
    hasReachedLimitUsage,
  };
  const mockData = {
    rates: RatesMock,
    reversedRates: setReversedRates(RatesMock),
    isLoading: false,
    error: null,
    hasReachedLimitUsage,
  };

  return hasReachedLimitUsage ? mockData : dataFromApi;
};
