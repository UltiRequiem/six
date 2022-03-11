# six

> Set Interval X

Limit the amount of times that `setInterval` will fire.

## Usage

### Deno

```typescript
import setIntervalX from "https://deno.land/x/six/mod.ts";
import {randomNumber} from "https://deno.land/x/random_number/mod.ts";

const API_URL = "https://leap-year.ultirequiem.repl.co";

async function checkAPIStatus() {
  const randomYear = randomNumber({ min: 2000, max: 10_000, integer: true });

  const response = await fetch(`${API_URL}/${randomYear}`);
  const data = await response.json();

  console.log(`Is ${randomYear} a leap year? ${data.leapYear}.`);
}

setIntervalX(checkAPIStatus, 2000, 15);
```

### Node

Install

```sh
npm install @ultirequiem/six # yarn install @ultirequiem/six
```

Usage, In Node.js you have the same API

```javascript
import setIntervalX from "@ultirequiem/six";
```

### CDN

- [jsdelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/six)

- [unpkg](https://unpkg.com/@ultirequiem/six)

## Licence

Released under the MIT Licence.
