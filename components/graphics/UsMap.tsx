"use client";

import type { GeoJsonObject } from "geojson";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import geo from "@/public/data/us-states-10m.json";

const topology = geo as unknown as GeoJsonObject;

export function UsMap() {
  return (
    <div
      role="img"
      aria-label="Map of the United States. Estimating coverage includes all 50 states."
      className="overflow-hidden rounded-xl border border-line bg-surface p-3 shadow-[var(--shadow)]"
    >
      <ComposableMap projection="geoAlbersUsa" width={800} height={500} className="h-auto w-full">
        <Geographies geography={topology}>
          {({ geographies }) =>
            geographies.map((item) => (
              <Geography
                key={item.rsmKey}
                geography={item}
                tabIndex={-1}
                className="us-state"
                fill="var(--brand-tint)"
                stroke="var(--brand)"
                strokeWidth={0.8}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
}
