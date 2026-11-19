import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("cengage-mindtap-webassign-solver");

export default function Page() {
    return <LeanPlatform slug="cengage-mindtap-webassign-solver" />;
}
