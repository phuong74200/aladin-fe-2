import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, expect, vitest } from "vitest";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
        writable: true,
        value: vitest.fn().mockImplementation((query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vitest.fn(), // Deprecated
            removeListener: vitest.fn(), // Deprecated
            addEventListener: vitest.fn(),
            removeEventListener: vitest.fn(),
            dispatchEvent: vitest.fn(),
        })),
    });
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
    cleanup();
});
