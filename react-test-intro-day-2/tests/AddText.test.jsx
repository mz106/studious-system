import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import AddText from "../src/pages/AddText";

// This is to be left blank (with skeleton and notes) for learners to complete

describe("AddText Component", () => {
  it("renders the Home component with the correct text", () => {
    // Render the Home component
    render(
      <MemoryRouter>
        <AddText />
      </MemoryRouter>
    );

    // Check if the text "Home" is present in the document
    const homeElement = screen.getByText("AddText");
    expect(homeElement).toBeInTheDocument();
  });
});
