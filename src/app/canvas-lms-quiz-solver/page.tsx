import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("canvas-lms-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="canvas-lms-quiz-solver" />;
}
