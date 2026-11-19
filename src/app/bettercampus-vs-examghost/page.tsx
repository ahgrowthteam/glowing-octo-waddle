import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("bettercampus-vs-examghost");

export default function Page() {
    return <LeanCompare slug="bettercampus-vs-examghost" />;
}
