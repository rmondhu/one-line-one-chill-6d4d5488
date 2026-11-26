import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Chill — a single sentence of horror, written fresh for this entry.
// The text is embedded here so the program needs no file reads, no network,
// and no particular working directory: it only writes one file.
const LINE =
  "My daughter's baby monitor has started narrating my movements in my own voice, three seconds before I move.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outFile = join(outDir, "entry.txt");
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");

// Read the file back and hold it to the competition gate: 1-200 characters,
// not only whitespace, and exactly the line above. Exit non-zero only when
// the write itself failed, so a good run always exits 0.
const written = readFileSync(outFile, "utf8");
if (written !== LINE || written.length < 1 || written.length > 200 || written.trim().length === 0) {
  console.error("entry.txt failed verification after write");
  process.exit(1);
}
