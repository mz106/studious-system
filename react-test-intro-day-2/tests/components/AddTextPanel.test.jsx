import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import AddTextPanel from "../../src/components/addtextPanel/aDDtextPanel";

// This is to be left blank (with skeleton and notes) for learners to complete

describe("AddTextPanel Component", () => {
  it("renders with the initial text", () => {
    // Render the AddTextPanel component
    render(<AddTextPanel />);

    // Check that the initial text "Starting text" is rendered
    const initialTextElement = screen.getByText("Starting text");
    expect(initialTextElement).toBeInTheDocument();
  });

  it("updates changingText state when the input value changes", () => {
    // Render the AddTextPanel component
    render(<AddTextPanel />);

    // Get the input element
    const inputElement = screen.getByPlaceholderText("Type here...");

    // Simulate typing in the input field
    // Look up fireEvent.change() https://testing-library.com/docs/dom-testing-library/api-events/
    fireEvent.change(inputElement, { target: { value: "New input text" } });

    // Since we can't directly access state, we'll check the console.log output
    // Here, we should check that the input value changes (this indirectly tests state)
    expect(inputElement.value).toBe("New input text");
  });

  it("updates the displayed text when the button is clicked", () => {
    // Render the AddTextPanel component
    render(<AddTextPanel />);

    // Get the input element and the button element
    const inputElement = screen.getByPlaceholderText("Type here...");
    const buttonElement = screen.getByText("Add the text");

    // Simulate typing in the input field
    fireEvent.change(inputElement, { target: { value: "Updated text" } });

    // Simulate clicking the button
    fireEvent.click(buttonElement);

    // Check that the text has been updated to "Updated text"
    const updatedTextElement = screen.getByText("Updated text");
    expect(updatedTextElement).toBeInTheDocument();
  });
});
