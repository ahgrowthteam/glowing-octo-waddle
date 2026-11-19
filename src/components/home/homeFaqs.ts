// The homepage FAQ (and its FAQPage JSON-LD) is a subset of the shared FAQ data.
// Edit questions in src/data/faqs.ts; set `home: true` to show one on the homepage.
import { FAQS } from "@/data/faqs";

export const HOME_FAQS = FAQS.filter((f) => f.home).map((f) => ({ q: f.q, a: f.a }));
