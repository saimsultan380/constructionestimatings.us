import fs from "node:fs";
import path from "node:path";

const photos = [
  ["hero/hero-main", "photo-1503387762-592deb58ef4e", 1600, 1200],
  ["intro/intro-main", "photo-1503387837-b154d5074bd2", 1200, 1500],
  ["failures/solution-main", "photo-1454165804606-c3d57bc86b40", 1600, 1200],
  ["services/svc-cost", "photo-1581092160562-40aa08e78837", 1600, 1000],
  ["services/svc-design", "photo-1487958449943-2429e8be8625", 1200, 1600],
  ["services/svc-takeoff", "photo-1581092162384-8987c1d64718", 1600, 1000],
  ["services/svc-commercial", "photo-1508450859948-4e04fabaa4ea", 1600, 1000],
  ["services/svc-industrial", "photo-1553413077-190dd305871c", 1600, 1000],
  ["services/svc-residential", "photo-1570129477492-45c003edd2be", 1200, 1600],
  ["mep/mep-hvac", "photo-1586528116311-ad8dd3c8310d", 1600, 1200],
  ["mep/mep-electrical", "photo-1621905251189-08b45d6a269e", 1600, 1200],
  ["mep/mep-plumbing", "photo-1584622650111-993a426fbf0a", 1600, 1200],
  ["trades/trade-concrete", "photo-1531834685032-c34bf0d84c77", 1600, 1200],
  ["trades/trade-painting", "photo-1562259949-e8e7689d7828", 1600, 1200],
  ["trades/trade-steel", "photo-1429497419816-9ca5cfb4571a", 1600, 1200],
  ["trades/trade-lumber", "photo-1607400201889-565b1ee75f8e", 1600, 1200],
  ["trades/trade-millwork", "photo-1556912173-46c336c7fd55", 1600, 1200],
  ["trades/trade-demolition", "photo-1517581177682-a085bb7ffb15", 1600, 1200],
  ["trades/trade-solar", "photo-1509391366360-2e959784a276", 1600, 1200],
  ["trades/trade-flooring", "photo-1581858726788-75bc0f6a952d", 1600, 1200],
  ["serve/serve-main", "photo-1541888946425-d81bb19240f5", 1600, 1200],
];

for (const [slot, id, width, height] of photos) {
  const [section, name] = slot.split("/");
  const dir = path.join("public", "images", section);
  fs.mkdirSync(dir, { recursive: true });
  const file = path.join(dir, `${name}.webp`);
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&h=${height}&q=75&fm=webp`;
  const response = await fetch(url);
  if (!response.ok) {
    console.log("fail", slot, response.status);
    continue;
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  fs.writeFileSync(file, bytes);
  console.log("ok", slot, bytes.length);
}
