import Image from "next/image";
import { publicImage } from "@/lib/images";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { cn } from "@/lib/cn";

export function SlotVisual({
  section,
  slotId,
  brief,
  ratio,
  priority = false,
  className,
  sizes = "(min-width: 1024px) 480px, 100vw",
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

  if (!src) {
    return <PlaceholderImage slotId={slotId} ratio={ratio} brief={brief} className={className} />;
  }

  return (
    <Image
      src={src}
      alt={brief}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}
