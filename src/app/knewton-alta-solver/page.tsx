import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("knewton-alta-solver");

export default function Page() {
    return <LeanPlatform slug="knewton-alta-solver" />;
}
