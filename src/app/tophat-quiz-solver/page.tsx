import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("tophat-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="tophat-quiz-solver" />;
}
