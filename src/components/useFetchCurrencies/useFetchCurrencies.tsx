import { QueryObserverOptions, useQuery, UseQueryResult } from "react-query";

import {
  fetchCurrencies,
  IFetchCurrenciesResponse,
} from "../../api/fetchCurrencies";
import { QueryKey } from "../../config/react-query/queryKey";

export const useFetchCurrencies = (
  options = {} as QueryObserverOptions
): UseQueryResult<IFetchCurrenciesResponse, Error> => {
  const queryOptions: QueryObserverOptions = {
    refetchInterval: 10 * 1000,
    ...options,
  };

  return useQuery(
    QueryKey.Currencies,
    () => fetchCurrencies(),
    queryOptions
  ) as UseQueryResult<IFetchCurrenciesResponse, Error>;
};
