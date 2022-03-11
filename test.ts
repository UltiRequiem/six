import { setIntervalX } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.129.0/testing/asserts.ts";
import { sleep } from "https://deno.land/x/sleep@v1.2.1/mod.ts";

Deno.test("setIntervalX", async () => {
  let counter = 0;

  const interval = setIntervalX(() => counter++, 1000, 5);

  await sleep(3.5);

  // Kill the interval before it runs the specified amount of times
  clearInterval(interval);

  // The interval only got enough time to run 3 times
  assertEquals(counter, 3);
});
