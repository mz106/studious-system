import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import Home from "../src/pages/Home"; // Adjust the path if necessary

// This test is to be written out for learners in a code along.
// Learners then write a render test for the page component AddText

describe("Home Component", () => {
  it("renders the Home component with the correct text", () => {
    // Render the Home component
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    // Check if the text "Home" is present in the document
    const homeElement = screen.getByText("Home");
    expect(homeElement).toBeInTheDocument();
  });
});
