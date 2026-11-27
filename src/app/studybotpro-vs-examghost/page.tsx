import { permanentRedirect } from "next/navigation";

// studybotpro.co is expired/unreachable with stale CWS listing. Consolidate to /compare.
export default function Page() {
    permanentRedirect("/compare");
}
