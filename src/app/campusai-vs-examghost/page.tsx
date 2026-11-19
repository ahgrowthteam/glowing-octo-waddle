import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("campusai-vs-examghost");

export default function Page() {
    return <LeanCompare slug="campusai-vs-examghost" />;
}
