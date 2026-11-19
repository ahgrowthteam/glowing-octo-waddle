import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("answerai-vs-examghost");

export default function Page() {
    return <LeanCompare slug="answerai-vs-examghost" />;
}
