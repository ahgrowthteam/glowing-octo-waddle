"use client";

import React, { useEffect, useRef, useState } from "react";

// Loads and plays a muted looping video only while it is on screen, so many videos on one page stay cheap.
// If the video fails to load (blocked, 404, unsupported), it renders nothing so a fallback behind it shows.
export default function LazyVideo({
    src,
    poster,
    className = "",
    label,
    fallback,
    defer = false,
}: {
    src: string;
    poster?: string;
    className?: string;
    label?: string;
    fallback?: React.ReactNode;
    /** Don't fetch until the page has fully loaded and gone idle (for above-the-fold videos). */
    defer?: boolean;
}) {
    const ref = useRef<HTMLVideoElement>(null);
    const [load, setLoad] = useState(false);
    const [failed, setFailed] = useState(false);
    const [ready, setReady] = useState(!defer);

    // Above-the-fold videos wait until the page has loaded and gone idle, and skip entirely for
    // visitors who ask for reduced motion or data saving. The fallback graphic stays instead.
    useEffect(() => {
        if (!defer) return;
        const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || nav.connection?.saveData || /(^|-)2g$/.test(nav.connection?.effectiveType ?? "")) {
            setFailed(true);
            return;
        }
        let timer: ReturnType<typeof setTimeout>;
        const start = () => {
            timer = setTimeout(() => setReady(true), 1800);
        };
        if (document.readyState === "complete") start();
        else window.addEventListener("load", start, { once: true });
        return () => {
            clearTimeout(timer);
            window.removeEventListener("load", start);
        };
    }, [defer]);

    useEffect(() => {
        const el = ref.current;
        if (!el || typeof IntersectionObserver === "undefined") {
            setLoad(true);
            return;
        }
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setLoad(true);
                    el.play?.().catch(() => {});
                } else {
                    el.pause?.();
                }
            },
            { rootMargin: "200px" }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [failed]);

    const video = failed ? null : (
        <video
            ref={ref}
            className={fallback ? `absolute inset-0 ${className}` : className}
            src={load && ready ? src : undefined}
            poster={poster}
            muted
            loop
            playsInline
            autoPlay
            preload="none"
            aria-label={label}
            onError={() => setFailed(true)}
        />
    );
    if (!fallback) return video;
    return (
        <div className="relative w-full h-full">
            {fallback}
            {video}
        </div>
    );
}
