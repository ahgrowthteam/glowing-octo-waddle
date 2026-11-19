import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("examclutch-vs-examghost");

export default function Page() {
    return <LeanCompare slug="examclutch-vs-examghost" />;
}
