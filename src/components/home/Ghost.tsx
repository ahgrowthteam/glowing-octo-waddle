import React from "react";

export default function Ghost({ size = 20, className = "" }: { size?: number; className?: string }) {
    return (
        <span
            className={`inline-block rounded-full overflow-hidden bg-[#c4d0f8] shrink-0 ${className}`}
            style={{ width: size, height: size }}
        >
            <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={size} height={size} className="w-full h-full object-cover scale-110" />
        </span>
    );
}
