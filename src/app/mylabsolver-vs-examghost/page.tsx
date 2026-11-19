import LeanCompare, { leanCompareMetadata } from "@/components/compare/LeanCompare";

export const metadata = leanCompareMetadata("mylabsolver-vs-examghost");

export default function Page() {
    return <LeanCompare slug="mylabsolver-vs-examghost" />;
}
