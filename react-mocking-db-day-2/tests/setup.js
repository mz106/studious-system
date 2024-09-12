import { afterEach, beforeAll, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
