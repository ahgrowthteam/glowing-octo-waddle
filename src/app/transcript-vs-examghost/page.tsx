import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("transcript-vs-examghost");

export default function Page() {
    return <LeanCompare slug="transcript-vs-examghost" />;
}
