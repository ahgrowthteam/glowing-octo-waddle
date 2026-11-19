import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvasanswers-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvasanswers-vs-examghost" />;
}
