import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("brainly-vs-examghost");

export default function Page() {
    return <LeanCompare slug="brainly-vs-examghost" />;
}
