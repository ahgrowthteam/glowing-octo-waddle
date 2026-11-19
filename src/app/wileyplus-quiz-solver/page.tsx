import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("wileyplus-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="wileyplus-quiz-solver" />;
}
