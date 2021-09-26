import React from "react";
import { screen } from "@testing-library/react";

import { App, testId } from "../App";
import { renderWithClient } from "../../../testUtils";

test("renders learn react link", () => {});

describe("App", () => {
  test("Component renders", () => {
    renderWithClient(<App />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
