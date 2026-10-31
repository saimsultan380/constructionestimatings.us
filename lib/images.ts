import fs from "node:fs";
import path from "node:path";

export type ImageSlot = {
  id: string;
  section: string;
  brief: string;
  ratio: string;
};

export function publicImage(section: string, slotId: string) {
  const relative = `/images/${section}/${slotId}.webp`;
  const absolute = path.join(process.cwd(), "public", relative.slice(1));
  return fs.existsSync(absolute) ? relative : null;
}
