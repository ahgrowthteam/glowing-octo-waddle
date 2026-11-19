import { permanentRedirect } from "next/navigation";

// Duplicate of /classology-vs-examghost (typo alias). Consolidate with a permanent redirect.
export default function Page() {
    permanentRedirect("/classology-vs-examghost");
}
