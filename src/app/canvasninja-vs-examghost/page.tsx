import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvasninja-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvasninja-vs-examghost" />;
}
