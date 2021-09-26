import React from "react";
import { screen } from "@testing-library/react";

import { LiveRate, testId } from "../LiveRate";
import { renderWithClient } from "../../../testUtils";

describe("LiveRate", () => {
  test("Component renders", () => {
    renderWithClient(<LiveRate />);

    const component = screen.getByTestId(testId);

    expect(component).toBeInTheDocument();
  });
});
