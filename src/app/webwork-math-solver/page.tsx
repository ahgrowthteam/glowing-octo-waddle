import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("webwork-math-solver");

export default function Page() {
    return <LeanPlatform slug="webwork-math-solver" />;
}
