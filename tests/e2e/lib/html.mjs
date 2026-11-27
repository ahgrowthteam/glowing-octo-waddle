const ENTITY_MAP = {
    amp: '&',
    lt: '<',
    gt: '>',
    quot: '"',
    apos: "'",
    nbsp: ' ',
    mdash: '—',
    ndash: '–',
    rsquo: '’',
    lsquo: '‘',
    rdquo: '”',
    ldquo: '“',
    hellip: '…',
    middot: '·',
};

export function decodeHtmlEntities(str) {
    if (!str) return '';
    return str.replace(
        /&(?:#(\d+)|#x([0-9a-fA-F]+)|(amp|lt|gt|quot|apos|nbsp|mdash|ndash|rsquo|lsquo|rdquo|ldquo|hellip|middot));/g,
        (full, dec, hex, named) => {
            if (dec) {
                const cp = Number.parseInt(dec, 10);
                return Number.isFinite(cp) ? String.fromCodePoint(cp) : full;
            }
            if (hex) {
                const cp = Number.parseInt(hex, 16);
                return Number.isFinite(cp) ? String.fromCodePoint(cp) : full;
            }
            if (named) {
                return ENTITY_MAP[named] ?? full;
            }
            return full;
        }
    );
}

const TAG_ATTRS_SRC = `(?:[^>"']|"[^"]*"|'[^']*')*`;
const BLOCK_CLOSE_RE = /<\/(?:td|th|dd|dt|li|p|div|tr|section|article|h[1-6])>/gi;
const LINE_BREAK_TAG_RE = new RegExp(`<(?:br|hr)\\b${TAG_ATTRS_SRC}>`, 'gi');
const ANY_TAG_RE = new RegExp(`</?[a-zA-Z!/?]${TAG_ATTRS_SRC}>`, 'g');
const TITLE_RE = new RegExp(`<title\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/title>`, 'i');
const H1_RE = new RegExp(`<h1\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/h1>`, 'gi');
const HEAD_RE = new RegExp(`<head\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/head>`, 'i');
const META_TAG_RE = new RegExp(`<meta\\b${TAG_ATTRS_SRC}>`, 'gi');
const LINK_TAG_RE = new RegExp(`<link\\b${TAG_ATTRS_SRC}>`, 'gi');
const SCRIPT_CAPTURE_RE = new RegExp(`<script\\b(${TAG_ATTRS_SRC})>([\\s\\S]*?)<\\/script>`, 'gi');
const ANCHOR_CAPTURE_RE = new RegExp(`<a\\b(${TAG_ATTRS_SRC})>`, 'gi');
const IMG_SRC_CAPTURE_RE = new RegExp(`<(?:img|source)\\b(${TAG_ATTRS_SRC})>`, 'gi');
const MAIN_OPEN_RE = new RegExp(`<main\\b${TAG_ATTRS_SRC}>`, 'gi');
const MAIN_CAPTURE_RE = new RegExp(`<main\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/main>`, 'i');
const BODY_CAPTURE_RE = new RegExp(`<body\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/body>`, 'i');
const MAIN_NAV_RE = new RegExp(`<nav\\b${TAG_ATTRS_SRC}aria-label\\s*=\\s*["']Main["']`, 'i');
const SCRIPT_STRIP_RE = new RegExp(`<script\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/script>`, 'gi');
const STYLE_STRIP_RE = new RegExp(`<style\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/style>`, 'gi');
const NOSCRIPT_STRIP_RE = new RegExp(`<noscript\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/noscript>`, 'gi');
const SVG_STRIP_RE = new RegExp(`<svg\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/svg>`, 'gi');
const FOOTER_STRIP_RE = new RegExp(`<footer\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/footer>`, 'gi');
const HEADER_STRIP_RE = new RegExp(`<header\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/header>`, 'gi');
const NAV_STRIP_RE = new RegExp(`<nav\\b${TAG_ATTRS_SRC}>[\\s\\S]*?<\\/nav>`, 'gi');
const ATTR_TAG_RE = new RegExp(`<([a-zA-Z0-9-]+)\\b(${TAG_ATTRS_SRC})>`, 'g');

export function stripTagsPreserveLines(html) {
    const normalizedInput = String(html)
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(/[\r\n\t]+/g, ' ');
    const withBreaks = normalizedInput
        .replace(BLOCK_CLOSE_RE, '\n')
        .replace(LINE_BREAK_TAG_RE, '\n')
        .replace(ANY_TAG_RE, ' ');
    return decodeHtmlEntities(withBreaks)
        .replace(/[^\S\n]+/g, ' ')
        .replace(/[ \t]*\n[ \t]*/g, '\n')
        .replace(/\n{2,}/g, '\n')
        .trim();
}

export function stripTags(html) {
    return stripTagsPreserveLines(html).replace(/\s+/g, ' ').trim();
}

function getAttr(tag, attrName) {
    const re = new RegExp(`(?:^|[\\s<])${attrName}\\s*=\\s*(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i');
    const m = tag.match(re);
    if (!m) return null;
    return decodeHtmlEntities(m[1] ?? m[2] ?? m[3] ?? '');
}

export function parseTitle(html) {
    const m = html.match(TITLE_RE);
    return m ? stripTags(m[1]) : '';
}

export function parseH1s(html) {
    const matches = [...html.matchAll(H1_RE)];
    return matches.map((m) => stripTags(m[1])).filter(Boolean);
}

export function parseMetaDescription(html) {
    const head = html.match(HEAD_RE)?.[1] ?? html;
    const metas = head.match(META_TAG_RE) ?? [];
    for (const tag of metas) {
        const name = getAttr(tag, 'name');
        if (name && name.toLowerCase() === 'description') {
            return getAttr(tag, 'content') ?? '';
        }
    }
    return '';
}

export function parseRobotsMeta(html) {
    const head = html.match(HEAD_RE)?.[1] ?? html;
    const metas = head.match(META_TAG_RE) ?? [];
    const contents = [];
    for (const tag of metas) {
        const name = getAttr(tag, 'name');
        if (name && name.toLowerCase() === 'robots') {
            const c = getAttr(tag, 'content');
            if (c !== null) contents.push(c);
        }
    }
    const joined = contents.join(', ');
    return {
        found: contents.length > 0,
        content: joined,
        hasNoindex: /\bnoindex\b/i.test(joined),
        hasNofollow: /\bnofollow\b/i.test(joined),
    };
}

export function parseCanonical(html) {
    const head = html.match(HEAD_RE)?.[1] ?? html;
    const links = head.match(LINK_TAG_RE) ?? [];
    for (const tag of links) {
        const rel = getAttr(tag, 'rel');
        if (rel && rel.toLowerCase().split(/\s+/).includes('canonical')) {
            return getAttr(tag, 'href');
        }
    }
    return null;
}

export function normalizeUrlPath(rawUrl) {
    try {
        const u = new URL(rawUrl, 'https://www.examghost.com');
        let p = u.pathname;
        if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
        return p;
    } catch {
        return rawUrl;
    }
}

export function containsRoutePath(text, routePath) {
    if (!text || !routePath) return false;
    const escaped = routePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(
        `(?:^|[^a-z0-9/_-])(?:https?:\\/\\/[a-z0-9.-]+(?::\\d+)?)?${escaped}(?![a-z0-9_-])`,
        'i'
    ).test(text);
}

export function parseSitemapUrls(xml) {
    const locs = [...xml.matchAll(/<loc>([\s\S]*?)<\/loc>/gi)];
    const rawUrls = locs.map((m) => decodeHtmlEntities(m[1]).trim()).filter(Boolean);
    const paths = rawUrls.map((u) => normalizeUrlPath(u));
    return { rawUrls, paths };
}

export function extractJsonLd(html) {
    const scripts = [...html.matchAll(SCRIPT_CAPTURE_RE)];
    const blocks = [];
    const errors = [];
    for (const m of scripts) {
        const attrs = m[1];
        const type = getAttr(`<script ${attrs}>`, 'type');
        if (!type || type.toLowerCase() !== 'application/ld+json') continue;
        const raw = m[2].trim();
        try {
            blocks.push(JSON.parse(raw));
        } catch (err) {
            errors.push({ error: err.message, snippet: raw.slice(0, 120) });
        }
    }
    return { blocks, errors };
}

export function extractInternalLinks(html, baseOrigin = 'https://www.examghost.com') {
    const anchors = [...html.matchAll(ANCHOR_CAPTURE_RE)];
    const paths = new Set();
    let baseHost = 'www.examghost.com';
    try {
        baseHost = new URL(baseOrigin).host.toLowerCase();
    } catch {
        // default
    }

    for (const m of anchors) {
        const href = getAttr(`<a ${m[1]}>`, 'href');
        if (!href) continue;
        const trimmed = href.trim();
        if (
            !trimmed ||
            trimmed.startsWith('#') ||
            /^(?:mailto|tel|javascript|data):/i.test(trimmed)
        ) {
            continue;
        }
        if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
            paths.add(normalizeUrlPath(trimmed));
            continue;
        }
        try {
            const parsed = new URL(trimmed);
            const h = parsed.host.toLowerCase();
            if (h === 'www.examghost.com' || h === 'examghost.com' || h === baseHost) {
                paths.add(normalizeUrlPath(parsed.pathname));
            }
        } catch {
            // ignore non-URL hrefs
        }
    }
    return [...paths].sort();
}

export function extractLocalAssets(html) {
    const tags = [...html.matchAll(IMG_SRC_CAPTURE_RE)];
    const paths = new Set();
    for (const m of tags) {
        const src = getAttr(`<img ${m[1]}>`, 'src');
        if (!src) continue;
        const trimmed = src.trim();
        if (trimmed.startsWith('/') && !trimmed.startsWith('//')) {
            paths.add(trimmed.split('?')[0].split('#')[0]);
        }
    }
    return [...paths].sort();
}

export function extractMainInnerHtml(html) {
    const openMatches = [...html.matchAll(MAIN_OPEN_RE)];
    const fullMatch = html.match(MAIN_CAPTURE_RE);
    return {
        mainCount: openMatches.length,
        innerHtml: fullMatch ? fullMatch[1] : null,
        fullMatchText: fullMatch ? fullMatch[0] : null,
    };
}

export function validateMainLandmarks(html) {
    const { mainCount, innerHtml, fullMatchText } = extractMainInnerHtml(html);
    if (mainCount !== 1 || innerHtml === null) {
        return {
            ok: false,
            mainCount,
            footerInsideMain: false,
            mainNavInsideMain: false,
            mainNavOutsideMain: false,
            footerOutsideMain: false,
            reason: `Expected exactly 1 <main>, found ${mainCount}`,
        };
    }

    const footerInsideMain = /<footer\b/i.test(innerHtml);
    const mainNavInsideMain = MAIN_NAV_RE.test(innerHtml);

    const outsideMain = html.replace(fullMatchText, '');
    const mainNavOutsideMain = MAIN_NAV_RE.test(outsideMain);
    const footerOutsideMain = /<footer\b/i.test(outsideMain);

    const reasons = [];
    if (footerInsideMain) reasons.push('<footer> nested inside <main>');
    if (mainNavInsideMain) reasons.push('<nav aria-label="Main"> nested inside <main>');
    if (!mainNavOutsideMain) reasons.push('<nav aria-label="Main"> missing outside <main>');
    if (!footerOutsideMain) reasons.push('<footer> missing outside <main>');

    return {
        ok: reasons.length === 0,
        mainCount,
        footerInsideMain,
        mainNavInsideMain,
        mainNavOutsideMain,
        footerOutsideMain,
        reason: reasons.join('; '),
    };
}

function cleanMainRegion(html) {
    const { mainCount, innerHtml } = extractMainInnerHtml(html);
    let region = innerHtml;
    if (region === null) {
        const bodyMatch = html.match(BODY_CAPTURE_RE);
        region = bodyMatch ? bodyMatch[1] : html;
    }

    const cleaned = region
        .replace(/<!--[\s\S]*?-->/g, ' ')
        .replace(SCRIPT_STRIP_RE, ' ')
        .replace(STYLE_STRIP_RE, ' ')
        .replace(NOSCRIPT_STRIP_RE, ' ')
        .replace(SVG_STRIP_RE, ' ')
        .replace(FOOTER_STRIP_RE, ' ')
        .replace(HEADER_STRIP_RE, (hdr) => {
            if (/aria-label\s*=\s*["']Main["']|ExamGhost\s+home/i.test(hdr)) {
                return ' ';
            }
            return hdr;
        })
        .replace(NAV_STRIP_RE, ' ');

    return { mainCount, cleaned };
}

export function extractMainComparisonText(html) {
    const { mainCount, cleaned } = cleanMainRegion(html);
    const text = stripTagsPreserveLines(cleaned);
    const tokens = text.toLowerCase().match(/[a-z0-9]+/g) ?? [];
    return { mainCount, text, rawText: text, tokens };
}

export function extractMainAttrTexts(html) {
    const { cleaned } = cleanMainRegion(html);
    const values = [];
    ATTR_TAG_RE.lastIndex = 0;
    let m;
    while ((m = ATTR_TAG_RE.exec(cleaned)) !== null) {
        const attrs = m[2];
        if (!attrs) continue;
        const syntheticTag = `<${m[1]} ${attrs}>`;
        for (const attrName of ['alt', 'aria-label', 'title']) {
            const val = getAttr(syntheticTag, attrName);
            if (val && val.trim()) {
                values.push(val.replace(/\s+/g, ' ').trim());
            }
        }
    }
    return values.join('\n');
}

export const STOPWORDS = new Set([
    'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'has', 'have',
    'in', 'is', 'it', 'its', 'of', 'on', 'or', 'that', 'the', 'to', 'with', 'you', 'your',
]);

export function fiveGramJaccard(tokensA, tokensB) {
    const gramsA = new Set();
    for (let i = 0; i <= tokensA.length - 5; i += 1) {
        gramsA.add(`${tokensA[i]} ${tokensA[i + 1]} ${tokensA[i + 2]} ${tokensA[i + 3]} ${tokensA[i + 4]}`);
    }
    const gramsB = new Set();
    for (let i = 0; i <= tokensB.length - 5; i += 1) {
        gramsB.add(`${tokensB[i]} ${tokensB[i + 1]} ${tokensB[i + 2]} ${tokensB[i + 3]} ${tokensB[i + 4]}`);
    }
    if (gramsA.size === 0 && gramsB.size === 0) return 1;
    if (gramsA.size === 0 || gramsB.size === 0) return 0;

    let intersection = 0;
    const [smaller, larger] = gramsA.size <= gramsB.size ? [gramsA, gramsB] : [gramsB, gramsA];
    for (const g of smaller) {
        if (larger.has(g)) intersection += 1;
    }
    const union = gramsA.size + gramsB.size - intersection;
    return union === 0 ? 0 : intersection / union;
}

export function stopwordCosine(tokensA, tokensB) {
    const buildTf = (tokens) => {
        const tf = new Map();
        for (const t of tokens) {
            if (t.length <= 1 || STOPWORDS.has(t)) continue;
            tf.set(t, (tf.get(t) ?? 0) + 1);
        }
        return tf;
    };

    const tfA = buildTf(tokensA);
    const tfB = buildTf(tokensB);
    if (tfA.size === 0 || tfB.size === 0) return 0;

    let dot = 0;
    let normA = 0;
    let normB = 0;

    for (const [term, valA] of tfA) {
        normA += valA * valA;
        const valB = tfB.get(term);
        if (valB) dot += valA * valB;
    }
    for (const valB of tfB.values()) {
        normB += valB * valB;
    }

    const denom = Math.sqrt(normA) * Math.sqrt(normB);
    return denom === 0 ? 0 : dot / denom;
}

const NEG_TRIGGER_SRC =
    "(?:no|not|never|without|does\\s+not|doesn['’]t|do\\s+not|don['’]t|cannot|can['’]t|won['’]t|isn['’]t|aren['’]t|wasn['’]t|weren['’]t|neither|nor)";
const DISCLAIMER_BRIDGE_SRC =
    '(?:offers?|offered|offering|provides?|provided|providing|uses?|used|using|claims?|claimed|claiming|includes?|included|including|supports?|supported|supporting|features?|featured|featuring|markets?|marketed|marketing|promises?|promised|promising|sells?|selling|sold|enables?|enabled|enabling|guarantees?|guaranteed|guaranteeing|works?|worked|working|bypass(?:es|ed|ing)?|have|has|having|a|an|the|any|or|nor)';
const DIRECT_NEGATION_RE = new RegExp(
    `\\b${NEG_TRIGGER_SRC}[\\s'"(\\u2018\\u201c]+(?:${DISCLAIMER_BRIDGE_SRC}(?:[\\s'"(\\u2018\\u201c]+|,[\\s'"(\\u2018\\u201c]+))*$`,
    'i'
);
const COORD_VERB_NEG_RE =
    /\b(?:does\s+not|doesn['’]t|do\s+not|don['’]t|cannot|can['’]t|won['’]t|isn['’]t|aren['’]t|never)\s+(?:(?:offer|provide|use|claim|include|support|feature|market|promise|sell|enable|guarantee|work|bypass|have)(?:s|es|ed|ing)?|evad(?:e|es|ed|ing))\b/gi;
const COORD_NOUN_NEG_RE = /\b(?:neither|without(?:\s+any)?|no)\b/gi;
const COORD_VERB_END_RE = /(?:,|\bor\b|\bnor\b)\s*(?:a|an|the|any)?[\s'"(\u2018\u201c]*$/i;
const COORD_NOUN_END_RE = /(?:\bor\b|\bnor\b)\s*(?:a|an|the|any)?[\s'"(\u2018\u201c]*$/i;
const COORD_NOUN_FILLER_RE = /^\s*(?:doubt|question|hesitation|fail|exception|worry|hassle|limits?)\b/i;
const POSITIVE_CLAUSE_BREAK_RE =
    /\b(?:but|instead|however|yet|while|though|is|are|was|were|gives?|makes?|keeps?|stays?|remains?|delivers?|our|their|its)\b/i;

function isNegatedEvasion(text, idx) {
    const rawBefore = text.slice(Math.max(0, idx - 85), idx);
    const sentenceBefore = rawBefore.split(/[.!?\n]/).pop() ?? '';
    if (DIRECT_NEGATION_RE.test(sentenceBefore)) {
        return true;
    }

    const findLastMatch = (re) => {
        re.lastIndex = 0;
        let last = null;
        let m;
        while ((m = re.exec(sentenceBefore)) !== null) {
            last = m;
        }
        return last;
    };

    const verbMatch = findLastMatch(COORD_VERB_NEG_RE);
    if (verbMatch) {
        const afterTrigger = sentenceBefore.slice(verbMatch.index + verbMatch[0].length);
        if (COORD_VERB_END_RE.test(afterTrigger) && !POSITIVE_CLAUSE_BREAK_RE.test(afterTrigger)) {
            return true;
        }
    }

    const nounMatch = findLastMatch(COORD_NOUN_NEG_RE);
    if (nounMatch) {
        const afterTrigger = sentenceBefore.slice(nounMatch.index + nounMatch[0].length);
        if (
            COORD_NOUN_END_RE.test(afterTrigger) &&
            !COORD_NOUN_FILLER_RE.test(afterTrigger) &&
            !POSITIVE_CLAUSE_BREAK_RE.test(afterTrigger)
        ) {
            return true;
        }
    }

    return false;
}

const EVASION_PATTERNS = [
    {
        name: 'undetectable',
        re: /\b(?:100%\s+|fully\s+|mathematically\s+|permanently\s+)?undetectable\b/gi,
    },
    {
        name: 'semantic-undetectable',
        re: /\b(?:not\s+detectable|(?:cannot|can['’]?t)\s+be\s+detected|(?:impossible|unable)\s+to\s+(?:be\s+)?detect(?:ed)?|(?:zero|no)\s+(?:chance|risk)\s+of\s+detection|untraceable|undiscoverable)\b/gi,
    },
    {
        name: 'undetected-context',
        re: /\b(?:stays?|remains?|is|are|go(?:es)?|keep(?:s)?)\s+undetected\b|\bundetected\b/gi,
        requireContext:
            /(?:proctor|canvas|blackboard|moodle|schoology|brightspace|d2l|quiz|exam|detect|extension|stays?\s+undetected|remains?\s+undetected|go(?:es)?\s+undetected)/i,
    },
    {
        name: 'invisible-qualified',
        re: /\b(?:100%\s+)?invisible\s+(?:mode|hud|shadow\s+dom|focus\s+shield|quiz\s+solver|to\s+proctor\w*)\b/gi,
    },
    {
        name: 'invisible-proximity',
        re: /\binvisible\b/gi,
        requireContext: /(?:proctor|canvas|quiz|exam|detect|screen|hud|mode|shadow|stealth)/i,
    },
    {
        name: 'focus-shield',
        re: /\bfocus\s+shield\b/gi,
    },
    {
        name: 'proctor-bypass',
        re: /\b(?:proctor(?:ing)?\s+(?:bypass|immunit\w*|safe|evas\w*|cloak\w*)|evad(?:e|es|ed|ing)\s+(?:proctor\w*|honorlock|proctorio|respondus|lockdown|turnitin|examity|proctoru|canvas|blackboard|moodle|schoology|brightspace|d2l|detection)|bypass(?:es|ed|ing)?\s+(?:proctor\w*|lockdown|honorlock|proctorio|respondus|turnitin|examity|proctoru|canvas(?:\s+detect\w*)?|blackboard|moodle|schoology|brightspace|d2l|quiz|extension\s+detect\w*|tab[- ]?switch\s+detect\w*)|respondus\s+lockdown\s+browser\s+support)\b/gi,
    },
    {
        name: 'zero-flags-green',
        re: /\b(?:0|zero)\s+(?:action\s+|blur\s+)?flags?\b|\bspeedgrader\s+log\s+neutralizer\b|\b100%\s+green\b/gi,
    },
    {
        name: 'cloak-immunity',
        re: /\b(?:shadow\s+dom\s+(?:invisibility|focus\s+shield|hud)|mathematically\s+immune|window\.blur\s+(?:cloaked|silencer|interception)|tab[- ]?switch\s+(?:suppression|immunity)|zero\s+tab[- ]?switch|emergency\s+(?:ram\s+)?panic\s+(?:switch|flush)|proctorless)\b/gi,
    },
    {
        name: 'stealth-claim',
        re: /\bstealth\s+(?:mode|auto-?fill|architecture|solver|exam\s+solv\w*|tools?|vector|quiz)\b|\bstealthtap\b|\bstealth\s*\((?:default|focused)\)/gi,
    },
];

export function scanEvasion(text) {
    if (!text) return [];
    const hits = [];
    for (const pat of EVASION_PATTERNS) {
        pat.re.lastIndex = 0;
        let m;
        while ((m = pat.re.exec(text)) !== null) {
            const idx = m.index;
            if (pat.requireContext) {
                const windowStart = Math.max(0, idx - 30);
                const windowEnd = Math.min(text.length, idx + m[0].length + 30);
                const around = text.slice(windowStart, windowEnd);
                if (!pat.requireContext.test(around)) continue;
            }
            if (isNegatedEvasion(text, idx)) continue;

            const snippetStart = Math.max(0, idx - 30);
            const snippetEnd = Math.min(text.length, idx + m[0].length + 30);
            hits.push({
                rule: pat.name,
                match: m[0],
                snippet: text.slice(snippetStart, snippetEnd).replace(/\s+/g, ' ').trim(),
            });
        }
    }
    return hits;
}

const AI_SLOP_PATTERNS = [
    {
        name: 'contrast-reveal',
        re: /\b(?:it['’]?s|this\s+is|they['’]?re|that['’]?s|we['’]?re)\s+not\s+(?:just\s+)?[^.!?\n]{1,65}[,;—\u2013-]\s*(?:it['’]?s|this\s+is|they['’]?re|that['’]?s|we['’]?re)\b|\bisn['’]?t\s+(?:just\s+)?[^.!?\n]{1,65}[,;—\u2013-]\s*it['’]?s\b|\bnot\s+just\s+(?:a|an|another)\s+[^.!?\n]{1,50}[,;—\u2013-]\s*(?:it['’]?s|but\s+(?:a|an))\b|\b[a-z0-9][a-z0-9'.-]{0,30}(?:[ \t]+[a-z0-9][a-z0-9'.-]{0,20}){0,2}[ \t]+is[ \t]+not[ \t]+just[ \t]+[^.!?\n]{1,40}[,;—\u2013-][ \t]*it['’]?s\b/gi,
    },
    {
        name: 'negation-list',
        re: /\bno[ \t]+[a-z0-9][a-z0-9 \t-]{1,28},[ \t]*no[ \t]+[a-z0-9][a-z0-9 \t-]{1,28}(?:,[ \t]*(?:and[ \t]+)?no[ \t]+[a-z0-9][a-z0-9 \t-]{1,28})?/gi,
    },
    {
        name: 'banned-filler-cliche',
        re: /\b(?:unlock\s+(?:your|the\s+power|better|higher|full\s+potential|unlimited\s+potential|success|grades?|learning)|streamlin(?:e|es|ed|ing)|revolutioniz(?:e|es|ed|ing)|seamless(?:ly)?|frictionless(?:ly)?|game[- ]changer|supercharg(?:e|es|ed|ing)|skyrocket(?:s|ed|ing)?|delv(?:e|es|ed|ing)|tapestry|testament|unleash(?:es|ed|ing)?|elevat(?:e|es|ed|ing)\s+your|cutting[- ]edge|next[- ]generation|state[- ]of[- ]the[- ]art|empower(?:s|ed|ing)?|harness\s+the\s+power|look\s+no\s+further|in\s+today['’]?s\s+(?:fast[- ]paced|digital)\s+world)\b/gi,
    },
    {
        name: 'schema-jargon',
        re: /\bmarked\s+null\b/gi,
    },
    {
        name: 'trailing-participial-slop',
        re: /,\s+(?:making|leaving|creating|forcing)\s+/gi,
    },
];

export function scanAiSlop(text) {
    if (!text) return [];
    const hits = [];
    for (const pat of AI_SLOP_PATTERNS) {
        pat.re.lastIndex = 0;
        let m;
        while ((m = pat.re.exec(text)) !== null) {
            const idx = m.index;
            const snippetStart = Math.max(0, idx - 30);
            const snippetEnd = Math.min(text.length, idx + m[0].length + 30);
            hits.push({
                rule: pat.name,
                match: m[0],
                snippet: text.slice(snippetStart, snippetEnd).replace(/\s+/g, ' ').trim(),
            });
        }
    }
    return hits;
}

const DL_RE = new RegExp(`<dl\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/dl>`, 'gi');
const DT_DD_RE = new RegExp(`<dt\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/dt>\\s*<dd\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/dd>`, 'gi');
const TABLE_RE = new RegExp(`<table\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/table>`, 'gi');
const THEAD_RE = new RegExp(`<thead\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/thead>`, 'gi');
const TR_RE = new RegExp(`<tr\\b${TAG_ATTRS_SRC}>([\\s\\S]*?)<\\/tr>`, 'gi');
const CELL_RE = new RegExp(`<(td|th)\\b(${TAG_ATTRS_SRC})>([\\s\\S]*?)<\\/(?:td|th)>`, 'gi');
const P_TAG_RE = new RegExp(`<p\\b(${TAG_ATTRS_SRC})>([\\s\\S]*?)<\\/p>`, 'gi');
const FALLBACK_CARD_RE = new RegExp(
    `<div\\b${TAG_ATTRS_SRC}>([\\s\\S]{0,600}?(?:We haven(?:'|&#x27;|&#39;)t verified this product yet|could not read [^<]{1,120} directly|blocked automated access)[\\s\\S]{0,300}?)<\\/div>`,
    'gi'
);
const PRICING_NOTES_HEADING_RE =
    /<h[23]\b[^>]*>([\s\S]*?(?:pricing\s*(?:&amp;|&)\s*notes|\bplans\s*\([^)]+\))[\s\S]*?)<\/h[23]>/gi;
const EXAMGHOST_PRICE_CLAUSE_RE =
    /\bExamGhost(?:['’]s)?\b(?:\s*\([^)]*\)|(?:\s+(?:is|are|offers?|pricing|plans?|tiers?|costs?|lists?|charges?|starts?|start|priced|at|from|for|with|and|or)|[,:])*\s*~?\s*\$\s?(?:199|99|19|8\.25|0)(?:\.00)?(?:\s*\/\s*(?:mo(?:nth)?|day|yr|year|lifetime)|\s+(?:a|per)\s+(?:day|month|year)|\s+(?:lifetime|once))?)+/gi;
const EXAMGHOST_PLATFORM_CLAUSE_RE =
    /\bExamGhost(?:['’]s)?\s+(?:supports?|covers?|works\s+on|integrates?\s+with|names?|spans?|includes?)\s+[^.!?\n;]+/gi;

function stripExamGhostClauses(text) {
    return text
        .replace(EXAMGHOST_PRICE_CLAUSE_RE, ' ')
        .replace(EXAMGHOST_PLATFORM_CLAUSE_RE, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function extractEnclosingDiv(html, innerIdx) {
    const divTagRe = /<\/?div\b[^>]*>/gi;
    const opens = [];
    divTagRe.lastIndex = 0;
    let m;
    while ((m = divTagRe.exec(html)) !== null) {
        if (m.index > innerIdx) break;
        if (m[0].startsWith('</')) {
            opens.pop();
        } else {
            opens.push(m.index);
        }
    }
    if (opens.length === 0) return null;
    const startIdx = opens[opens.length - 1];
    divTagRe.lastIndex = startIdx;
    let depth = 0;
    while ((m = divTagRe.exec(html)) !== null) {
        if (m[0].startsWith('</')) {
            depth -= 1;
            if (depth === 0) {
                return html.slice(startIdx, m.index + m[0].length);
            }
        } else {
            depth += 1;
        }
    }
    return null;
}

export function extractCompetitorComparisonRegions(html) {
    const { innerHtml } = extractMainInnerHtml(html);
    const scope = innerHtml ?? html;
    const regions = [];

    // 1. Definition-list comparison table (<dl>...<dt>...</dt><dd>them</dd><dd>us</dd>...</dl>)
    const dlMatches = [...scope.matchAll(DL_RE)];
    for (const dl of dlMatches) {
        const dtDdBlocks = [...dl[1].matchAll(DT_DD_RE)];
        for (const row of dtDdBlocks) {
            const label = stripTags(row[1]);
            const themText = stripTags(row[2]);
            regions.push({ kind: 'dl-cell', label, text: themText });
        }
    }

    // 2. HTML <table> comparison table (dynamically identify ExamGhost vs competitor column)
    const tableMatches = [...scope.matchAll(TABLE_RE)];
    for (const tbl of tableMatches) {
        const theadBlocks = [...tbl[1].matchAll(THEAD_RE)];
        const hasThead = theadBlocks.length > 0;
        const bodyHtml = hasThead ? tbl[1].replace(THEAD_RE, ' ') : tbl[1];

        const parseRows = (fragment) =>
            [...fragment.matchAll(TR_RE)].map((tr) => {
                const rawCells = [...tr[1].matchAll(CELL_RE)].map((c) => ({
                    tag: c[1].toLowerCase(),
                    attrs: c[2] ?? '',
                    text: stripTags(c[3]),
                }));
                return {
                    rawCells,
                    hasTh: rawCells.some((c) => c.tag === 'th'),
                    allTh: rawCells.length > 0 && rawCells.every((c) => c.tag === 'th'),
                    hasScopeRow: rawCells.some(
                        (c) => c.tag === 'th' && /\bscope\s*=\s*["']?row\b/i.test(c.attrs)
                    ),
                    cells: rawCells.map((c) => c.text),
                };
            });

        const rows = parseRows(bodyHtml);
        if (rows.length === 0) continue;

        let headerRowIdx = -1;
        let examGhostColIdx = -1;

        const findExamGhostCol = (cells) => {
            const exact = cells.findIndex((c) => /^\s*examghost\s*$/i.test(c));
            if (exact !== -1) return exact;
            return cells.findIndex((c) => /\bexamghost\b/i.test(c) && !/\bvs\b/i.test(c));
        };

        if (hasThead) {
            for (const tb of theadBlocks) {
                for (const hRow of parseRows(tb[1])) {
                    const idx = findExamGhostCol(hRow.cells);
                    if (idx !== -1) {
                        examGhostColIdx = idx;
                        break;
                    }
                }
                if (examGhostColIdx !== -1) break;
            }
        }

        if (examGhostColIdx === -1 && rows[0]) {
            const firstIdx = findExamGhostCol(rows[0].cells);
            if (firstIdx !== -1 || (!hasThead && rows[0].allTh && !rows[0].hasScopeRow)) {
                headerRowIdx = 0;
                examGhostColIdx = firstIdx;
            }
        }

        for (let rIdx = 0; rIdx < rows.length; rIdx += 1) {
            const { rawCells, cells } = rows[rIdx];
            if (rIdx === headerRowIdx) continue;
            if (cells.length < 2) continue;

            let labelIdx = cells.length >= 3 ? 0 : -1;
            let compIdx = -1;

            if (examGhostColIdx !== -1) {
                if (cells.length === 2) {
                    labelIdx = -1;
                    compIdx = examGhostColIdx === 0 ? 1 : 0;
                } else {
                    for (let c = 1; c < cells.length; c += 1) {
                        if (c !== examGhostColIdx) {
                            compIdx = c;
                            break;
                        }
                    }
                    if (compIdx === -1 && examGhostColIdx !== 0) compIdx = 0;
                }
            } else if (cells.length >= 3) {
                compIdx = /^examghost$/i.test(cells[1]) ? 2 : 1;
            } else if (rawCells[0].tag === 'th' && rawCells[1].tag === 'td') {
                if (/^examghost$/i.test(cells[0])) continue;
                labelIdx = 0;
                compIdx = 1;
            } else {
                compIdx = /^examghost$/i.test(cells[1]) ? 0 : 1;
            }

            if (compIdx >= 0 && compIdx < cells.length && !/^examghost$/i.test(cells[compIdx])) {
                const label = labelIdx >= 0 && cells[labelIdx] ? cells[labelIdx] : 'table-cell';
                regions.push({ kind: 'table-cell', label, text: cells[compIdx] });
            }
        }
    }

    // 3. .aeo-summary paragraph
    for (const pm of scope.matchAll(P_TAG_RE)) {
        const cls = getAttr(`<p ${pm[1]}>`, 'class') ?? '';
        if (!/\baeo-summary\b/i.test(cls)) continue;
        const cleanedText = stripExamGhostClauses(stripTags(pm[2]));
        if (cleanedText) {
            regions.push({ kind: 'aeo-summary', label: 'aeo-summary', text: cleanedText });
        }
    }

    // 4. Competitor pricing & notes / plans card (excluding ExamGhost's own card)
    const seenCardTexts = new Set();
    for (const hm of scope.matchAll(PRICING_NOTES_HEADING_RE)) {
        const headingText = stripTags(hm[1]);
        if (/^examghost\b/i.test(headingText)) continue;
        const cardHtml = extractEnclosingDiv(scope, hm.index);
        if (!cardHtml) continue;
        const cleanedText = stripExamGhostClauses(stripTags(cardHtml));
        if (cleanedText && !seenCardTexts.has(cleanedText)) {
            seenCardTexts.add(cleanedText);
            regions.push({ kind: 'pricing-notes', label: 'pricing-notes', text: cleanedText });
        }
    }

    // 5. Fallback / unverified notice cards
    const unverifiedCards = [...scope.matchAll(FALLBACK_CARD_RE)];
    for (const card of unverifiedCards) {
        const cleanedText = stripExamGhostClauses(stripTags(card[1]));
        if (cleanedText && !seenCardTexts.has(cleanedText)) {
            seenCardTexts.add(cleanedText);
            regions.push({ kind: 'fallback-card', label: 'fallback', text: cleanedText });
        }
    }

    return regions;
}

export function extractFaqJsonLdText(blocks) {
    const texts = [];
    const visit = (node) => {
        if (!node || typeof node !== 'object') return;
        if (Array.isArray(node)) {
            node.forEach(visit);
            return;
        }
        const type = node['@type'];
        const isFaq = type === 'FAQPage' || (Array.isArray(type) && type.includes('FAQPage'));
        if (isFaq && Array.isArray(node.mainEntity)) {
            for (const q of node.mainEntity) {
                if (typeof q?.name === 'string' && q.name.trim()) texts.push(q.name.trim());
                if (typeof q?.acceptedAnswer?.text === 'string' && q.acceptedAnswer.text.trim()) {
                    texts.push(q.acceptedAnswer.text.trim());
                }
            }
        }
        if (Array.isArray(node['@graph'])) visit(node['@graph']);
    };
    visit(blocks);
    return texts.join('\n');
}
