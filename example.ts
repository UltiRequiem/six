import setIntervalX from "https://deno.land/x/six/mod.ts";
import randomNumber from "https://deno.land/x/random_number/mod.ts";

const API_URL = "https://leap-year.ultirequiem.repl.co";

async function checkAPIStatus() {
  const startTime = performance.now();

  const randomYear = randomNumber({ min: 2000, max: 10_000, integer: true });

  const response = await fetch(`${API_URL}/${randomYear}`);

  const data = await response.json();

  console.log(`Is ${randomYear} a leap year? ${data.leapYear}.`);

  const entTime = performance.now();

  console.log(`Request took ${(entTime - startTime) / 1000} seconds.`);
}

setIntervalX(checkAPIStatus, 2000, 15);
