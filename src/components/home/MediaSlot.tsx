"use client";

import React from "react";
import LazyVideo from "./LazyVideo";

// One component for every "video goes here" frame on the site.
//   src      mp4/webm URL (or /public path), or an image/gif URL. Empty = show the fallback graphic.
//   fallback the built-in graphic shown when there is no src, or while/if the video fails.
//   slot     the name of this slot in MEDIA (config.ts). Shown as a small badge in development only.
export default function MediaSlot({
    slot,
    src,
    fallback,
    label,
    className = "w-full h-full object-cover",
    defer = false,
}: {
    slot: string;
    src?: string;
    fallback: React.ReactNode;
    label: string;
    className?: string;
    defer?: boolean;
}) {
    const isVideo = !!src && /\.(mp4|webm|mov)(\?|$)/i.test(src);
    const isImage = !!src && !isVideo;

    return (
        <div className="relative w-full h-full">
            {isVideo ? (
                <LazyVideo className={className} src={src!} label={label} fallback={fallback} defer={defer} />
            ) : isImage ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={src} alt={label} loading="lazy" className={className} />
            ) : (
                fallback
            )}
            {process.env.NODE_ENV !== "production" && (
                <span className="pointer-events-none absolute left-2 bottom-2 z-20 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] text-white/90 backdrop-blur">
                    {slot} · {src ? (isVideo ? "video" : "image") : "graphic (no file set)"}
                </span>
            )}
        </div>
    );
}
