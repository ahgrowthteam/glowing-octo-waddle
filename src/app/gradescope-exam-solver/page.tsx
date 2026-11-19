import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("gradescope-exam-solver");

export default function Page() {
    return <LeanPlatform slug="gradescope-exam-solver" />;
}
