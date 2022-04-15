// deno-lint-ignore-file no-explicit-any

/**
 * Limit the amount of times that setInterval will fire.
 *
 * @example
 * ```javascript
 * import { setIntervalX } from "https://deno.land/x/six/mod.ts";
 * import { randomNumber } from "https://deno.land/x/random_number/mod.ts";
 *
 * const API_URL = "https://leap.deno.dev";
 *
 * async function checkAPIStatus() {
 *    const randomYear = randomNumber({ min: 2000, max: 10_000});
 *
 *    const response = await fetch(`${API_URL}/${randomYear}`);
 *    const data = await response.json();
 *
 *    console.log(`Is ${randomYear} a leap year? ${data.leapYear}.`);
 * }
 *
 * setIntervalX(checkAPIStatus, 2000, 15);
 * ```
 */
export function setIntervalX(
  handler: (...args: any[]) => any,
  timeout: number,
  repetitions: number,
  ...args: any[]
) {
  let x = 0;

  const interval = setInterval(() => {
    handler(...args);

    if (++x === repetitions) {
      clearInterval(interval);
    }
  }, timeout);

  return interval;
}
