import { setIntervalX } from "./mod.ts";
import { randomNumber } from "https://deno.land/x/random_number@2.0.0/mod.ts";

const API_URL = "https://leap.deno.dev";

async function checkAPIStatus() {
  const startTime = performance.now();

  const randomYear = randomNumber({ min: 2000, max: 10_000 });

  const response = await fetch(`${API_URL}/${randomYear}`);

  const data = await response.json();

  console.log(`Is ${randomYear} a leap year? ${data.leapYear}.`);

  const entTime = performance.now();

  console.log(`Request took ${(entTime - startTime) / 1000} seconds.`);
}

setIntervalX(checkAPIStatus, 2000, 15);
