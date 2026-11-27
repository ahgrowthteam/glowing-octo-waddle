import { permanentRedirect } from "next/navigation";

// cheatpal.com is a parked for-sale domain with no active extension. Consolidate to /compare.
export default function Page() {
    permanentRedirect("/compare");
}
