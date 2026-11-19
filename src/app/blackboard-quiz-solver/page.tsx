import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("blackboard-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="blackboard-quiz-solver" />;
}
