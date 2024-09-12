import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import HomePanel from "../../src/components/homePanel/HomePanel";

// This test will be written in a code along.
// Then learners will write a similar fireEvent test in AddTextPanel

describe("HomePanel Component", () => {
  it("displays the initial count and increments it when the button is clicked", () => {
    // Render the HomePanel component
    render(<HomePanel />);

    // Check that the initial count is 0
    const countElement = screen.getByText("0");
    expect(countElement).toBeInTheDocument();

    // Get the button element
    const buttonElement = screen.getByText("Add 1");

    // Simulate a click event on the button
    fireEvent.click(buttonElement);

    // Check that the count has incremented to 1
    expect(screen.getByText("1")).toBeInTheDocument();

    // Simulate another click event on the button
    fireEvent.click(buttonElement);

    // Check that the count has incremented to 2
    expect(screen.getByText("2")).toBeInTheDocument();
  });
});
