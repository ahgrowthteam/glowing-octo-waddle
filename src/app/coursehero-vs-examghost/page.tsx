import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("coursehero-vs-examghost");

export default function Page() {
    return <LeanCompare slug="coursehero-vs-examghost" />;
}
