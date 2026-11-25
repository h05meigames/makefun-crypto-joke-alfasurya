// Laugh Track: The Crypto Trading Joke Contest — make.fun entry.
// The grader runs this program in a sandbox (Node 22, no network).
// It writes one joke to /output/entry.txt (the file the gate checks:
// UTF-8 text, 1 to 200 characters, not only whitespace) and prints the
// same line to stdout. The program validates its own output and exits
// non-zero if the line breaks the gate, so a bad draft fails loudly
// instead of submitting an invalid entry.
//
// DRAFT v1 — first attempt at the line. Deliberately written long and
// loose to test the guard; see the revision note after the first run.
//
// REVISION (v2): the v1 draft failed its own gate check — 216
// characters, 16 over the 200 cap — and the run exited non-zero without
// writing anything. Two real defects, both fixed here:
//   1. Length: cut the trailing pile-up ("admission is free, the exit
//      is locked, and the gift shop only sells hopium") down to a single
//      payoff, and trimmed "trust me, bro" to "trust me". The line is
//      now 157 characters.
//   2. Punchline placement: v1 stacked three jokes after the setup, so
//      no single line landed last; the judge brief wants the punchline
//      at the end. v2 keeps one setup (bought the dip at 3am, chart
//      whispered "trust me") and one turn (the portfolio is a museum
//      of coins I swore I'd sell at the top) ending on the locked exit
//      — the bag-holder truth, as the last word.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I bought the dip at 3am because the chart whispered 'trust me' — now my portfolio is a museum of coins I swore I'd sell at the top, and the exit is locked.";

if ([...JOKE].length < 1 || [...JOKE].length > 200 || JOKE.trim().length === 0) {
  console.error(
    `Gate check failed: entry is ${[...JOKE].length} characters (must be 1-200, not only whitespace).`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(JOKE);
