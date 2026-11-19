import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvaswizard-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvaswizard-vs-examghost" />;
}
