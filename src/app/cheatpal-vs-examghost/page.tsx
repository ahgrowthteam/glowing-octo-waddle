import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("cheatpal-vs-examghost");

export default function Page() {
    return <LeanCompare slug="cheatpal-vs-examghost" />;
}
