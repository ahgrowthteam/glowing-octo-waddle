import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("quizloader-vs-examghost");

export default function Page() {
    return <LeanCompare slug="quizloader-vs-examghost" />;
}
