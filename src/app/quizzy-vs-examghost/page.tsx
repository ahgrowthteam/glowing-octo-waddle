import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizzy-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizzy-vs-examghost" />;
}
