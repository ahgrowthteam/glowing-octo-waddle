import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizboost-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizboost-vs-examghost" />;
}
