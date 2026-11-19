import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("questionai-vs-examghost");

export default function Page() {
    return <LeanCompare slug="questionai-vs-examghost" />;
}
