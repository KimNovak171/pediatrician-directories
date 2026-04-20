const fs = require("fs");
const path = require("path");

const outDir = path.join(process.cwd(), "out");

function walkAndCleanTxt(dir) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walkAndCleanTxt(fullPath);
      continue;
    }
    if (!entry.isFile()) continue;

    const nameLower = entry.name.toLowerCase();
    if (!nameLower.endsWith(".txt")) continue;
    if (nameLower === "robots.txt") continue;

    try {
      fs.unlinkSync(fullPath);
    } catch {
      // ignore missing or permission errors
    }
  }
}

if (!fs.existsSync(outDir)) {
  process.exit(0);
}

walkAndCleanTxt(outDir);
