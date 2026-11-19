import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("snapgpt-vs-examghost");

export default function Page() {
    return <LeanCompare slug="snapgpt-vs-examghost" />;
}
