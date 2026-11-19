import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("classology-vs-examghost");

export default function Page() {
    return <LeanCompare slug="classology-vs-examghost" />;
}
