import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("studyfox-vs-examghost");

export default function Page() {
    return <LeanCompare slug="studyfox-vs-examghost" />;
}
