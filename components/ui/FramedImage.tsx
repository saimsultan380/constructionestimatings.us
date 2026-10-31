import Image from "next/image";
import { publicImage } from "@/lib/images";
import { cn } from "@/lib/cn";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function FramedImage({
  section,
  slotId,
  brief,
  ratio,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 540px, 100vw",
}: {
  section: string;
  slotId: string;
  brief: string;
  ratio: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  const src = publicImage(section, slotId);
  const [w, h] = ratio.split("/").map((part) => Number(part.trim()));

  return (
    <div
      className={cn("relative overflow-hidden rounded-xl bg-surface-tint", className)}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      {src ? (
        <Image
          src={src}
          alt={brief}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <PlaceholderImage slotId={slotId} ratio={ratio} brief={brief} className="h-full" />
        </div>
      )}
    </div>
  );
}
