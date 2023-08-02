// Import necessary dependencies for testing
import React from "react";
import { render, test } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "../App";

// Test the App component
test("renders the header and routes correctly", () => {
  const { getByTestId } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const headerElement = getByTestId("header");
  expect(headerElement).toBeInTheDocument();

});
