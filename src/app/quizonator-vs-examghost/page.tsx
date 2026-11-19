import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizonator-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizonator-vs-examghost" />;
}
