// Single source for the /features page: the catalog, the FAQ and the schema feature list.
// Every entry maps to something the extension does. Don't add a feature here that the extension doesn't have.

export type FeatureCategory = "Solve" | "Answer styles" | "Question types" | "Screenshots" | "Control";

export const FEATURE_CATEGORIES: FeatureCategory[] = ["Solve", "Answer styles", "Question types", "Screenshots", "Control"];

export interface Feature {
    id: string;
    category: FeatureCategory;
    title: string;
    body: string;
    /** Keyboard shortcut or gesture, shown as a small chip. */
    key?: string;
}

export const FEATURES: Feature[] = [
    // Solve
    { id: "double-click", category: "Solve", title: "Double-click to solve", body: "Double-click a question on the page and the answer is applied right there. No copy-paste, no switching tabs.", key: "Double-click" },
    { id: "scan-page", category: "Solve", title: "Scan the whole page", body: "Click Scan page & answer in the popup. ExamGhost scrolls the page, reads every question and fills in answers in batches, then lists them so you can copy them all." },
    { id: "subjects", category: "Solve", title: "Tuned for 13 subjects", body: "Math, physics, chemistry, biology, computer science, economics, history, accounting, geography, literature, psychology, English and logic. Harder subjects get more reasoning time." },
    { id: "equations", category: "Solve", title: "Reads equations and LaTeX", body: "Math written as equation images or LaTeX is rebuilt into text before it's solved, so formulas aren't lost on the way to the answer." },

    // Answer styles
    { id: "quick", category: "Answer styles", title: "Quick mode", body: "Fills in the answer and copies it to your clipboard. No panel, no extra clicks.", key: "Alt+1" },
    { id: "highlight", category: "Answer styles", title: "Highlight mode", body: "Marks the right option with a small ✓ and leaves the click to you.", key: "Alt+2" },
    { id: "explain", category: "Answer styles", title: "Explain mode", body: "Fills in the answer and slides in a side panel with the reasoning. Pin it open while you work through the next question.", key: "Alt+3" },
    { id: "delivery", category: "Answer styles", title: "Auto-fill, highlight or copy", body: "Choose how answers land: select the option for you, mark it so you click it yourself, or copy the text to paste into a written answer." },

    // Question types
    { id: "mcq", category: "Question types", title: "Multiple choice", body: "Single-answer questions are answered right next to the options." },
    { id: "multi", category: "Question types", title: "Multi-select", body: "Select-all-that-apply questions: the right boxes are checked and the wrong ones are cleared." },
    { id: "dropdown", category: "Question types", title: "Dropdowns and matching", body: "Dropdown menus and matching tables are filled in, including questions with several dropdowns in one passage." },
    { id: "short", category: "Question types", title: "Short answers and fill-in-the-blank", body: "Text boxes and short written answers are filled in on the page, or copied so you can paste them." },

    // Screenshots
    { id: "snip", category: "Screenshots", title: "Alt+S screenshot snip", body: "Drag a box around a graph, diagram, picture or any question you can see. ExamGhost reads the screenshot and solves it, with the working shown.", key: "Alt+S" },
    { id: "any-page", category: "Screenshots", title: "Works on any page you can see", body: "Double-click covers most quiz layouts. When a page doesn't respond, a screenshot solves whatever is on your screen." },
    { id: "image-questions", category: "Screenshots", title: "Image and diagram questions", body: "Questions built around a figure, chart or labelled diagram are solved from the picture, using the answer options on the page as context." },

    // Control
    { id: "switch", category: "Control", title: "Master on/off switch", body: "One toggle in the extension popup turns everything off, so shortcuts and double-click do nothing while you browse normally." },
    { id: "shortcuts", category: "Control", title: "Keyboard shortcuts", body: "Alt+1, Alt+2 and Alt+3 change the answer style. Alt+S starts a snip. Shortcuts stop working when the master switch is off." },
    { id: "free", category: "Control", title: "Free plan, no card", body: "5 solves a day on the free plan. Paid plans remove the daily limit, including screenshot solves, with a 14-day money-back guarantee." },
    { id: "theme", category: "Control", title: "Dark and light popup", body: "The extension popup follows your preference with a dark or light theme." },
];

export const FEATURE_LIST_FOR_SCHEMA = FEATURES.slice(0, 12).map((f) => f.title);

export const FEATURE_FAQS = [
    {
        q: "How many features does ExamGhost have?",
        a: `This page lists ${FEATURES.length} things the extension does, from double-click solving and Alt+S screenshots to answer styles and the master on/off switch. It's one Chrome extension with a free plan.`,
    },
    {
        q: "Which question types does ExamGhost answer?",
        a: "Multiple choice, multi-select, dropdowns and matching, and short or fill-in-the-blank answers. For graphs, diagrams and image-based questions, use the Alt+S screenshot tool.",
    },
    {
        q: "Does ExamGhost work on any website?",
        a: "It works on anything you can see on screen. Double-click works on most quiz pages, and Alt+S solves whatever is visible when a page doesn't respond. There are dedicated pages for 20 platforms including Canvas, Blackboard and Moodle.",
    },
    {
        q: "What do the Quick, Highlight and Explain modes do?",
        a: "Quick (Alt+1) fills in the answer and copies it with no panel. Highlight (Alt+2) marks the right option with a check and leaves the click to you. Explain (Alt+3) fills in the answer and opens a side panel with the reasoning.",
    },
    {
        q: "Is ExamGhost free?",
        a: "Yes. Every account gets 5 free solves a day with no credit card. Paid plans are $19/month, $99/year or $199 lifetime, with a 14-day money-back guarantee.",
    },
    {
        q: "Can I use it on graded quizzes?",
        a: "Your instructor or school may restrict AI tools. Check your course policy and use ExamGhost the way it allows, for example for practice quizzes and studying.",
    },
];
