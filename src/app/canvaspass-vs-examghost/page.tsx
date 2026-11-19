import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvaspass-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvaspass-vs-examghost" />;
}
