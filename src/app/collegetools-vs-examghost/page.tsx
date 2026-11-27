import { permanentRedirect } from "next/navigation";

// collegetools.io redirects 301 to mindko.com (rebrand). Consolidate with a permanent redirect.
export default function Page() {
    permanentRedirect("/mindko-vs-examghost");
}
