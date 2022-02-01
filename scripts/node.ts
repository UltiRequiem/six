import { build } from "https://deno.land/x/dnt/mod.ts";

const username = "ultirequiem";
const description = "Limit the amount of times that setInterval will fire";
const packageName = "six";

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./node",
  shims: {
    deno: true,
  },
  package: {
    name: `@${username}/${packageName}`,
    version: Deno.args[0],
    description,
    license: "MIT",
    repository: {
      type: "git",
      url: `git+https://github.com/${username}/${packageName}.git`,
    },
    bugs: {
      url: `https://github.com/${username}/${packageName}/issues`,
    },
  },
});

await Deno.copyFile("license.md", "node/license");
await Deno.copyFile("readme.md", "node/readme.md");
