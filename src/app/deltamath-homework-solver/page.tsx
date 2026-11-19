import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("deltamath-homework-solver");

export default function Page() {
    return <LeanPlatform slug="deltamath-homework-solver" />;
}
