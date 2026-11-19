import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizard-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizard-vs-examghost" />;
}
