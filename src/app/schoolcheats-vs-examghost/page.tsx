import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("schoolcheats-vs-examghost");

export default function Page() {
    return <LeanCompare slug="schoolcheats-vs-examghost" />;
}
