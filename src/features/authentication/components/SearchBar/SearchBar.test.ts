import { describe, expect, it } from "vitest";

const toUpperCase = (str: string) => str.toUpperCase();

describe("toUpperCase", () => {
    it("should return valid upper case string 1", () => {
        const sut = toUpperCase;
        const expected = "ABC";

        const actual = sut("abc");

        expect(actual).toBe(expected);
    });
    it("should return valid upper case string 2", () => {
        const sut = toUpperCase;
        const expected = "ABC";

        const actual = sut("abc");

        expect(actual).toBe(expected);
    });
});
