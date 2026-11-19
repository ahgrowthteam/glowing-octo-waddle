import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizwizard-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizwizard-vs-examghost" />;
}
