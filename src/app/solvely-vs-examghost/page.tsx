import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("solvely-vs-examghost");

export default function Page() {
    return <LeanCompare slug="solvely-vs-examghost" />;
}
