import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("studyx-vs-examghost");

export default function Page() {
    return <LeanCompare slug="studyx-vs-examghost" />;
}
