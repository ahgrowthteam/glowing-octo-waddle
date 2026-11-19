import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("knowt-vs-examghost");

export default function Page() {
    return <LeanCompare slug="knowt-vs-examghost" />;
}
