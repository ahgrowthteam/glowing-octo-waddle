import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("cheatgpt-vs-examghost");

export default function Page() {
    return <LeanCompare slug="cheatgpt-vs-examghost" />;
}
