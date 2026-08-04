import { cn } from "@/lib/utils";

type MatterportEmbedProps = {
  /** `m=` reikšmė iš Matterport dalinimosi nuorodos. */
  modelId: string;
  title: string;
  className?: string;
};

/**
 * Įterptas Matterport 3D turas.
 *
 * Proporcija fiksuota (16:9), kad puslapis „nešoktų" kraunantis turui.
 * `loading="lazy"` – turas kraunamas tik prislinkus iki jo.
 */
export function MatterportEmbed({
  modelId,
  title,
  className,
}: MatterportEmbedProps) {
  const src = `https://my.matterport.com/show/?m=${encodeURIComponent(modelId)}&play=1&qs=1`;

  return (
    <div
      className={cn(
        "border-border bg-surface aspect-video w-full overflow-hidden rounded-lg border",
        className,
      )}
    >
      <iframe
        src={src}
        title={`3D turas: ${title}`}
        className="h-full w-full"
        loading="lazy"
        allow="xr-spatial-tracking; fullscreen; accelerometer; gyroscope"
        allowFullScreen
      />
    </div>
  );
}
