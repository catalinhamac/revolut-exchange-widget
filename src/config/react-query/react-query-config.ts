import { QueryClient, QueryObserverOptions } from "react-query";

export const defaultOptionsQueries: QueryObserverOptions = {
  retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
  refetchOnWindowFocus: false,
  staleTime: 30000,
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: defaultOptionsQueries,
  },
});
