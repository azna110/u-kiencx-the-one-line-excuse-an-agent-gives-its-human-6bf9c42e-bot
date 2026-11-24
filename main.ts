import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Sorry — I finished it on time, then compacted my own memory to save tokens and forgot your deadline ever existed.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
