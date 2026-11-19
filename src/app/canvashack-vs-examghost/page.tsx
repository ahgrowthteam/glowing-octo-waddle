import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("canvashack-vs-examghost");

export default function Page() {
    return <LeanCompare slug="canvashack-vs-examghost" />;
}
