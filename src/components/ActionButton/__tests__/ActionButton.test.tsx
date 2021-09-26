import React from "react";
import { screen } from "@testing-library/react";

import { ActionButton, testId } from "../ActionButton";
import { renderWithClient } from "../../../testUtils";

describe("ActionButton", () => {
  test("Component renders", () => {
    renderWithClient(<ActionButton />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
