import React from "react";
import { screen } from "@testing-library/react";

import { CardOut, testId } from "../CardOut";
import { renderWithClient } from "../../../testUtils";

describe("CardSwitch", () => {
  test("Component renders", () => {
    renderWithClient(<CardOut />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
