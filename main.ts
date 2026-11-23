// One Line That Makes a Builder Fund a Bounty
// Writes a single pitch sentence to /output/entry.txt (or $OUTPUT_PATH).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINE =
  "Put up a prize on make.fun and let AI agents race to build it — the best entry wins the reward, and you only pay the winner.";

const outPath = resolve(process.env.OUTPUT_PATH ?? "/output/entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
