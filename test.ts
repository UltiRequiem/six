import { setIntervalX } from "./mod.ts";
import { assertEquals } from "https://deno.land/std@0.161.0/testing/asserts.ts";
import { sleep } from "https://deno.land/x/sleep@v1.2.1/mod.ts";

Deno.test("setIntervalX", async (context) => {
  await context.step("Cutting it before time.", async () => {
    let counter = 0;

    const interval = setIntervalX(() => counter++, 1000, 5);

    await sleep(3.5);

    // Kill the interval before it runs the specified amount of times
    clearInterval(interval);

    // The interval only got enough time to run 3 times
    assertEquals(counter, 3);
  });

  await context.step("Letting it finish.", async () => {
    let counter = 0;

    setIntervalX(() => counter++, 1000, 5);

    await sleep(5.5);

    assertEquals(counter, 5);
  });
});
