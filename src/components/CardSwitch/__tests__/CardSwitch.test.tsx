import React from "react";
import { screen } from "@testing-library/react";

import { CardSwitch, testId } from "../CardSwitch";
import { renderWithClient } from "../../../testUtils";

describe("CardSwitch", () => {
  test("Component renders", () => {
    renderWithClient(<CardSwitch />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
