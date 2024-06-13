import { describe, it, expect } from "vitest";
import { counter } from "../src/counter";

describe("counter", () => {
  it("should increment the input number by 1", () => {
    expect(counter(0)).toBe(1);
    expect(counter(1)).toBe(2);
    expect(counter(-1)).toBe(0);
    expect(counter(100)).toBe(101);
  });

  it("should handle edge cases", () => {
    expect(counter(Number.MAX_SAFE_INTEGER)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(counter(Number.MIN_SAFE_INTEGER)).toBe(Number.MIN_SAFE_INTEGER + 1);
  });
});
