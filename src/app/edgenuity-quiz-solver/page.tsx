import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("edgenuity-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="edgenuity-quiz-solver" />;
}
