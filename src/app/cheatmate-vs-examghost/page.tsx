import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("cheatmate-vs-examghost");

export default function Page() {
    return <LeanCompare slug="cheatmate-vs-examghost" />;
}
