import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("asksia-vs-examghost");

export default function Page() {
    return <LeanCompare slug="asksia-vs-examghost" />;
}
