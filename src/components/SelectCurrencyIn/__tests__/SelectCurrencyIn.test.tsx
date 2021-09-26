import React from "react";
import { screen } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import { SelectCurrencyIn, testId } from "../SelectCurrencyIn";
import { createWrapper, renderWithClient } from "../../../testUtils";
import { RatesMock } from "../../../mocks/RatesMock";
import * as CurrencyService from "../../../api/fetchCurrencies";
import { useFetchCurrencies } from "../../useFetchCurrencies/useFetchCurrencies";

describe("SelectCurrencyIn", () => {
  test("Component renders", async () => {
    jest.spyOn(CurrencyService, "fetchCurrencies").mockResolvedValue(RatesMock);

    const { result, waitFor } = renderHook(() => useFetchCurrencies(), {
      wrapper: createWrapper(),
    });

    renderWithClient(<SelectCurrencyIn />);

    await waitFor(() => result.current.isSuccess);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
