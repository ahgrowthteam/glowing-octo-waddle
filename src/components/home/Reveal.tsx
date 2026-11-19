import React from "react";

// Fade-and-rise as a section scrolls into view. Pure CSS (see .reveal in globals.css):
// content is fully visible by default, and browsers without scroll-driven animations skip the motion.
export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return <div className={`reveal ${className}`}>{children}</div>;
}
