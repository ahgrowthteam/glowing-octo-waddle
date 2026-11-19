import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("testwhiz-vs-examghost");

export default function Page() {
    return <LeanCompare slug="testwhiz-vs-examghost" />;
}
