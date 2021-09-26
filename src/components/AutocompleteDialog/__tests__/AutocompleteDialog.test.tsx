import React from "react";
import { screen } from "@testing-library/react";

import { AutocompleteDialog, testId } from "../AutocompleteDialog";
import { renderWithClient } from "../../../testUtils";
import { Selection } from "../../../redux/currencies-slice/currencies-slice";

describe("AutocompleteDialog", () => {
  test("Component renders in", () => {
    renderWithClient(<AutocompleteDialog selection={Selection.In} />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });

  test("Component renders out", () => {
    renderWithClient(<AutocompleteDialog selection={Selection.Out} />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
