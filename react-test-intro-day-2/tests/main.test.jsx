// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom"; // For additional matchers like .toBeInTheDocument()
// import { describe, it, expect } from "vitest";
// import App from "../src/App"; // Adjust the path if necessary

// describe("App Component", () => {
//   it("renders the App component with the correct text", () => {
//     // Render the App component
//     render(<App />);

//     // Check if the text "Hello world" is present in the document
//     const headingElement = screen.getByText("Hello world");
//     expect(headingElement).toBeInTheDocument();
//   });
// });

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import App from "../src/App"; // Adjust the path if necessary
// import Home from "../src/pages/Home"; // Adjust the path if necessary

describe("App Component", () => {
  it("renders the Home component inside the App component", () => {
    // Render the App component
    render(<App />);

    // Check if the text "Home" is present in the document
    const homeElement = screen.getByText("Home");
    expect(homeElement).toBeInTheDocument();
  });
});
