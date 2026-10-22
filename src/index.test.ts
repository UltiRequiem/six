import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { setIntervalX } from "./index.js";

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  vi.useRealTimers();
});

describe("setIntervalX", () => {
  it("Cutting it before time.", () => {
    let counter = 0;

    const interval = setIntervalX(() => counter++, 1000, 5);

    vi.advanceTimersByTime(3500);

    // Kill the interval before it runs the specified amount of times
    clearInterval(interval);

    vi.advanceTimersByTime(5000);

    // The interval only got enough time to run 3 times
    expect(counter).toEqual(3);
  });

  it("Letting it finish.", () => {
    let counter = 0;

    setIntervalX(() => counter++, 1000, 5);

    vi.advanceTimersByTime(10_000);

    // It stops by itself after 5 repetitions
    expect(counter).toEqual(5);
  });

  it("Passes the extra arguments to the handler.", () => {
    const handler = vi.fn();

    setIntervalX(handler, 100, 2, "a", 1);

    vi.advanceTimersByTime(1000);

    expect(handler).toHaveBeenCalledTimes(2);
    expect(handler).toHaveBeenCalledWith("a", 1);
  });
});
