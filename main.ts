// Dad Joke Showdown — one dad joke, written to the grader's output file.
//
// The joke is the whole entry: a single dad joke of at most 200 characters,
// told out loud the way a father would tell it at the dinner table.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I asked my dad why he keeps a ladder in the kitchen. He said, 'For high tea.'";

// Self-check: the gate needs UTF-8 text of 1 to 200 characters, not only
// white space. Fail loudly instead of shipping an invalid entry.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  console.error(`invalid joke: ${JOKE.length} characters`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to entry.txt`);
