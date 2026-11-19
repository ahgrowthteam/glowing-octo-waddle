import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("silentstudent-vs-examghost");

export default function Page() {
    return <LeanCompare slug="silentstudent-vs-examghost" />;
}
