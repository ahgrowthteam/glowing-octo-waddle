import type { CompareEditorialEntry } from "./compare-editorial-types";
import { EDITORIAL_BATCH_1 } from "./compare-editorial-batch1";
import { EDITORIAL_BATCH_2 } from "./compare-editorial-batch2";
import { EDITORIAL_BATCH_3 } from "./compare-editorial-batch3";

export type { CompareEditorialEntry, EditorialFaq, EditorialVerdict } from "./compare-editorial-types";

export const COMPARE_EDITORIAL: Record<string, CompareEditorialEntry> = {
    ...EDITORIAL_BATCH_1,
    ...EDITORIAL_BATCH_2,
    ...EDITORIAL_BATCH_3,
};

export function editorialFor(slug: string): CompareEditorialEntry | undefined {
    return COMPARE_EDITORIAL[slug];
}
