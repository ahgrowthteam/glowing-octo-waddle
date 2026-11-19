import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizper-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizper-vs-examghost" />;
}
