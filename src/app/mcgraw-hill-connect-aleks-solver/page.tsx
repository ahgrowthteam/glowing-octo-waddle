import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("mcgraw-hill-connect-aleks-solver");

export default function Page() {
    return <LeanPlatform slug="mcgraw-hill-connect-aleks-solver" />;
}
