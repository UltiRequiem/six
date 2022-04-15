# six

[![codecov](https://codecov.io/gh/ultirequiem/six/branch/main/graph/badge.svg)](https://codecov.io/gh/ultirequiem/six)
[![deno doc](https://doc.deno.land/badge.svg)](https://doc.deno.land/https/deno.land/x/six/mod.ts)

> Set Interval X

Limit the amount of times that `setInterval` will fire.

> Made for
> [this StackOverflow Question](https://stackoverflow.com/questions/2956966) 😆

## Usage

### [Deno 🚀](https://deno.land/x/six)

```javascript
import { setIntervalX } from "https://deno.land/x/six/mod.ts";
import { randomNumber } from "https://deno.land/x/random_number/mod.ts";

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
```

### [Node.js 🐢](https://www.npmjs.com/package/@ultirequiem/six)

```typescript
import { setIntervalX } from "@ultirequiem/six";
```

### [Browser 🕸](https://developer.mozilla.org/en-US/docs/Glossary/Browser)

You can use any [CDN](https://en.wikipedia.org/wiki/Content_delivery_network) 🔥

Eg. [ESM](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
▶ [SkyPack](https://cdn.skypack.dev/@ultirequiem/six) _/_
[script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script) ▶
[JSDelivr](https://cdn.jsdelivr.net/npm/@ultirequiem/six).

The API is the same on all this platforms.

## API

[Autogenerated Documentation](https://doc.deno.land/https://deno.land/x/six/mod.ts)
🚀

## Support

Open an Issue, I will check it a soon as possible 👀

If you want to hurry me up a bit
[send me a tweet](https://twitter.com/intent/tweet?text=%40UltiRequiem%20) 😆

Consider [supporting me on Patreon](https://patreon.com/UltiRequiem) if you like
my work 🚀

Don't forget to start the repo ⭐

## Versioning

We use [SemVer](http://semver.org) for versioning. For the versions available,
see the [tags](https://github.com/UltiRequiem/six/tags).

## Authors

[Eliaz Bobadilla (a.k.a UltiRequiem)](https://ultirequiem.com) - Creator and
Maintainer 💪

See also the full list of
[contributors](https://github.com/UltiRequiem/six/contributors) who participated
in this project.

## Licence

Released under the MIT Licence.
