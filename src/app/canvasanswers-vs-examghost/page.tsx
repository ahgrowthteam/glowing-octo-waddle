import { permanentRedirect } from "next/navigation";

// canvasanswers.com redirects downloads to SmartSolve (smartsolve.ai). Consolidate with a permanent redirect.
export default function Page() {
    permanentRedirect("/smartsolve-vs-examghost");
}
