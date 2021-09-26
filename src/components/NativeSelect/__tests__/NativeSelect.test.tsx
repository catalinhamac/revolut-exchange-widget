import React from "react";
import { screen } from "@testing-library/react";

import { NativeSelect, testId } from "../NativeSelect";
import { renderWithClient } from "../../../testUtils";

describe("NativeSelect", () => {
  test("Component renders", () => {
    renderWithClient(<NativeSelect currency="EUR" />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
