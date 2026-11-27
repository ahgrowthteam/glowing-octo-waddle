import { permanentRedirect } from "next/navigation";

// mylabsolver.com is permanently discontinued. Consolidate to /compare.
export default function Page() {
    permanentRedirect("/compare");
}
