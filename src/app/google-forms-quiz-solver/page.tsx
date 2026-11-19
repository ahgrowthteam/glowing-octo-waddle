import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("google-forms-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="google-forms-quiz-solver" />;
}
