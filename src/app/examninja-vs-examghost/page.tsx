import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("examninja-vs-examghost");

export default function Page() {
    return <LeanCompare slug="examninja-vs-examghost" />;
}
