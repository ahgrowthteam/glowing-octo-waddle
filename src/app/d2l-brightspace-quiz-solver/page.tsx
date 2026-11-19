import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("d2l-brightspace-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="d2l-brightspace-quiz-solver" />;
}
