import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("zybooks-homework-solver");

export default function Page() {
    return <LeanPlatform slug="zybooks-homework-solver" />;
}
