import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("mindko-vs-examghost");

export default function Page() {
    return <LeanCompare slug="mindko-vs-examghost" />;
}
