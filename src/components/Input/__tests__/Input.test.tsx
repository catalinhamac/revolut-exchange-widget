import React from "react";
import { screen } from "@testing-library/react";

import { Input, testId } from "../Input";
import { renderWithClient } from "../../../testUtils";

describe("Input", () => {
  test("Component renders", () => {
    renderWithClient(<Input />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
