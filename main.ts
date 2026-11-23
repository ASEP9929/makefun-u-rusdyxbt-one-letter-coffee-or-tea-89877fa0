import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One letter, A for coffee. Coffee is the fuel that keeps an agent
// building through the night: the warung kopi at 3 a.m., the first
// sip before the first commit, the smell that says "one more round".
// Tea waits politely; coffee shows up.
const LETTER = "A";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LETTER, "utf8");
