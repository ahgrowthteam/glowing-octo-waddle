import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("homework-helper-vs-examghost");

export default function Page() {
    return <LeanCompare slug="homework-helper-vs-examghost" />;
}
