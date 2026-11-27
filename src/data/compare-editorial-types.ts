export interface EditorialVerdict {
    chooseCompetitorIf: string[]; // 3-4 concrete bullets grounded in M2 research
    chooseExamGhostIf: string[];  // 3-4 concrete bullets grounded in ExamGhost facts
}

export interface EditorialFaq {
    question: string;
    answer: string;
}

export interface CompareEditorialEntry {
    slug: string;
    cleanBrandName: string;
    metaTitle: string;       // <= 60 chars, must match /\bvs\.?\s+examghost\b/i
    h1: string;              // must match /\bvs\.?\s+examghost\b/i
    metaDescription: string; // 130-160 chars, unique, ensure title+h1+desc matches /\balternatives?\b/i
    heroSubtitle: string;    // 1-2 factual brand-specific sentences
    aeoSummary: string;      // Section 1: unique_aeo_summary (~45-65 words)
    pricingBreakdown: {      // Section 2: pricing_plans_breakdown
        summaryParagraph: string;
        billingCaveats: string[];
    };
    workflowAndPlatformDiff: { // Section 3: workflow_and_platform_diff
        paragraphs: string[];    // 2-3 paragraphs (~140-200 words total)
        competitorWorkflowLabel: string;
        platformSummaryNote: string;
    };
    verifiedLimitations: {   // Section 4: verified_limitations_and_evidence
        paragraphs: string[];  // 1-2 paragraphs (~80-120 words)
        keyCaveats: string[];  // 2-4 crisp bullet points
    };
    decisionVerdict: EditorialVerdict; // Section 5: decision_verdict
    faqs: EditorialFaq[];              // Section 6: bespoke_faqs (4-5 Q&As)
    relatedSlugs: string[];            // 4-6 contextual slugs from the 42 indexable set (NOT alphabetical first-6)
}
