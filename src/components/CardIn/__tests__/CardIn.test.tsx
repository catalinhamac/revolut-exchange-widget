import React from "react";
import { screen } from "@testing-library/react";

import { CardIn, testId } from "../CardIn";
import { renderWithClient } from "../../../testUtils";

describe("CardIn", () => {
  test("Component renders", () => {
    renderWithClient(<CardIn />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
