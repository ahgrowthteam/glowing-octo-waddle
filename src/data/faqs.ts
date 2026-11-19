// Single source of truth for the /faq page and its FAQPage JSON-LD.
// Entries with home:true are the ones shown on the homepage.

export type FaqGroup = "Getting started" | "Using ExamGhost" | "Pricing & refunds" | "Privacy & safety";

export type Faq = {
    id: string;
    group: FaqGroup;
    q: string;
    a: string;
    home?: boolean;
};

export const FAQ_GROUPS: FaqGroup[] = ["Getting started", "Using ExamGhost", "Pricing & refunds", "Privacy & safety"];

export const FAQS: Faq[] = [
    // Getting started
    {
        id: "what-is-examghost",
        group: "Getting started",
        q: "What is ExamGhost?",
        a: "ExamGhost is an AI Chrome extension that answers quiz and homework questions right on the page. Double-click a question on Canvas, Blackboard, Moodle and other quiz platforms and it shows the answer, with a step-by-step explanation if you want one.",
        home: true,
    },
    {
        id: "platforms",
        group: "Getting started",
        q: "Which platforms does it work on?",
        a: "ExamGhost has dedicated pages for 20 platforms: Canvas (Classic and New Quizzes), Blackboard, Moodle, D2L Brightspace, Schoology, Google Forms, McGraw Hill Connect and ALEKS, Pearson MyLab and Mastering, Cengage MindTap and WebAssign, Macmillan Achieve and Smartwork, WileyPlus, Hawkes Learning, Knewton Alta, Edgenuity, DeltaMath, WeBWorK, Gradescope, Top Hat, Sakai and zyBooks. On any other page, double-click works on most quiz layouts, and Alt+S solves whatever you can see in a screenshot.",
        home: true,
    },
    {
        id: "any-website",
        group: "Getting started",
        q: "Does it work on any website or platform?",
        a: "It works on anything you can see on screen. Press Alt+S, drag a box around the question and ExamGhost reads the screenshot. Double-click works on most quiz pages, but page layouts vary, so use Alt+S when a page doesn't respond to a double-click.",
        home: true,
    },
    {
        id: "limits",
        group: "Pricing & refunds",
        q: "Are there limits on how many questions I can solve?",
        a: "The free plan includes 5 solves a day. Paid plans remove the daily limit, and that includes screenshot solves.",
        home: true,
    },
    {
        id: "browsers",
        group: "Getting started",
        q: "Which browsers and computers are supported?",
        a: "Chrome, Edge, Brave and Arc on macOS and Windows.",
    },
    {
        id: "install",
        group: "Getting started",
        q: "How do I install it?",
        a: "Use the Add to Chrome button on this site and follow the steps. It takes about 30 seconds. If you get stuck, ask on Discord or email support@examghost.com.",
    },
    {
        id: "free-to-try",
        group: "Getting started",
        q: "Is it free to try?",
        a: "Yes. Every account gets 5 free solves a day with no credit card, so you can try it as a free Canvas quiz solver Chrome extension before paying. Paid plans remove the daily limit.",
        home: true,
    },

    // Using ExamGhost
    {
        id: "how-it-works",
        group: "Using ExamGhost",
        q: "How does it work?",
        a: "You double-click a question on the page. The extension reads the question and its options, sends them to an AI model, and shows the answer on the page. For graphs and images, press Alt+S, draw a box, and it sends a screenshot of that area instead.",
        home: true,
    },
    {
        id: "question-types",
        group: "Using ExamGhost",
        q: "What kinds of questions can it solve?",
        a: "Multiple choice, multi-select, fill-in-the-blank, dropdown and matching questions, plus math with LaTeX. For graphs, diagrams and image-based questions, use Snap-It (Alt+S) to draw a box around the part you need solved.",
        home: true,
    },
    {
        id: "modes",
        group: "Using ExamGhost",
        q: "What are the three answer styles?",
        a: "Alt+1 gives a quick answer, Alt+2 highlights the answer on the page, and Alt+3 opens an explanation in a side panel. You can switch any time.",
    },
    {
        id: "subjects",
        group: "Using ExamGhost",
        q: "Does it handle math and other subjects?",
        a: "Yes. It reads equations written in LaTeX and covers 13 subjects. For anything it can't read as text, use Snap-It (Alt+S) on a screenshot of the question.",
    },
    {
        id: "accuracy",
        group: "Using ExamGhost",
        q: "How accurate are the answers?",
        a: "It depends on the question. Every answer comes with an explanation so you can check the reasoning, and you should double-check anything important before relying on it.",
        home: true,
    },
    {
        id: "homework-and-studying",
        group: "Using ExamGhost",
        q: "Can I use it for homework and studying?",
        a: "Yes, that's what it's best at. Use the explanations to understand each step, check your own work, and practise before an exam.",
        home: true,
    },
    {
        id: "devices",
        group: "Using ExamGhost",
        q: "Can I use it on more than one computer?",
        a: "Your license is personal and covers up to 3 of your own authenticated devices. See the Terms of Service for the details.",
    },

    // Pricing & refunds
    {
        id: "cost",
        group: "Pricing & refunds",
        q: "How much does ExamGhost cost?",
        a: "Free for 5 solves a day. Paid plans are $19 a month, $99 a year (about $8.25 a month) or $199 for lifetime access, and all of them include a 14-day money-back guarantee.",
        home: true,
    },
    {
        id: "refund",
        group: "Pricing & refunds",
        q: "What is the refund policy?",
        a: "All paid plans have a 14-day money-back guarantee. Email support@examghost.com or message us on Discord within 14 days of purchase and we'll refund you.",
        home: true,
    },
    {
        id: "cancel",
        group: "Pricing & refunds",
        q: "How do I cancel?",
        a: "You can cancel any time from your account, and your plan runs to the end of the period you paid for. If something isn't working, email support@examghost.com within 14 days for a refund.",
        home: true,
    },

    // Privacy & safety
    {
        id: "graded-quizzes",
        group: "Privacy & safety",
        q: "Can I use it on graded quizzes?",
        a: "That depends on your school and your course. Many instructors and institutions restrict AI tools on graded work, and you are responsible for following your academic integrity policy. ExamGhost is built as a study aid: use it to check your work, learn from the explanations and practise.",
        home: true,
    },
    {
        id: "instructor-visibility",
        group: "Privacy & safety",
        q: "Can my school or instructor see that I use it?",
        a: "We can't promise what your school's systems or proctoring tools can see. Schools set their own monitoring and rules, so check your course policy before you use any AI tool.",
    },
    {
        id: "data-sent",
        group: "Privacy & safety",
        q: "What data does ExamGhost send?",
        a: "To generate an answer, the question text and options (or the screenshot, if you use Snap-It) are sent to an AI service. It only does this when you trigger a solve. See the privacy policy for details.",
        home: true,
    },
    {
        id: "data-use",
        group: "Privacy & safety",
        q: "Do you sell my data or train on my questions?",
        a: "Our Privacy Policy says we don't sell or rent student data, and that question data isn't used to train public machine learning models. Read the full policy for the details.",
    },
];
