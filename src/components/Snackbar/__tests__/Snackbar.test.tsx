import React from "react";
import { screen } from "@testing-library/react";

import { Snackbar, testId } from "../Snackbar";
import { renderWithClient } from "../../../testUtils";

describe("Snackbar", () => {
  test("Component renders", async () => {
    renderWithClient(<Snackbar open />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
