import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("sakai-lms-quiz-solver");

export default function Page() {
    return <LeanPlatform slug="sakai-lms-quiz-solver" />;
}
