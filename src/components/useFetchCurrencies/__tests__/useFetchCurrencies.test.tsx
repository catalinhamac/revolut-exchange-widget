import { renderHook } from "@testing-library/react-hooks";

import { useFetchCurrencies } from "../useFetchCurrencies";
import * as CurrencyService from "../../../api/fetchCurrencies";
import { RatesMock } from "../../../mocks/RatesMock";
import { createWrapper } from "../../../testUtils";

describe("useFetchCurrencies", () => {
  test("successful query hook", async () => {
    jest.spyOn(CurrencyService, "fetchCurrencies").mockResolvedValue(RatesMock);

    const { result, waitFor } = renderHook(() => useFetchCurrencies(), {
      wrapper: createWrapper(),
    });

    result.current.refetch();

    await waitFor(() => result.current.isSuccess);

    expect(result.current.data).toEqual(RatesMock);
  });
});
