import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("cramly-vs-examghost");

export default function Page() {
    return <LeanCompare slug="cramly-vs-examghost" />;
}
