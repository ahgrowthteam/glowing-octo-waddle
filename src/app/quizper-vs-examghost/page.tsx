import { permanentRedirect } from "next/navigation";

// quizper.ai is NXDOMAIN with no CWS extension. Consolidate to /compare.
export default function Page() {
    permanentRedirect("/compare");
}
