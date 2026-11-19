import LeanPlatform, { leanPlatformMetadata } from "@/components/platform/LeanPlatform";

export const metadata = leanPlatformMetadata("pearson-mylab-mastering-solver");

export default function Page() {
    return <LeanPlatform slug="pearson-mylab-mastering-solver" />;
}
