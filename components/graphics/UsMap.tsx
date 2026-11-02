"use client";

import { useState, type FocusEvent, type MouseEvent } from "react";
import type { GeoJsonObject } from "geojson";
import { geoCentroid } from "d3-geo";
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import { labelOffsets, stateAbbr } from "@/lib/usStates";
import geo from "@/public/data/us-states-10m.json";

const topology = geo as unknown as GeoJsonObject;

type HoverState = {
  name: string;
  x: number;
  y: number;
};

function relativePoint(event: MouseEvent | FocusEvent, target: Element): { x: number; y: number } {
  const wrap = target.closest("[data-us-map]") as HTMLElement | null;
  const wrapBox = wrap?.getBoundingClientRect();
  if (!wrapBox) return { x: 0, y: 0 };

  if ("clientX" in event && event.clientX) {
    return { x: event.clientX - wrapBox.left, y: event.clientY - wrapBox.top };
  }

  const box = target.getBoundingClientRect();
  return {
    x: box.left + box.width / 2 - wrapBox.left,
    y: box.top + box.height / 2 - wrapBox.top,
  };
}

export function UsMap() {
  const [hover, setHover] = useState<HoverState | null>(null);

  return (
    <div
      data-us-map
      role="img"
      aria-label="Map of the United States. Estimating coverage includes all 50 states."
      className="relative overflow-hidden rounded-xl border border-line bg-surface p-3 shadow-[var(--shadow)]"
      onMouseLeave={() => setHover(null)}
    >
      <ComposableMap projection="geoAlbersUsa" width={800} height={500} className="h-auto w-full">
        <Geographies geography={topology}>
          {({ geographies }) => (
            <>
              {geographies.map((item) => {
                const name = String(item.properties?.name || "");
                const active = hover?.name === name;
                return (
                  <Geography
                    key={item.rsmKey}
                    geography={item}
                    tabIndex={0}
                    className="us-state outline-none transition-[fill] duration-150"
                    fill={active ? "var(--accent)" : "var(--brand)"}
                    stroke="#ffffff"
                    strokeWidth={0.85}
                    onMouseEnter={(event) => {
                      const point = relativePoint(event, event.currentTarget);
                      setHover({ name, ...point });
                    }}
                    onMouseMove={(event) => {
                      const point = relativePoint(event, event.currentTarget);
                      setHover({ name, ...point });
                    }}
                    onFocus={(event) => {
                      const point = relativePoint(event, event.currentTarget);
                      setHover({ name, ...point });
                    }}
                    onBlur={() => setHover(null)}
                  />
                );
              })}
              {geographies.map((item) => {
                const name = String(item.properties?.name || "");
                const abbr = stateAbbr[name];
                if (!abbr) return null;
                const centroid = geoCentroid(item as never);
                if (!Number.isFinite(centroid[0]) || !Number.isFinite(centroid[1])) return null;
                const [dx, dy] = labelOffsets[name] || [0, 0];
                const active = hover?.name === name;
                return (
                  <Marker key={`${item.rsmKey}-label`} coordinates={centroid}>
                    <text
                      textAnchor="middle"
                      y={2 + dy}
                      x={dx}
                      className="pointer-events-none select-none"
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        fill: active ? "var(--ink)" : "#ffffff",
                        fontFamily: "var(--font-inter), Inter, sans-serif",
                      }}
                    >
                      {abbr}
                    </text>
                  </Marker>
                );
              })}
            </>
          )}
        </Geographies>
      </ComposableMap>

      {hover ? (
        <div
          className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-[120%] rounded-lg bg-ink px-3 py-1.5 text-sm font-semibold text-surface shadow-[var(--shadow-soft)]"
          style={{ left: hover.x, top: hover.y }}
        >
          {hover.name}
        </div>
      ) : null}
    </div>
  );
}
