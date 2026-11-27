// ─────────────────────────────────────────────────────────────────────────────
// Single place to swap homepage links and media.
//
// THE RULE
//   • VIDEO SLOTS  = everything in MEDIA below. Paste an .mp4 URL (or a /public path like
//     "/videos/hero.mp4"). Leave "" to show the built-in graphic instead.
//   • GRAPHICS     = drawn in code, no files needed: the 3 step illustrations, the "Try it" demo,
//     the question cards, the comparison cards. Don't replace those with videos.
//   • In development every video slot shows a small badge naming itself, e.g.
//     "features.snap · video", so you can see exactly which slot is which.
//
// All URLs below marked TEST are borrowed competitor clips, only there so you can preview the
// layout. Replace each with your own recording before launch.
// ─────────────────────────────────────────────────────────────────────────────

// Where "Add to Chrome" points. Replace with the Chrome Web Store listing URL when it's live.
export const INSTALL_URL = "https://discord.gg/aCcsyKYJq4";
export const DISCORD_URL = "https://discord.gg/aCcsyKYJq4";
export const DEMO_URL = "/canvas-quiz-solver-free-demo";

// TEST clips (borrowed). One per product area so the previews look different.
const TEST_HERO = "https://www.examclutch.com/hero-demo.mp4";
const TEST_NORMAL = "https://www.examclutch.com/normal-mode-demo.mp4";
const TEST_INLINE = "https://smartsolve.ai/video/en/direct-integration.mp4";
const TEST_SIDEBAR = "https://www.snapgpt.me/images/sidebar.mp4";

export const MEDIA = {
    // Section 1 · Hero, right side. mp4 URL. (Or set hero.youtube to use a YouTube embed instead.)
    hero: { video: TEST_HERO, youtube: "" },

    // Section 4 · "See exactly how it works", full guide. YouTube video ID (the part after youtu.be/).
    guide: { youtube: "Az-0iwnGTsI" }, // TEST: borrowed ExamClutch video

    // Section 7 · "Pick how answers show up", one clip per mode.
    modes: {
        quick: "", // Alt+1 (built-in studio MockQuiz preview)
        highlight: "", // Alt+2 (built-in studio MockQuiz preview)
        explain: TEST_NORMAL, // Alt+3
        screenshot: "", // Alt+S (no test clip: shows the graphic)
    },

    // Section 8 · "Everything it does, in action", one clip per feature.
    features: {
        doubleClick: TEST_INLINE,
        snap: TEST_SIDEBAR,
        scan: TEST_NORMAL,
        equations: TEST_SIDEBAR,
        subjects: TEST_INLINE,
        shortcuts: "",
    },
};

export const PLATFORMS = [
    "Canvas", "Blackboard", "Moodle", "D2L Brightspace", "Schoology", "Google Classroom",
    "McGraw Hill", "Pearson MyLab", "Cengage", "Google Forms", "Edgenuity", "DeltaMath",
];

// Back-compat names used by the platform/compare templates.
export const HERO_VIDEO_SRC = MEDIA.hero.video;
export const HERO_YOUTUBE_ID = MEDIA.hero.youtube;
export const GUIDE_YOUTUBE_ID = MEDIA.guide.youtube;
