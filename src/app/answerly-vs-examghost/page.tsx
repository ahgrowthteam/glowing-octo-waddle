import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("answerly-vs-examghost");

export default function Page() {
    return <LeanCompare slug="answerly-vs-examghost" />;
}
