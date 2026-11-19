import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("schoology-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="schoology-quiz-solver" />;
}
