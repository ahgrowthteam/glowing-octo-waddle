import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("moodle-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="moodle-quiz-solver" />;
}
