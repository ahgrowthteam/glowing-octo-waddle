import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("gauth-vs-examghost");

export default function Page() {
    return <LeanCompare slug="gauth-vs-examghost" />;
}
