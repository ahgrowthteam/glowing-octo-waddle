import { permanentRedirect } from "next/navigation";

// The old comparison hub now lives at /compare. Keep this URL alive as a permanent (308) redirect.
export default function Page() {
    permanentRedirect("/compare");
}
