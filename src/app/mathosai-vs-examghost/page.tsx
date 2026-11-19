import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("mathosai-vs-examghost");

export default function Page() {
    return <LeanCompare slug="mathosai-vs-examghost" />;
}
