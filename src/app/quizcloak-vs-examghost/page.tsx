import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizcloak-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizcloak-vs-examghost" />;
}
