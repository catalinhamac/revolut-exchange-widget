import React from "react";
import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { SelectCurrencyOut, testId } from "../SelectCurrencyOut";
import { createWrapper, renderWithClient } from "../../../testUtils";
import { RatesMock } from "../../../mocks/RatesMock";
import * as CurrencyService from "../../../api/fetchCurrencies";
import { useFetchCurrencies } from "../../useFetchCurrencies/useFetchCurrencies";

describe("SelectCurrencyOut", () => {
  test("Component renders", async () => {
    jest.spyOn(CurrencyService, "fetchCurrencies").mockResolvedValue(RatesMock);

    const { result, waitFor } = renderHook(() => useFetchCurrencies(), {
      wrapper: createWrapper(),
    });

    renderWithClient(<SelectCurrencyOut />);

    await waitFor(() => result.current.isSuccess);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
