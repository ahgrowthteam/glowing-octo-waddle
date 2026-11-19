import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvasquiz-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvasquiz-vs-examghost" />;
}
