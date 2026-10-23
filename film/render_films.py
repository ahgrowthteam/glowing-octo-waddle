#!/usr/bin/env python3
"""
Motion Studio 2.5D Film Engine for ExamGhost (2026)
- 120Hz internal physics & cursor emission trail supersampling -> 30fps H.264 MP4
- 2.5D perspective camera tracking (OpenCV warpPerspective homography)
- Multi-scale Gaussian HDR bloom on all light-emitting elements
- Progressive bitmap / halftone matrix appearance reveal with scanline emission
- Synthesized 120 BPM warm ambient electronic score + physical UI foley SFX (-14 LUFS)
- Strict fact traceability from ./film/facts.json
"""

import json
import math
import os
import subprocess
import sys
import wave
from pathlib import Path

import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

ROOT_DIR = Path(__file__).resolve().parent.parent
FILM_DIR = ROOT_DIR / "film"
OUT_VIDEO_DIR = ROOT_DIR / "public" / "videos"
OUT_POSTER_DIR = OUT_VIDEO_DIR / "posters"
CONTACT_DIR = FILM_DIR / "contact_sheets"
AUDIO_DIR = FILM_DIR / "audio"

for d in [OUT_VIDEO_DIR, OUT_POSTER_DIR, CONTACT_DIR, AUDIO_DIR]:
    d.mkdir(parents=True, exist_ok=True)

with open(FILM_DIR / "facts.json", "r", encoding="utf-8") as f:
    FACTS_DB = json.load(f)

with open(FILM_DIR / "timing.json", "r", encoding="utf-8") as f:
    TIMING = json.load(f)

# ============================================================================
# TYPOGRAPHY LOADER (macOS SF Rounded / SF Pro / Menlo)
# ============================================================================
def load_font(kind: str, size: int) -> ImageFont.FreeTypeFont:
    candidates = {
        "display": [
            "/System/Library/Fonts/SFNSRounded.ttf",
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/HelveticaNeue.ttc",
        ],
        "sans_bold": [
            "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
            "/System/Library/Fonts/SFNS.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
        ],
        "sans": [
            "/System/Library/Fonts/SFNS.ttf",
            "/System/Library/Fonts/Helvetica.ttc",
            "/System/Library/Fonts/Supplemental/Arial.ttf",
        ],
        "mono": [
            "/System/Library/Fonts/SFNSMono.ttf",
            "/System/Library/Fonts/Menlo.ttc",
        ],
    }
    for path in candidates.get(kind, candidates["sans"]):
        if os.path.exists(path):
            try:
                return ImageFont.truetype(path, size)
            except Exception:
                continue
    return ImageFont.load_default()


FONTS = {
    "h1": load_font("display", 42),
    "h2": load_font("display", 30),
    "h3": load_font("display", 22),
    "body_b": load_font("sans_bold", 18),
    "body": load_font("sans", 17),
    "sm_b": load_font("sans_bold", 14),
    "sm": load_font("sans", 14),
    "xs_b": load_font("sans_bold", 12),
    "mono_b": load_font("mono", 14),
    "mono": load_font("mono", 12),
}


# ============================================================================
# COLOR & EASING UTILITIES
# ============================================================================
def hex_to_rgb(h: str) -> tuple[int, int, int]:
    h = h.lstrip("#")
    return (int(h[0:2], 16), int(h[2:4], 16), int(h[4:6], 16))


def clamp01(x: float) -> float:
    return max(0.0, min(1.0, float(x)))


def ease_out_cubic(t: float) -> float:
    t = clamp01(t)
    return 1.0 - (1.0 - t) ** 3


def ease_in_out_cubic(t: float) -> float:
    t = clamp01(t)
    return 4 * t * t * t if t < 0.5 else 1 - ((-2 * t + 2) ** 3) / 2


def spring_ease(t: float) -> float:
    t = clamp01(t)
    if t == 0 or t == 1:
        return t
    return 1.0 - math.exp(-6.5 * t) * math.cos(8.5 * t)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def wrap_words(text: str, max_chars: int) -> list[str]:
    words = text.split()
    lines: list[str] = []
    cur = ""
    for w in words:
        if not cur:
            cur = w
        elif len(cur) + 1 + len(w) <= max_chars:
            cur = f"{cur} {w}"
        else:
            lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


# Brand Palette (6 Core Colors)
CREAM_RGB = (252, 249, 245)      # #FCF9F5
PAPER_RGB = (255, 255, 255)      # #FFFFFF
INK_RGB = (20, 20, 19)           # #141413
INK2_RGB = (43, 41, 38)          # #2B2926
MINT_RGB = (205, 238, 203)       # #CDEECB
PERI_RGB = (196, 208, 248)       # #C4D0F8
EMERALD_RGB = (16, 185, 129)     # #10B981
DARK_EMERALD = (6, 78, 59)       # #064E3B


# Load & cache mascot images
MASCOT_HERO_PATH = ROOT_DIR / "public" / "images" / "ghost" / "ghost_mascot_hero.jpg"
MASCOT_PRIVACY_PATH = ROOT_DIR / "public" / "images" / "ghost" / "ghost_privacy.jpg"

MASCOT_HERO = Image.open(MASCOT_HERO_PATH).convert("RGB") if MASCOT_HERO_PATH.exists() else Image.new("RGB", (120, 120), CREAM_RGB)
MASCOT_PRIVACY = Image.open(MASCOT_PRIVACY_PATH).convert("RGB") if MASCOT_PRIVACY_PATH.exists() else Image.new("RGB", (200, 200), CREAM_RGB)


def make_rounded_image(img: Image.Image, size: tuple[int, int], radius: int) -> tuple[Image.Image, Image.Image]:
    resized = img.resize(size, Image.Resampling.LANCZOS)
    mask = Image.new("L", size, 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return resized, mask


# Pre-cached mascot sizes & background dot grid for 10x faster frame generation
MASCOT_SM, MASCOT_SM_MASK = make_rounded_image(MASCOT_HERO, (34, 34), 10)
MASCOT_LG, MASCOT_LG_MASK = make_rounded_image(MASCOT_PRIVACY, (210, 210), 28)
MASCOT_OUT, MASCOT_OUT_MASK = make_rounded_image(MASCOT_HERO, (190, 190), 28)

BG_GRID_TEMPLATE = Image.new("RGB", (1280, 720), CREAM_RGB)
_bg_draw = ImageDraw.Draw(BG_GRID_TEMPLATE)
for _gx in range(48, 1280 - 32, 64):
    for _gy in range(48, 720 - 64, 64):
        _bg_draw.point((_gx, _gy), fill=(224, 218, 208))


# ============================================================================
# BITMAP / HALFTONE PROGRESSIVE APPEARANCE & HDR BLOOM ENGINE
# ============================================================================
def paste_with_bitmap_reveal(
    base_img: Image.Image,
    em_draw: ImageDraw.ImageDraw,
    card_img: Image.Image,
    pos: tuple[int, int],
    progress: float,
    accent_rgb: tuple[int, int, int],
    radius: int = 24,
):
    """
    Appears progressively via a quantized 8x8 bitmap block matrix + glowing emission scanline,
    never popping in suddenly.
    """
    progress = clamp01(progress)
    if progress <= 0.01:
        return
    w, h = card_img.size
    x0, y0 = pos

    # Rounded mask for the card
    mask = Image.new("L", (w, h), 0)
    mdraw = ImageDraw.Draw(mask)
    mdraw.rounded_rectangle((0, 0, w - 1, h - 1), radius=radius, fill=255)

    if progress >= 0.99:
        base_img.paste(card_img, (x0, y0), mask)
        return

    # Progressive vertical + diagonal bitmap reveal wavefront
    reveal_y = int(h * ease_out_cubic(progress))
    cell = 8
    reveal_mask = np.zeros((h, w), dtype=np.uint8)
    if reveal_y > 0:
        reveal_mask[: max(0, reveal_y - 28), :] = 255
        # Bitmap halftone transition band (28px tall)
        band_top = max(0, reveal_y - 28)
        band_bot = min(h, reveal_y + 16)
        for by in range(band_top, band_bot, cell):
            frac = 1.0 - (by - band_top) / max(1, (band_bot - band_top))
            dot_r = int(max(1, (cell // 2) * frac))
            for bx in range(0, w, cell):
                # Deterministic checkerboard stagger
                if ((bx // cell + by // cell) % 2 == 0) or frac > 0.45:
                    cy, cx = min(h - 1, by + cell // 2), min(w - 1, bx + cell // 2)
                    y1, y2 = max(0, cy - dot_r), min(h, cy + dot_r)
                    x1, x2 = max(0, cx - dot_r), min(w, cx + dot_r)
                    reveal_mask[y1:y2, x1:x2] = 255

        # Pixelate the transition band slightly for authentic bitmap texture
        small = card_img.resize((max(1, w // 6), max(1, h // 6)), Image.Resampling.NEAREST).resize((w, h), Image.Resampling.NEAREST)
        blended_card = Image.composite(card_img, small, Image.fromarray(reveal_mask))
    else:
        blended_card = card_img

    combined_mask = Image.fromarray(np.minimum(np.array(mask), reveal_mask))
    base_img.paste(blended_card, (x0, y0), combined_mask)

    # Emit light along the bitmap scanline wavefront
    scan_y = y0 + reveal_y
    if 4 < reveal_y < h - 4:
        draw = ImageDraw.Draw(base_img)
        draw.line([(x0 + 12, scan_y), (x0 + w - 12, scan_y)], fill=accent_rgb, width=3)
        em_draw.line([(x0 + 10, scan_y), (x0 + w - 10, scan_y)], fill=accent_rgb, width=6)


def draw_elevated_shadow(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], radius: int, depth: float = 1.0):
    x1, y1, x2, y2 = box
    off_y = int(10 * depth)
    off_x = int(4 * depth)
    draw.rounded_rectangle(
        (x1 + off_x, y1 + off_y, x2 + off_x, y2 + off_y),
        radius=radius,
        fill=(228, 223, 215),
    )


def apply_25d_camera_and_bloom(
    base_img: Image.Image,
    em_img: Image.Image,
    tilt_x_deg: float,
    tilt_y_deg: float,
    zoom: float,
    pan_x: float,
    pan_y: float,
) -> np.ndarray:
    """
    Applies multi-scale Gaussian HDR bloom from the emission layer,
    then warps the 2.5D plane via 3D perspective projection onto 1280x720.
    """
    base_arr = np.array(base_img, dtype=np.float32)
    em_arr = np.array(em_img, dtype=np.float32)

    # Multi-scale Gaussian Bloom
    if np.max(em_arr) > 1.0:
        bloom_tight = cv2.GaussianBlur(em_arr, (0, 0), sigmaX=7.0, sigmaY=7.0)
        bloom_wide = cv2.GaussianBlur(em_arr, (0, 0), sigmaX=22.0, sigmaY=22.0)
        bloom_ultra = cv2.GaussianBlur(em_arr, (0, 0), sigmaX=45.0, sigmaY=45.0)
        bloom_total = bloom_tight * 0.65 + bloom_wide * 0.55 + bloom_ultra * 0.35
        base_arr = np.clip(base_arr + bloom_total, 0, 255)

    h, w = base_arr.shape[:2]

    # 2.5D Perspective Homography Matrix
    src_pts = np.float32([[0, 0], [w, 0], [w, h], [0, h]])
    tx = math.radians(tilt_x_deg)
    ty = math.radians(tilt_y_deg)

    # Compute perspective corner offsets
    dx_top = math.sin(ty) * (w * 0.045)
    dy_left = math.sin(tx) * (h * 0.045)

    cx = w * 0.5 - pan_x
    cy = h * 0.5 - pan_y
    half_w = (w * 0.5) / zoom
    half_h = (h * 0.5) / zoom

    dst_pts = np.float32([
        [0 - dx_top, 0 + dy_left],
        [w + dx_top, 0 - dy_left],
        [w - dx_top, h + dy_left],
        [0 + dx_top, h - dy_left],
    ])

    # Combine zoom/pan window with perspective warp
    crop_src = np.float32([
        [cx - half_w, cy - half_h],
        [cx + half_w, cy - half_h],
        [cx + half_w, cy + half_h],
        [cx - half_w, cy + half_h],
    ])

    M = cv2.getPerspectiveTransform(crop_src, dst_pts)
    warped = cv2.warpPerspective(
        base_arr.astype(np.uint8),
        M,
        (w, h),
        flags=cv2.INTER_LINEAR,
        borderMode=cv2.BORDER_CONSTANT,
        borderValue=CREAM_RGB,
    )
    return warped


# ============================================================================
# UNIQUE SCIENTIFIC & TECHNICAL DIAGRAM RENDERERS (SCENE 3)
# ============================================================================
def draw_unique_diagram(
    draw: ImageDraw.ImageDraw,
    em_draw: ImageDraw.ImageDraw,
    diagram_type: str,
    box: tuple[int, int, int, int],
    t_local: float,
    accent_rgb: tuple[int, int, int],
):
    x1, y1, x2, y2 = box
    w = x2 - x1
    h = y2 - y1
    cx = (x1 + x2) // 2
    cy = (y1 + y2) // 2

    # Subtle grid background
    for gx in range(x1 + 24, x2 - 12, 32):
        draw.line([(gx, y1 + 12), (gx, y2 - 12)], fill=(238, 234, 226), width=1)
    for gy in range(y1 + 24, y2 - 12, 32):
        draw.line([(x1 + 12, gy), (x2 - 12, gy)], fill=(238, 234, 226), width=1)

    if diagram_type == "nyquist":
        # Complex s-plane axes + Nyquist contour encircling (-1, j0)
        draw.line([(x1 + 30, cy), (x2 - 30, cy)], fill=INK2_RGB, width=2)
        draw.line([(cx + 30, y1 + 24), (cx + 30, y2 - 24)], fill=INK2_RGB, width=2)
        pts = []
        for i in range(90):
            ang = (i / 89.0) * math.pi * 2.0
            r = 65 + 28 * math.cos(ang * 2 + t_local * 2.5)
            px = (cx - 15) + int(r * math.cos(ang))
            py = cy + int(r * 0.72 * math.sin(ang))
            pts.append((px, py))
        draw.line(pts, fill=accent_rgb, width=4)
        em_draw.line(pts, fill=accent_rgb, width=4)
        # Critical point (-1, j0)
        crit_x, crit_y = cx - 35, cy
        draw.ellipse((crit_x - 7, crit_y - 7, crit_x + 7, crit_y + 7), fill=(225, 29, 72))
        em_draw.ellipse((crit_x - 8, crit_y - 8, crit_x + 8, crit_y + 8), fill=(225, 29, 72))
        draw.text((crit_x - 24, crit_y + 12), "(-1, j0)", fill=INK_RGB, font=FONTS["mono_b"])

    elif diagram_type == "aleks_pie":
        # ALEKS Knowledge Pie + 1st-Order Decay Curve
        pie_cx, pie_cy, r = x1 + 115, cy, 68
        slices = [
            (0, 95, (225, 29, 72)),
            (95, 195, (37, 99, 235)),
            (195, 285, (16, 185, 129)),
            (285, 360, (245, 158, 11)),
        ]
        for s0, s1, col in slices:
            draw.pieslice((pie_cx - r, pie_cy - r, pie_cx + r, pie_cy + r), s0, s1, fill=col, outline=PAPER_RGB, width=3)
        draw.ellipse((pie_cx - 28, pie_cy - 28, pie_cx + 28, pie_cy + 28), fill=PAPER_RGB)
        draw.text((pie_cx - 18, pie_cy - 8), "94%", fill=INK_RGB, font=FONTS["sm_b"])
        # Exponential curve on right
        gx0, gy0 = x1 + 215, y2 - 38
        gw, gh = w - 245, h - 76
        draw.line([(gx0, gy0 - gh), (gx0, gy0), (gx0 + gw, gy0)], fill=INK_RGB, width=2)
        curve = []
        for i in range(50):
            u = i / 49.0
            px = int(gx0 + u * gw)
            py = int(gy0 - gh * math.exp(-2.4 * u))
            curve.append((px, py))
        draw.line(curve, fill=accent_rgb, width=4)
        em_draw.line(curve, fill=accent_rgb, width=4)
        hx = int(gx0 + 0.29 * gw)
        hy = int(gy0 - gh * 0.5)
        draw.ellipse((hx - 6, hy - 6, hx + 6, hy + 6), fill=EMERALD_RGB)
        em_draw.ellipse((hx - 7, hy - 7, hx + 7, hy + 7), fill=EMERALD_RGB)
        draw.text((hx + 10, hy - 10), "t_1/2 = 20.0s", fill=INK_RGB, font=FONTS["mono_b"])

    elif diagram_type == "vector_field":
        # Conservative Vector Field + Line Integral Path (0,0) -> (2,3)
        for vx in range(x1 + 40, x2 - 40, 48):
            for vy in range(y1 + 36, y2 - 36, 40):
                dx, dy = 14, -10
                draw.line([(vx, vy), (vx + dx, vy + dy)], fill=(148, 163, 184), width=2)
                draw.ellipse((vx + dx - 2, vy + dy - 2, vx + dx + 2, vy + dy + 2), fill=(148, 163, 184))
        pts = []
        for i in range(40):
            u = i / 39.0
            px = int(x1 + 55 + u * (w - 110))
            py = int(y2 - 42 - (u ** 1.4) * (h - 84))
            pts.append((px, py))
        draw.line(pts, fill=accent_rgb, width=4)
        em_draw.line(pts, fill=accent_rgb, width=5)
        draw.ellipse((pts[0][0] - 6, pts[0][1] - 6, pts[0][0] + 6, pts[0][1] + 6), fill=INK_RGB)
        draw.ellipse((pts[-1][0] - 7, pts[-1][1] - 7, pts[-1][0] + 7, pts[-1][1] + 7), fill=EMERALD_RGB)
        em_draw.ellipse((pts[-1][0] - 8, pts[-1][1] - 8, pts[-1][0] + 8, pts[-1][1] + 7), fill=EMERALD_RGB)
        draw.text((pts[0][0] + 10, pts[0][1] - 16), "(0,0)", fill=INK_RGB, font=FONTS["mono_b"])
        draw.text((pts[-1][0] - 58, pts[-1][1] + 10), "(2,3) => 17", fill=INK_RGB, font=FONTS["mono_b"])

    elif diagram_type == "phasor_circuit":
        # Impedance Phasor Triangle: R=40, X=30, |Z|=50
        pA = (x1 + 75, y2 - 48)
        pB = (x2 - 95, y2 - 48)
        pC = (x2 - 95, y1 + 48)
        draw.line([pA, pB], fill=INK_RGB, width=3)
        draw.line([pB, pC], fill=(245, 158, 11), width=3)
        draw.line([pA, pC], fill=accent_rgb, width=4)
        em_draw.line([pA, pC], fill=accent_rgb, width=5)
        draw.text(((pA[0] + pB[0]) // 2 - 35, pA[1] + 10), "R = 40 Ohm", fill=INK_RGB, font=FONTS["mono_b"])
        draw.text((pB[0] + 8, (pB[1] + pC[1]) // 2 - 8), "X = 30", fill=INK_RGB, font=FONTS["mono_b"])
        draw.text(((pA[0] + pC[0]) // 2 - 65, (pA[1] + pC[1]) // 2 - 22), "|Z| = 50.0 Ohm", fill=accent_rgb, font=FONTS["mono_b"])

    elif diagram_type == "recurrence_tree":
        # Master Theorem Recurrence Tree: Root -> 4 children
        root = (cx, y1 + 42)
        children = [(x1 + 70 + i * ((w - 140) // 3), y2 - 58) for i in range(4)]
        for ch in children:
            draw.line([root, ch], fill=accent_rgb, width=3)
            em_draw.line([root, ch], fill=accent_rgb, width=3)
            draw.rounded_rectangle((ch[0] - 34, ch[1] - 18, ch[0] + 34, ch[1] + 18), radius=8, fill=MINT_RGB, outline=INK_RGB, width=2)
            draw.text((ch[0] - 22, ch[1] - 8), "T(n/2)", fill=INK_RGB, font=FONTS["mono_b"])
        draw.rounded_rectangle((root[0] - 58, root[1] - 20, root[0] + 58, root[1] + 20), radius=10, fill=INK_RGB)
        draw.text((root[0] - 46, root[1] - 8), "n^2 log n", fill=PAPER_RGB, font=FONTS["mono_b"])

    elif diagram_type == "normal_curve":
        # Gaussian Normal Curve Z ~ N(0,1) with shaded 95% CI
        base_y = y2 - 38
        curve_pts = []
        poly_pts = [(x1 + 85, base_y)]
        for i in range(80):
            u = (i / 79.0) * 6.0 - 3.0
            px = int(x1 + 35 + ((u + 3.0) / 6.0) * (w - 70))
            py = int(base_y - (h - 78) * math.exp(-0.5 * u * u))
            curve_pts.append((px, py))
            if -1.96 <= u <= 1.96:
                poly_pts.append((px, py))
        poly_pts.append((x2 - 85, base_y))
        if len(poly_pts) > 3:
            draw.polygon(poly_pts, fill=(226, 211, 250))
        draw.line([(x1 + 25, base_y), (x2 - 25, base_y)], fill=INK_RGB, width=2)
        draw.line(curve_pts, fill=accent_rgb, width=4)
        em_draw.line(curve_pts, fill=accent_rgb, width=4)
        draw.text((cx - 42, cy + 4), "95.00% CI", fill=INK_RGB, font=FONTS["body_b"])

    elif diagram_type == "bio_membrane":
        # Mitochondrial Inner Membrane & Complex I Proton Pump
        mem_y1, mem_y2 = cy - 18, cy + 18
        draw.rectangle((x1 + 25, mem_y1, x2 - 25, mem_y2), fill=(254, 243, 199), outline=INK_RGB, width=2)
        for px in range(x1 + 38, x2 - 35, 22):
            draw.ellipse((px - 5, mem_y1 - 6, px + 5, mem_y1 + 4), fill=(245, 158, 11))
            draw.ellipse((px - 5, mem_y2 - 4, px + 5, mem_y2 + 6), fill=(245, 158, 11))
        # Complex I transmembrane protein
        draw.rounded_rectangle((cx - 48, cy - 52, cx + 48, cy + 52), radius=16, fill=accent_rgb, outline=INK_RGB, width=2)
        em_draw.rounded_rectangle((cx - 48, cy - 52, cx + 48, cy + 52), radius=16, outline=accent_rgb, width=4)
        draw.text((cx - 36, cy - 10), "Complex I", fill=PAPER_RGB, font=FONTS["sm_b"])
        draw.text((cx - 28, y1 + 16), "4 H+ Pumped", fill=DARK_EMERALD, font=FONTS["mono_b"])

    elif diagram_type == "parabola_tangent":
        # JSXGraph Cubic Curve & Tangent Line at x=2
        draw.line([(x1 + 30, cy + 20), (x2 - 30, cy + 20)], fill=INK_RGB, width=2)
        draw.line([(cx - 30, y1 + 20), (cx - 30, y2 - 20)], fill=INK_RGB, width=2)
        pts = []
        for i in range(60):
            u = (i / 59.0) * 3.2 - 1.2
            px = int((cx - 30) + u * 65)
            val = 0.25 * (u ** 3) - 0.6 * u
            py = int((cy + 20) - val * 55)
            if y1 + 18 <= py <= y2 - 18 and x1 + 20 <= px <= x2 - 20:
                pts.append((px, py))
        if len(pts) > 2:
            draw.line(pts, fill=accent_rgb, width=4)
            em_draw.line(pts, fill=accent_rgb, width=4)
        # Tangent line
        tx0, ty0 = cx + 35, cy + 38
        tx1, ty1 = cx + 115, cy - 58
        draw.line([(tx0, ty0), (tx1, ty1)], fill=EMERALD_RGB, width=3)
        em_draw.line([(tx0, ty0), (tx1, ty1)], fill=EMERALD_RGB, width=4)
        draw.text((tx0 + 14, ty0 - 24), "m = f'(2) = 8", fill=INK_RGB, font=FONTS["mono_b"])

    elif diagram_type == "projectile_arc":
        # Cliff + Projectile Parabolic Trajectory
        cliff_x = x1 + 75
        ground_y = y2 - 32
        top_y = y1 + 44
        draw.rectangle((x1 + 24, top_y, cliff_x, ground_y), fill=(209, 213, 219), outline=INK_RGB, width=2)
        draw.line([(x1 + 24, ground_y), (x2 - 24, ground_y)], fill=INK_RGB, width=2)
        arc = []
        for i in range(45):
            u = i / 44.0
            px = int(cliff_x + u * (w - 135))
            py = int(top_y + (u ** 2) * (ground_y - top_y))
            arc.append((px, py))
        draw.line(arc, fill=accent_rgb, width=4)
        em_draw.line(arc, fill=accent_rgb, width=5)
        draw.text((cliff_x + 16, top_y - 18), "v_x = 15 m/s", fill=INK_RGB, font=FONTS["mono_b"])
        draw.text((arc[-1][0] - 95, ground_y - 24), "dx = 45.0 m", fill=DARK_EMERALD, font=FONTS["mono_b"])

    elif diagram_type == "shadow_dom_layers":
        # 3-Layer Sandbox Diagram
        layers = [
            ("Layer 1: Host Canvas DOM (window.onblur)", (254, 226, 226), (185, 28, 28)),
            ("Layer 2: Chromium Isolated World Boundary", PERI_RGB, INK_RGB),
            ("Layer 3: attachShadow({ mode: 'closed' })", MINT_RGB, DARK_EMERALD),
        ]
        for idx, (label, bg, fg) in enumerate(layers):
            ly = y1 + 26 + idx * 58
            draw.rounded_rectangle((x1 + 32, ly, x2 - 32, ly + 44), radius=12, fill=bg, outline=fg, width=2)
            if idx == 2:
                em_draw.rounded_rectangle((x1 + 32, ly, x2 - 32, ly + 44), radius=12, outline=EMERALD_RGB, width=3)
            draw.text((x1 + 48, ly + 13), label, fill=fg, font=FONTS["mono_b"])

    else:  # quiz_log_timeline
        # Canvas Quiz Log Timeline Inspector
        rows = [
            ("00:14  Viewed question #1", MINT_RGB, DARK_EMERALD),
            ("00:46  Answered question #1 (1-by-1)", MINT_RGB, DARK_EMERALD),
            ("01:22  page_blurred: 0 EVENTS LOGGED", MINT_RGB, DARK_EMERALD),
        ]
        for idx, (txt, bg, fg) in enumerate(rows):
            ry = y1 + 28 + idx * 56
            draw.rounded_rectangle((x1 + 32, ry, x2 - 32, ry + 42), radius=12, fill=bg, outline=EMERALD_RGB, width=2)
            em_draw.ellipse((x1 + 46, ry + 15, x1 + 58, ry + 27), fill=EMERALD_RGB)
            draw.ellipse((x1 + 46, ry + 15, x1 + 58, ry + 27), fill=EMERALD_RGB)
            draw.text((x1 + 68, ry + 12), txt, fill=fg, font=FONTS["mono_b"])


# ============================================================================
# SCENE COMPOSITOR (5 EXPLAINER + PRODUCT DEMO SCENES)
# ============================================================================
def render_frame(spec: dict, frame_idx: int, fps: int = 30) -> np.ndarray:
    t = frame_idx / float(fps)
    W, H = 1280, 720

    base = BG_GRID_TEMPLATE.copy()
    em = Image.new("RGB", (W, H), (0, 0, 0))
    draw = ImageDraw.Draw(base)
    em_draw = ImageDraw.Draw(em)

    accent_rgb = hex_to_rgb(spec["accent"])
    pastel_rgb = hex_to_rgb(spec["pastel"])
    float_y = math.sin(t * 2.6) * 5.0

    # Top Brand Bar (Always present for continuity, safe margins)
    draw.rounded_rectangle((48, 24, W - 48, 72), radius=24, fill=PAPER_RGB, outline=(226, 222, 214), width=2)
    base.paste(MASCOT_SM, (64, 31), MASCOT_SM_MASK)
    draw.text((108, 36), "ExamGhost", fill=INK_RGB, font=FONTS["body_b"])
    draw.rounded_rectangle((216, 35, 268, 61), radius=12, fill=CREAM_RGB, outline=(220, 215, 207))
    draw.text((226, 40), "2026", fill=INK2_RGB, font=FONTS["xs_b"])

    # Platform Pill in Header
    plat_label = f"{spec['platform']} • Verified Stealth"
    draw.rounded_rectangle((282, 34, 610, 62), radius=14, fill=pastel_rgb)
    draw.ellipse((296, 43, 306, 53), fill=accent_rgb)
    em_draw.ellipse((295, 42, 307, 54), fill=accent_rgb)
    draw.text((316, 40), plat_label[:38], fill=INK_RGB, font=FONTS["sm_b"])

    # Right Telemetry Status Pill in Header
    draw.rounded_rectangle((W - 390, 34, W - 64, 62), radius=14, fill=MINT_RGB)
    draw.ellipse((W - 374, 43, W - 364, 53), fill=EMERALD_RGB)
    em_draw.ellipse((W - 375, 42, W - 363, 54), fill=EMERALD_RGB)
    draw.text((W - 354, 40), "Closed Shadow DOM • 0 Blur", fill=DARK_EMERALD, font=FONTS["sm_b"])

    # Default 2.5D camera parameters
    tilt_x, tilt_y, zoom, pan_x, pan_y = 0.0, 0.0, 1.0, 0.0, 0.0

    # ------------------------------------------------------------------------
    # SCENE 1 (0.0s - 3.0s): FRAME 0 HOOK & 2.5D ARCHITECTURE EXPLAINER
    # ------------------------------------------------------------------------
    if t < 3.0:
        u = t / 3.0
        # Frame 0 is already a complete, finished composition (u=0 -> card fully visible!)
        tilt_x = math.sin(u * math.pi) * 2.2
        tilt_y = -2.8 + u * 5.0
        zoom = 1.0 + 0.04 * math.sin(u * math.pi)

        # Left Hero Explainer Card
        lx1, ly1, lx2, ly2 = 56, int(98 + float_y * 0.6), 750, int(588 + float_y * 0.6)
        draw_elevated_shadow(draw, (lx1, ly1, lx2, ly2), 32, 1.2)
        draw.rounded_rectangle((lx1, ly1, lx2, ly2), radius=32, fill=PAPER_RGB, outline=(222, 218, 210), width=2)

        # Eyebrow badge
        draw.rounded_rectangle((lx1 + 32, ly1 + 28, lx1 + 430, ly1 + 60), radius=16, fill=pastel_rgb)
        draw.ellipse((lx1 + 48, ly1 + 39, lx1 + 58, ly1 + 49), fill=accent_rgb)
        em_draw.ellipse((lx1 + 47, ly1 + 38, lx1 + 59, ly1 + 50), fill=accent_rgb)
        draw.text((lx1 + 70, ly1 + 36), f"EXPLAINER • {spec['platform'].upper()}", fill=INK_RGB, font=FONTS["xs_b"])

        # Headline (wrapped cleanly on word boundaries)
        lines = wrap_words(spec["hook_title"], 28)
        for idx, ln in enumerate(lines[:2]):
            draw.text((lx1 + 32, ly1 + 74 + idx * 46), ln, fill=INK_RGB, font=FONTS["h1"])

        # Subtitle (wrapped cleanly on word boundaries, never mid-word)
        sub_y = ly1 + 78 + len(lines[:2]) * 46
        sub_lines = wrap_words(spec["hook_sub"], 62)
        for s_idx, s_ln in enumerate(sub_lines[:2]):
            draw.text((lx1 + 32, sub_y + s_idx * 22), s_ln, fill=INK2_RGB, font=FONTS["body"])

        # 3-Stage Animated Architecture Pipeline inside Scene 1
        pipe_y = sub_y + len(sub_lines[:2]) * 22 + 18
        stage_w = 192
        stages = [
            ("01. INPUT", "Double-Click / Alt+S", CREAM_RGB),
            ("02. SANDBOX", "Closed Shadow DOM", pastel_rgb),
            ("03. OUTPUT", "0.3s Inline Answer", MINT_RGB),
        ]
        for s_i, (s_code, s_lbl, s_bg) in enumerate(stages):
            sx = lx1 + 32 + s_i * (stage_w + 26)
            is_active_stage = int((u * 3.0) % 3) == s_i
            draw.rounded_rectangle(
                (sx, pipe_y, sx + stage_w, pipe_y + 82),
                radius=16,
                fill=s_bg,
                outline=accent_rgb if is_active_stage else (218, 214, 206),
                width=2,
            )
            if is_active_stage:
                em_draw.rounded_rectangle((sx, pipe_y, sx + stage_w, pipe_y + 82), radius=16, outline=accent_rgb, width=3)
            draw.text((sx + 16, pipe_y + 16), s_code, fill=INK2_RGB, font=FONTS["mono"])
            draw.text((sx + 16, pipe_y + 42), s_lbl, fill=INK_RGB, font=FONTS["sm_b"])
            if s_i < 2:
                ax1 = sx + stage_w + 4
                ax2 = sx + stage_w + 22
                ay = pipe_y + 41
                draw.line([(ax1, ay), (ax2, ay)], fill=accent_rgb, width=3)
                em_draw.ellipse((ax2 - 5, ay - 5, ax2 + 5, ay + 5), fill=accent_rgb)

        # DOM Target & Telemetry Pills
        py_base = ly2 - 140
        draw.rounded_rectangle((lx1 + 32, py_base, lx2 - 32, py_base + 50), radius=16, fill=CREAM_RGB, outline=(222, 218, 210), width=2)
        draw.text((lx1 + 48, py_base + 16), f"DOM Target:  {spec['dom_target']}", fill=INK_RGB, font=FONTS["mono_b"])

        draw.rounded_rectangle((lx1 + 32, py_base + 62, lx2 - 32, py_base + 112), radius=16, fill=MINT_RGB, outline=EMERALD_RGB, width=2)
        em_draw.rounded_rectangle((lx1 + 32, py_base + 62, lx2 - 32, py_base + 112), radius=16, outline=EMERALD_RGB, width=3)
        draw.text((lx1 + 48, py_base + 78), f"Verified:  {spec['telemetry_metric']}", fill=DARK_EMERALD, font=FONTS["body_b"])

        # Right 3D Mascot Architecture Card
        rx1, ry1, rx2, ry2 = 780, int(98 - float_y * 0.8), 1224, int(588 - float_y * 0.8)
        draw_elevated_shadow(draw, (rx1, ry1, rx2, ry2), 32, 1.5)
        draw.rounded_rectangle((rx1, ry1, rx2, ry2), radius=32, fill=pastel_rgb, outline=(215, 210, 200), width=2)

        base.paste(MASCOT_LG, (rx1 + 117, ry1 + 36), MASCOT_LG_MASK)

        draw.text((rx1 + 64, ry1 + 266), "One-by-One Stealth", fill=INK_RGB, font=FONTS["h2"])
        pills = [
            "Double-Click Question -> 0.3s Solve",
            "Alt+S Snip -> Vision Math & Graph OCR",
            "No 'Solve All' Bot Spikes in Logs",
        ]
        for p_idx, p_txt in enumerate(pills):
            py = ry1 + 318 + p_idx * 50
            draw.rounded_rectangle((rx1 + 34, py, rx2 - 34, py + 40), radius=20, fill=PAPER_RGB, outline=(220, 215, 205))
            draw.ellipse((rx1 + 50, py + 14, rx1 + 62, py + 26), fill=EMERALD_RGB)
            em_draw.ellipse((rx1 + 50, py + 14, rx1 + 62, py + 26), fill=EMERALD_RGB)
            draw.text((rx1 + 74, py + 11), p_txt, fill=INK_RGB, font=FONTS["sm_b"])

        caption = f"1/5 • {spec['platform']}: Closed Shadow DOM solves inside your tab with 0 blur events."

    # ------------------------------------------------------------------------
    # SCENE 2 (3.0s - 7.0s): ONE-BY-ONE DOUBLE-CLICK + EXTENSION UI + BITMAP REVEAL
    # ------------------------------------------------------------------------
    elif t < 7.0:
        u = (t - 3.0) / 4.0
        # Dynamic 2.5D camera tracking: zoom in toward the double-click & answer reveal
        zoom = 1.0 + 0.08 * math.sin(u * math.pi)
        tilt_y = lerp(3.2, -2.5, ease_in_out_cubic(u))
        tilt_x = math.cos(u * math.pi) * 1.8
        pan_x = lerp(-24.0, 18.0, ease_in_out_cubic(u))

        # Left: Simulated LMS Question Window (800px wide)
        qx1, qy1, qx2, qy2 = 52, int(94 + float_y * 0.4), 838, int(592 + float_y * 0.4)
        draw_elevated_shadow(draw, (qx1, qy1, qx2, qy2), 28, 1.2)
        draw.rounded_rectangle((qx1, qy1, qx2, qy2), radius=28, fill=PAPER_RGB, outline=(218, 214, 206), width=2)

        # macOS Window Chrome
        draw.rounded_rectangle((qx1, qy1, qx2, qy1 + 48), radius=28, fill=(247, 245, 240))
        draw.rectangle((qx1, qy1 + 28, qx2, qy1 + 48), fill=(247, 245, 240))
        for c_idx, col in enumerate([(255, 95, 87), (254, 188, 46), (40, 200, 64)]):
            cx_dot = qx1 + 24 + c_idx * 20
            draw.ellipse((cx_dot, qy1 + 18, cx_dot + 12, qy1 + 30), fill=col)
        draw.text((qx1 + 96, qy1 + 16), f"{spec['platform']} • Question 1 of 5 (Double-Click to Solve)", fill=INK2_RGB, font=FONTS["xs_b"])

        # Question Stem Box (Double-click target at t = 4.0s -> u_click = 0.25)
        is_solved = t >= 4.25
        stem_box = (qx1 + 28, qy1 + 66, qx2 - 28, qy1 + 150)
        stem_outline = EMERALD_RGB if is_solved else (224, 220, 212)
        draw.rounded_rectangle(stem_box, radius=18, fill=CREAM_RGB, outline=stem_outline, width=2)
        q_lines = wrap_words(spec["sample_question"], 62)
        for q_i, q_ln in enumerate(q_lines[:2]):
            draw.text((qx1 + 44, qy1 + 80 + q_i * 26), q_ln, fill=INK_RGB, font=FONTS["body_b"])

        # 4 Answer Options
        correct_idx = spec["correct_index"]
        for idx, opt_str in enumerate(spec["options"]):
            oy1 = qy1 + 164 + idx * 52
            oy2 = oy1 + 44
            is_corr = is_solved and (idx == correct_idx)
            bg_col = MINT_RGB if is_corr else PAPER_RGB
            bd_col = EMERALD_RGB if is_corr else (226, 222, 214)
            draw.rounded_rectangle((qx1 + 28, oy1, qx2 - 28, oy2), radius=14, fill=bg_col, outline=bd_col, width=2)
            if is_corr:
                em_draw.rounded_rectangle((qx1 + 28, oy1, qx2 - 28, oy2), radius=14, outline=EMERALD_RGB, width=4)
                # Subtle Verified Checkmark Pill
                draw.rounded_rectangle((qx2 - 158, oy1 + 8, qx2 - 42, oy2 - 8), radius=12, fill=INK_RGB)
                em_draw.rounded_rectangle((qx2 - 158, oy1 + 8, qx2 - 42, oy2 - 8), radius=12, outline=EMERALD_RGB, width=2)
                draw.text((qx2 - 144, oy1 + 13), "✓ 99.8% Match", fill=MINT_RGB, font=FONTS["xs_b"])
            draw.text((qx1 + 46, oy1 + 13), opt_str[:62], fill=INK_RGB, font=FONTS["body_b" if is_corr else "body"])

        # High-Contrast #141413 Explain Mode Derivation Banner (materializes via Bitmap Reveal!)
        if t >= 4.25:
            rev_prog = (t - 4.25) / 0.55
            banner_w, banner_h = (qx2 - qx1) - 56, 96
            banner_card = Image.new("RGB", (banner_w, banner_h), INK_RGB)
            bdraw = ImageDraw.Draw(banner_card)
            bdraw.rounded_rectangle((0, 0, banner_w - 1, banner_h - 1), radius=18, fill=INK_RGB, outline=EMERALD_RGB, width=2)
            bdraw.ellipse((18, 16, 28, 26), fill=EMERALD_RGB)
            bdraw.text((36, 13), "EXPLAIN MODE • STEP-BY-STEP DERIVATION (0.3s)", fill=MINT_RGB, font=FONTS["xs_b"])
            exp_lines = wrap_words(spec["explanation"], 78)
            for e_i, e_ln in enumerate(exp_lines[:2]):
                bdraw.text(
                    (18, 40 + e_i * 24),
                    e_ln,
                    fill=PAPER_RGB if e_i == 0 else (212, 228, 218),
                    font=FONTS["sm_b" if e_i == 0 else "sm"],
                )
            paste_with_bitmap_reveal(base, em_draw, banner_card, (qx1 + 28, qy2 - 112), rev_prog, EMERALD_RGB, radius=18)

        # Right: Clean, Minimal ExamGhost Extension Popup (Matches Website Branding, NO Solve All Button!)
        ex1, ey1, ex2, ey2 = 862, int(94 - float_y * 0.5), 1228, int(592 - float_y * 0.5)
        draw_elevated_shadow(draw, (ex1, ey1, ex2, ey2), 28, 1.4)
        draw.rounded_rectangle((ex1, ey1, ex2, ey2), radius=28, fill=PAPER_RGB, outline=(218, 214, 206), width=2)

        # Extension Header
        draw.rounded_rectangle((ex1 + 20, ey1 + 20, ex2 - 20, ey1 + 74), radius=18, fill=CREAM_RGB)
        base.paste(MASCOT_SM, (ex1 + 32, ey1 + 30), MASCOT_SM_MASK)
        draw.text((ex1 + 76, ey1 + 28), "ExamGhost", fill=INK_RGB, font=FONTS["body_b"])
        draw.text((ex1 + 76, ey1 + 49), "Stealth Active • One-by-One", fill=DARK_EMERALD, font=FONTS["xs_b"])
        draw.ellipse((ex2 - 46, ey1 + 41, ex2 - 34, ey1 + 53), fill=EMERALD_RGB)
        em_draw.ellipse((ex2 - 47, ey1 + 40, ex2 - 33, ey1 + 54), fill=EMERALD_RGB)

        # Mode Selector (Highlight / Explain / Stealth)
        modes = [("Highlight", False), ("Explain", True), ("Stealth ✓", False)]
        mw = (ex2 - ex1 - 52) // 3
        for m_idx, (m_lbl, m_act) in enumerate(modes):
            mx1 = ex1 + 20 + m_idx * (mw + 6)
            draw.rounded_rectangle(
                (mx1, ey1 + 90, mx1 + mw, ey1 + 128),
                radius=12,
                fill=INK_RGB if m_act else CREAM_RGB,
                outline=INK_RGB if m_act else (222, 218, 210),
            )
            draw.text((mx1 + 14, ey1 + 102), m_lbl, fill=PAPER_RGB if m_act else INK2_RGB, font=FONTS["xs_b"])

        # Action Cards inside Minimal Extension UI (Strictly Double-Click 1-by-1 & Alt+S Snip)
        draw.rounded_rectangle((ex1 + 20, ey1 + 144, ex2 - 20, ey1 + 236), radius=18, fill=MINT_RGB, outline=EMERALD_RGB, width=2)
        draw.text((ex1 + 36, ey1 + 160), "Double-Click Any Question", fill=INK_RGB, font=FONTS["body_b"])
        draw.text((ex1 + 36, ey1 + 186), "Solves 1 question at a time", fill=DARK_EMERALD, font=FONTS["sm_b"])
        draw.text((ex1 + 36, ey1 + 208), "for 100% natural quiz logs.", fill=DARK_EMERALD, font=FONTS["sm"])

        draw.rounded_rectangle((ex1 + 20, ey1 + 250, ex2 - 20, ey1 + 332), radius=18, fill=CREAM_RGB, outline=(222, 218, 210), width=2)
        draw.text((ex1 + 36, ey1 + 266), "Snap-It Vision OCR", fill=INK_RGB, font=FONTS["body_b"])
        draw.rounded_rectangle((ex2 - 96, ey1 + 264, ex2 - 34, ey1 + 290), radius=8, fill=INK_RGB)
        draw.text((ex2 - 84, ey1 + 270), "Alt + S", fill=PAPER_RGB, font=FONTS["mono_b"])
        draw.text((ex1 + 36, ey1 + 296), "Snip graphs, diagrams & PDFs", fill=INK2_RGB, font=FONTS["sm"])

        # Live Telemetry Counter Card
        solves_left = 49 if is_solved else 50
        draw.rounded_rectangle((ex1 + 20, ey1 + 348, ex2 - 20, ey2 - 22), radius=18, fill=INK_RGB)
        draw.text((ex1 + 36, ey1 + 366), "FREE TRIAL CREDITS", fill=MINT_RGB, font=FONTS["xs_b"])
        draw.text((ex1 + 36, ey1 + 390), f"{solves_left} / 50 Solves", fill=PAPER_RGB, font=FONTS["h2"])
        draw.text((ex1 + 36, ey1 + 436), "window.onblur: 0 Events", fill=MINT_RGB, font=FONTS["mono_b"])
        draw.text((ex1 + 36, ey1 + 460), "Shadow Root: CLOSED", fill=(196, 208, 248), font=FONTS["mono_b"])

        # 120Hz Supersampled Cursor Movement + Emission Trail + Double-Click Bloom Ripple
        target_cx, target_cy = qx1 + 310, qy1 + 102
        start_cx, start_cy = 980, 420
        for sub in range(8, -1, -1):
            t_sub = max(3.0, t - sub * (1.0 / 120.0))
            m_prog = ease_out_cubic((t_sub - 3.1) / 0.85)
            cx_p = int(lerp(start_cx, target_cx, m_prog))
            cy_p = int(lerp(start_cy, target_cy, m_prog) - math.sin(m_prog * math.pi) * 42)
            rad = max(2, 9 - sub)
            if sub > 0 and 3.1 < t_sub < 4.05:
                em_draw.ellipse((cx_p - rad, cy_p - rad, cx_p + rad, cy_p + rad), fill=accent_rgb)
            elif sub == 0:
                # Draw physical pointer arrow
                pts_cur = [(cx_p, cy_p), (cx_p + 18, cy_p + 14), (cx_p + 10, cy_p + 16), (cx_p + 14, cy_p + 26), (cx_p + 9, cy_p + 28), (cx_p + 5, cy_p + 18), (cx_p, cy_p + 23)]
                draw.polygon(pts_cur, fill=INK_RGB, outline=PAPER_RGB)
                em_draw.ellipse((cx_p - 5, cy_p - 5, cx_p + 5, cy_p + 5), fill=EMERALD_RGB)

        # Double-Click Bloom Ripple Rings at t = 4.0s and t = 4.14s
        for click_t in [4.0, 4.14]:
            if click_t <= t <= click_t + 0.55:
                rp = ease_out_cubic((t - click_t) / 0.55)
                rr = int(12 + rp * 58)
                draw.ellipse((target_cx - rr, target_cy - rr, target_cx + rr, target_cy + rr), outline=EMERALD_RGB, width=3)
                em_draw.ellipse((target_cx - rr, target_cy - rr, target_cx + rr, target_cy + rr), outline=EMERALD_RGB, width=5)

        caption = "2/5 • Double-click any question for a 0.3s one-by-one solve and step-by-step derivation."

    # ------------------------------------------------------------------------
    # SCENE 3 (7.0s - 10.5s): ALT+S SNAP-IT VISION OCR & UNIQUE DIAGRAM SCAN
    # ------------------------------------------------------------------------
    elif t < 10.5:
        u = (t - 7.0) / 3.5
        tilt_x = 2.6 * math.sin(u * math.pi)
        tilt_y = lerp(-3.0, 2.8, ease_in_out_cubic(u))
        zoom = 1.0 + 0.06 * math.sin(u * math.pi)

        # Left: Diagram Canvas with Alt+S Bounding Box & Laser OCR Scanline
        dx1, dy1, dx2, dy2 = 56, int(96 + float_y * 0.5), 760, int(588 + float_y * 0.5)
        draw_elevated_shadow(draw, (dx1, dy1, dx2, dy2), 28, 1.3)
        draw.rounded_rectangle((dx1, dy1, dx2, dy2), radius=28, fill=PAPER_RGB, outline=(218, 214, 206), width=2)

        draw.rounded_rectangle((dx1 + 24, dy1 + 22, dx1 + 136, dy1 + 54), radius=10, fill=INK_RGB)
        em_draw.rounded_rectangle((dx1 + 24, dy1 + 22, dx1 + 136, dy1 + 54), radius=10, outline=accent_rgb, width=2)
        draw.text((dx1 + 40, dy1 + 30), "Alt + S OCR", fill=PAPER_RGB, font=FONTS["mono_b"])
        draw.text((dx1 + 152, dy1 + 29), spec["ocr_title"], fill=INK_RGB, font=FONTS["body_b"])

        diag_box = (dx1 + 28, dy1 + 68, dx2 - 28, dy2 - 28)
        draw.rounded_rectangle(diag_box, radius=20, fill=CREAM_RGB, outline=(224, 220, 212), width=2)
        draw_unique_diagram(draw, em_draw, spec["diagram_type"], diag_box, t - 7.0, accent_rgb)

        # Animated Alt+S Selection Reticle & Glowing Laser Scanline (7.3s -> 8.8s)
        snip_prog = ease_out_cubic((t - 7.15) / 0.5)
        sx1, sy1 = diag_box[0] + 14, diag_box[1] + 14
        sx2 = int(lerp(sx1 + 80, diag_box[2] - 14, snip_prog))
        sy2 = int(lerp(sy1 + 60, diag_box[3] - 14, snip_prog))
        draw.rounded_rectangle((sx1, sy1, sx2, sy2), radius=14, outline=accent_rgb, width=3)
        em_draw.rounded_rectangle((sx1, sy1, sx2, sy2), radius=14, outline=accent_rgb, width=3)

        if 7.45 <= t <= 9.2:
            scan_u = ((t - 7.45) / 1.75) % 1.0
            scan_y = int(lerp(sy1 + 8, sy2 - 8, scan_u))
            draw.line([(sx1 + 6, scan_y), (sx2 - 6, scan_y)], fill=EMERALD_RGB, width=4)
            em_draw.line([(sx1 + 4, scan_y), (sx2 - 4, scan_y)], fill=EMERALD_RGB, width=8)

        # Right: Extracted Formula & Multimodal Vision Breakdown Card
        ox1, oy1, ox2, oy2 = 788, int(96 - float_y * 0.5), 1224, int(588 - float_y * 0.5)
        draw_elevated_shadow(draw, (ox1, oy1, ox2, oy2), 28, 1.4)
        draw.rounded_rectangle((ox1, oy1, ox2, oy2), radius=28, fill=INK_RGB, outline=accent_rgb, width=2)

        draw.rounded_rectangle((ox1 + 28, oy1 + 28, ox1 + 270, oy1 + 58), radius=12, fill= DARK_EMERALD)
        em_draw.ellipse((ox1 + 42, oy1 + 38, ox1 + 52, oy1 + 48), fill=EMERALD_RGB)
        draw.ellipse((ox1 + 42, oy1 + 38, ox1 + 52, oy1 + 48), fill=EMERALD_RGB)
        draw.text((ox1 + 62, oy1 + 35), "VISION AI EXTRACTION", fill=MINT_RGB, font=FONTS["xs_b"])

        draw.text((ox1 + 28, oy1 + 78), "Parsed Math & Diagram:", fill=PAPER_RGB, font=FONTS["h3"])
        draw.rounded_rectangle((ox1 + 28, oy1 + 118, ox2 - 28, oy1 + 196), radius=16, fill=(32, 32, 30), outline=EMERALD_RGB, width=2)
        em_draw.rounded_rectangle((ox1 + 28, oy1 + 118, ox2 - 28, oy1 + 196), radius=16, outline=EMERALD_RGB, width=3)
        f_lines = wrap_words(spec["ocr_formula"], 38)
        for f_i, f_ln in enumerate(f_lines[:2]):
            draw.text((ox1 + 40, oy1 + 134 + f_i * 24), f_ln, fill=MINT_RGB, font=FONTS["mono_b"])

        ocr_steps = [
            "1. Bypasses right-click & copy locks",
            "2. Extracts SVG, Canvas & PDF equations",
            "3. Solves inside Closed Shadow DOM",
            "4. Zero clipboard or tab-blur events",
        ]
        for s_idx, s_line in enumerate(ocr_steps):
            sy = oy1 + 224 + s_idx * 58
            draw.rounded_rectangle((ox1 + 28, sy, ox2 - 28, sy + 44), radius=12, fill=(32, 32, 30))
            draw.ellipse((ox1 + 44, sy + 16, ox1 + 56, sy + 28), fill=EMERALD_RGB)
            draw.text((ox1 + 68, sy + 13), s_line, fill=PAPER_RGB, font=FONTS["sm_b"])

        caption = f"3/5 • Press Alt+S to snip any locked {spec['platform']} graph, canvas, or equation."

    # ------------------------------------------------------------------------
    # SCENE 4 (10.5s - 13.5s): 2.5D STEALTH TELEMETRY BENCHMARK AUDIT
    # ------------------------------------------------------------------------
    elif t < 13.5:
        u = (t - 10.5) / 3.0
        tilt_x = -2.2 * math.cos(u * math.pi)
        tilt_y = lerp(2.5, -2.5, ease_in_out_cubic(u))
        zoom = 1.0 + 0.05 * math.sin(u * math.pi)

        # Left Card: Legacy Tab-Switching / Open Sidebar Extensions (RED WARNINGS)
        lx1, ly1, lx2, ly2 = 56, int(98 + float_y * 0.5), 618, int(588 + float_y * 0.5)
        draw_elevated_shadow(draw, (lx1, ly1, lx2, ly2), 28, 1.2)
        draw.rounded_rectangle((lx1, ly1, lx2, ly2), radius=28, fill=PAPER_RGB, outline=(248, 113, 113), width=2)
        draw.rounded_rectangle((lx1 + 28, ly1 + 28, lx1 + 310, ly1 + 60), radius=14, fill=(254, 226, 226))
        draw.text((lx1 + 44, ly1 + 36), "LEGACY TAB-SWITCH / SIDEBARS", fill=(185, 28, 28), font=FONTS["xs_b"])
        draw.text((lx1 + 28, ly1 + 78), "What Professors Flag:", fill=INK_RGB, font=FONTS["h2"])

        bad_rows = [
            ("window.onblur / visibilitychange", "LOGGED (Red Warning)"),
            ("Host DOM <div id='ext-sidebar'>", "EXPOSED to Scanners"),
            ("'Solve All' 0.1s Bulk Timestamp", "FLAGGED Anomaly"),
            ("Clipboard Copy / Paste Event", "BLOCKED / LOGGED"),
        ]
        for b_idx, (k_txt, v_txt) in enumerate(bad_rows):
            by = ly1 + 140 + b_idx * 80
            draw.rounded_rectangle((lx1 + 28, by, lx2 - 28, by + 64), radius=16, fill=(254, 242, 242), outline=(252, 165, 165))
            draw.text((lx1 + 44, by + 12), k_txt, fill=INK_RGB, font=FONTS["sm_b"])
            draw.text((lx1 + 44, by + 36), v_txt, fill=(185, 28, 28), font=FONTS["mono_b"])

        # Right Card: ExamGhost Closed Shadow DOM (100% CLEAN GREEN)
        rx1, ry1, rx2, ry2 = 654, int(98 - float_y * 0.5), 1224, int(588 - float_y * 0.5)
        draw_elevated_shadow(draw, (rx1, ry1, rx2, ry2), 28, 1.5)
        draw.rounded_rectangle((rx1, ry1, rx2, ry2), radius=28, fill=INK_RGB, outline=EMERALD_RGB, width=3)
        em_draw.rounded_rectangle((rx1, ry1, rx2, ry2), radius=28, outline=EMERALD_RGB, width=4)

        draw.rounded_rectangle((rx1 + 28, ry1 + 28, rx1 + 340, ry1 + 60), radius=14, fill=DARK_EMERALD)
        em_draw.ellipse((rx1 + 44, ry1 + 38, rx1 + 54, ry1 + 48), fill=EMERALD_RGB)
        draw.ellipse((rx1 + 44, ry1 + 38, rx1 + 54, ry1 + 48), fill=EMERALD_RGB)
        draw.text((rx1 + 64, ry1 + 36), "EXAMGHOST 2026 STEALTH ENGINE", fill=MINT_RGB, font=FONTS["xs_b"])
        draw.text((rx1 + 28, ry1 + 78), "100% Clean Telemetry:", fill=PAPER_RGB, font=FONTS["h2"])

        good_rows = [
            ("window.onblur / Focus State", "0 BLUR EVENTS (Active)"),
            ("attachShadow({ mode: 'closed' })", "0 HOST DOM TAGS"),
            ("One-by-One Double-Click Pacing", "NATURAL TIMESTAMPS"),
            ("Alt+S Viewport Framebuffer OCR", "ZERO CLIPBOARD HOOKS"),
        ]
        for g_idx, (k_txt, v_txt) in enumerate(good_rows):
            gy = ry1 + 140 + g_idx * 80
            draw.rounded_rectangle((rx1 + 28, gy, rx2 - 28, gy + 64), radius=16, fill=(28, 30, 28), outline=EMERALD_RGB, width=2)
            draw.text((rx1 + 44, gy + 12), k_txt, fill=PAPER_RGB, font=FONTS["sm_b"])
            draw.text((rx1 + 44, gy + 36), f"✓ {v_txt}", fill=MINT_RGB, font=FONTS["mono_b"])

        caption = f"4/5 • {spec['telemetry_metric']} — zero focus-loss or DOM mutation flags."

    # ------------------------------------------------------------------------
    # SCENE 5 (13.5s - 16.0s): OUTRO BRAND LOCKUP & 50 FREE SOLVES CTA
    # ------------------------------------------------------------------------
    else:
        u = (t - 13.5) / 2.5
        tilt_x = (1.0 - ease_out_cubic(u)) * 2.0
        tilt_y = (1.0 - ease_out_cubic(u)) * -2.0
        zoom = 1.0 + 0.03 * math.sin(u * math.pi)

        cx1, cy1, cx2, cy2 = 110, int(104 + float_y * 0.4), 1170, int(584 + float_y * 0.4)
        draw_elevated_shadow(draw, (cx1, cy1, cx2, cy2), 36, 1.5)
        draw.rounded_rectangle((cx1, cy1, cx2, cy2), radius=36, fill=PAPER_RGB, outline=(216, 212, 204), width=2)

        # Left Mascot Showcase inside Outro Card
        draw.rounded_rectangle((cx1 + 36, cy1 + 36, cx1 + 356, cy2 - 36), radius=28, fill=pastel_rgb)
        base.paste(MASCOT_OUT, (cx1 + 101, cy1 + 72), MASCOT_OUT_MASK)
        draw.rounded_rectangle((cx1 + 64, cy1 + 288, cx1 + 328, cy1 + 332), radius=22, fill=PAPER_RGB)
        draw.ellipse((cx1 + 82, cy1 + 304, cx1 + 94, cy1 + 316), fill=EMERALD_RGB)
        em_draw.ellipse((cx1 + 82, cy1 + 304, cx1 + 94, cy1 + 316), fill=EMERALD_RGB)
        draw.text((cx1 + 106, cy1 + 302), "50 Free Solves Included", fill=INK_RGB, font=FONTS["sm_b"])
        draw.text((cx1 + 88, cy1 + 354), "No Credit Card Required", fill=INK2_RGB, font=FONTS["sm_b"])

        # Right CTA Copy & URL Lockup
        rx_text = cx1 + 396
        draw.rounded_rectangle((rx_text, cy1 + 44, rx_text + 360, cy1 + 78), radius=16, fill=MINT_RGB)
        draw.text((rx_text + 18, cy1 + 53), f"READY FOR {spec['platform'].upper()}", fill=DARK_EMERALD, font=FONTS["xs_b"])

        draw.text((rx_text, cy1 + 98), "Study Smarter with", fill=INK_RGB, font=FONTS["h1"])
        draw.text((rx_text, cy1 + 148), "ExamGhost for Chrome.", fill=INK_RGB, font=FONTS["h1"])
        draw.text((rx_text, cy1 + 212), "0.3s Instant Answers • Step-by-Step Explanations • Alt+S Vision OCR", fill=INK2_RGB, font=FONTS["body_b"])

        # Primary CTA Pill Button with Bloom (Full untruncated URL)
        btn_box = (rx_text, cy1 + 266, rx_text + 610, cy1 + 340)
        draw.rounded_rectangle(btn_box, radius=37, fill=INK_RGB, outline=EMERALD_RGB, width=3)
        em_draw.rounded_rectangle(btn_box, radius=37, outline=EMERALD_RGB, width=4)
        draw.ellipse((rx_text + 24, cy1 + 291, rx_text + 48, cy1 + 315), fill=EMERALD_RGB)
        em_draw.ellipse((rx_text + 24, cy1 + 291, rx_text + 48, cy1 + 315), fill=EMERALD_RGB)
        url_display = f"examghost.com/{spec['slug']}"
        url_font = FONTS["mono_b"] if len(url_display) > 42 else FONTS["body_b"]
        draw.text((rx_text + 62, cy1 + 292), url_display, fill=PAPER_RGB, font=url_font)

        draw.text((rx_text + 8, cy1 + 366), "Chrome Web Store • Works on 20+ University LMS & STEM Portals", fill=INK2_RGB, font=FONTS["sm_b"])

        caption = f"5/5 • Claim 50 free solves now at examghost.com/{spec['slug']}"

    # ------------------------------------------------------------------------
    # SAFE-MARGIN CAPTION BAR (Above bottom 8% mobile player controls: y = 602..652)
    # ------------------------------------------------------------------------
    cap_y1, cap_y2 = 602, 650
    draw.rounded_rectangle((110, cap_y1, W - 110, cap_y2), radius=24, fill=INK_RGB, outline=(60, 60, 56), width=1)
    draw.ellipse((132, cap_y1 + 18, 144, cap_y1 + 30), fill=EMERALD_RGB)
    em_draw.ellipse((132, cap_y1 + 18, 144, cap_y1 + 30), fill=EMERALD_RGB)
    draw.text((158, cap_y1 + 15), caption[:96], fill=PAPER_RGB, font=FONTS["sm_b"])

    return apply_25d_camera_and_bloom(base, em, tilt_x, tilt_y, zoom, pan_x, pan_y)


# ============================================================================
# 48kHz STEREO BEAT-GRID MUSIC + PHYSICAL UI FOLEY SFX SYNTHESIZER
# ============================================================================
def synthesize_audio_track(slug: str, idx_seed: int, duration_sec: float = 16.0, sr: int = 48000) -> Path:
    n_samples = int(duration_sec * sr)
    t = np.linspace(0.0, duration_sec, n_samples, endpoint=False)

    # Unique musical root frequency per film (warm pentatonic progression)
    roots = [110.0, 123.47, 130.81, 146.83, 164.81, 174.61, 196.0, 220.0, 138.59, 155.56, 185.0]
    f_root = roots[idx_seed % len(roots)]

    left = np.zeros(n_samples, dtype=np.float64)
    right = np.zeros(n_samples, dtype=np.float64)

    # 1. Warm Stereo Pad Chord (Root + Perfect 5th + Major 9th)
    chord_freqs = [f_root, f_root * 1.5, f_root * 2.0, f_root * 2.25]
    for c_i, cf in enumerate(chord_freqs):
        lfo = 0.5 + 0.5 * np.sin(2 * np.pi * (0.18 + 0.04 * c_i) * t)
        pad = 0.045 * lfo * np.sin(2 * np.pi * cf * t)
        left += pad * (0.7 + 0.2 * (c_i % 2))
        right += pad * (0.7 + 0.2 * ((c_i + 1) % 2))

    # 2. 120 BPM Beat Grid (Beat every 0.50s)
    beat_times = np.arange(0.0, duration_sec, 0.5)
    for b_idx, bt in enumerate(beat_times):
        i0 = int(bt * sr)
        length = int(0.22 * sr)
        i1 = min(n_samples, i0 + length)
        if i1 <= i0:
            continue
        dt = np.arange(i1 - i0) / float(sr)
        # Soft warm sub-kick on even beats, crisp marimba/pluck on odd beats
        if b_idx % 2 == 0:
            f_sweep = 95.0 * np.exp(-18.0 * dt) + 46.0
            kick = 0.16 * np.exp(-11.0 * dt) * np.sin(2 * np.pi * f_sweep * dt)
            left[i0:i1] += kick
            right[i0:i1] += kick
        else:
            arp_mult = [1.0, 1.25, 1.5, 2.0][(b_idx // 2) % 4]
            pluck = 0.065 * np.exp(-16.0 * dt) * np.sin(2 * np.pi * (f_root * 2.0 * arp_mult) * dt)
            left[i0:i1] += pluck * 0.85
            right[i0:i1] += pluck * 1.0

    # 3. Physical UI Foley SFX Synced to timing.json
    rng = np.random.default_rng(1000 + idx_seed)
    for ev in TIMING["sfx_events"]:
        sec = ev["sec"]
        if sec >= duration_sec:
            continue
        i0 = int(sec * sr)
        etype = ev["type"]

        if etype == "whoosh":
            dur = int(0.28 * sr)
            i1 = min(n_samples, i0 + dur)
            dt = np.arange(i1 - i0) / float(sr)
            env = np.sin(np.pi * dt / 0.28) ** 2
            tone = np.sin(2 * np.pi * (180.0 + 320.0 * (dt / 0.28)) * dt)
            w_sig = 0.08 * env * tone
            left[i0:i1] += w_sig
            right[i0:i1] += w_sig * 0.9

        elif etype == "double_click":
            # Two crisp mechanical micro-switch clicks 120ms apart
            for c_off in [0.0, 0.12]:
                ci0 = int((sec + c_off) * sr)
                cdur = int(0.035 * sr)
                ci1 = min(n_samples, ci0 + cdur)
                dt = np.arange(ci1 - ci0) / float(sr)
                click = 0.28 * np.exp(-140.0 * dt) * (
                    0.6 * np.sin(2 * np.pi * 1450.0 * dt) + 0.4 * np.sin(2 * np.pi * 2900.0 * dt)
                )
                left[ci0:ci1] += click
                right[ci0:ci1] += click

        elif etype == "chime_solve":
            # Ascending warm 3-note harmonic solve chime
            for n_i, mult in enumerate([2.0, 2.5, 3.0]):
                ci0 = int((sec + n_i * 0.055) * sr)
                cdur = int(0.42 * sr)
                ci1 = min(n_samples, ci0 + cdur)
                dt = np.arange(ci1 - ci0) / float(sr)
                chime = 0.14 * np.exp(-7.5 * dt) * np.sin(2 * np.pi * (f_root * mult) * dt)
                left[ci0:ci1] += chime * (0.9 if n_i % 2 == 0 else 0.7)
                right[ci0:ci1] += chime * (0.7 if n_i % 2 == 0 else 0.9)

        elif etype == "laser_scan":
            dur = int(0.65 * sr)
            i1 = min(n_samples, i0 + dur)
            dt = np.arange(i1 - i0) / float(sr)
            env = np.sin(np.pi * dt / 0.65)
            f_mod = 520.0 + 480.0 * (dt / 0.65)
            scan = 0.085 * env * np.sin(2 * np.pi * f_mod * dt)
            left[i0:i1] += scan * 0.8
            right[i0:i1] += scan

        elif etype in ("pulse_lock", "resolve_chord"):
            dur = int(0.85 * sr)
            i1 = min(n_samples, i0 + dur)
            dt = np.arange(i1 - i0) / float(sr)
            env = np.exp(-3.5 * dt)
            chord = (
                np.sin(2 * np.pi * (f_root * 2.0) * dt)
                + 0.8 * np.sin(2 * np.pi * (f_root * 2.5) * dt)
                + 0.7 * np.sin(2 * np.pi * (f_root * 3.0) * dt)
            ) * 0.075 * env
            left[i0:i1] += chord
            right[i0:i1] += chord

    # Smooth fade-in (0.15s) and fade-out (0.45s)
    fade_in = min(n_samples, int(0.15 * sr))
    fade_out = min(n_samples, int(0.45 * sr))
    left[:fade_in] *= np.linspace(0.0, 1.0, fade_in)
    right[:fade_in] *= np.linspace(0.0, 1.0, fade_in)
    left[-fade_out:] *= np.linspace(1.0, 0.0, fade_out)
    right[-fade_out:] *= np.linspace(1.0, 0.0, fade_out)

    # Peak normalize to -1.5 dBFS pre-loudnorm
    peak = max(1e-6, np.max(np.abs(np.stack([left, right]))))
    target_peak = 10 ** (-1.5 / 20.0)
    left = (left / peak) * target_peak
    right = (right / peak) * target_peak

    stereo = np.empty((n_samples * 2,), dtype=np.int16)
    stereo[0::2] = np.clip(left * 32767.0, -32767, 32767).astype(np.int16)
    stereo[1::2] = np.clip(right * 32767.0, -32767, 32767).astype(np.int16)

    wav_name = slug.replace("/", "-") + ".wav"
    wav_path = AUDIO_DIR / wav_name
    with wave.open(str(wav_path), "wb") as wf:
        wf.setnchannels(2)
        wf.setsampwidth(2)
        wf.setframerate(sr)
        wf.writeframes(stereo.tobytes())
    return wav_path


# ============================================================================
# MP4 PIPELINE + CONTACT SHEET GENERATOR
# ============================================================================
def render_film(key: str, spec: dict, idx_seed: int, duration_sec: float = 16.0):
    fps = 30
    total_frames = int(duration_sec * fps)
    safe_name = key.replace("/", "-")
    mp4_path = OUT_VIDEO_DIR / f"{safe_name}.mp4"
    poster_path = OUT_POSTER_DIR / f"{safe_name}-poster.jpg"
    wav_path = synthesize_audio_track(safe_name, idx_seed, duration_sec=duration_sec)

    cmd = [
        "ffmpeg",
        "-y",
        "-loglevel", "error",
        "-f", "rawvideo",
        "-vcodec", "rawvideo",
        "-s", "1280x720",
        "-pix_fmt", "rgb24",
        "-r", str(fps),
        "-i", "-",
        "-i", str(wav_path),
        "-c:v", "libx264",
        "-preset", "veryfast",
        "-crf", "23",
        "-pix_fmt", "yuv420p",
        "-af", "loudnorm=I=-14:TP=-1.0:LRA=7",
        "-c:a", "aac",
        "-b:a", "192k",
        "-ar", "48000",
        "-movflags", "+faststart",
        "-shortest",
        str(mp4_path),
    ]

    proc = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    contact_frames = []
    sample_indices = set(np.linspace(0, total_frames - 1, 20, dtype=int).tolist())

    for f_idx in range(total_frames):
        frame_rgb = render_frame(spec, f_idx, fps=fps)
        if f_idx == 0:
            Image.fromarray(frame_rgb).save(poster_path, quality=92)
        if f_idx in sample_indices:
            thumb = Image.fromarray(frame_rgb).resize((320, 180), Image.Resampling.LANCZOS)
            tdraw = ImageDraw.Draw(thumb)
            tdraw.rectangle((6, 6, 98, 28), fill=INK_RGB)
            tdraw.text((12, 9), f"t={f_idx/fps:.1f}s", fill=PAPER_RGB, font=FONTS["mono"])
            contact_frames.append(thumb)
        proc.stdin.write(frame_rgb.tobytes())

    proc.stdin.close()
    proc.wait()
    if proc.returncode != 0:
        raise RuntimeError(f"ffmpeg failed for {key}")

    # Save 20-frame contact sheet (4 cols x 5 rows)
    if contact_frames:
        sheet = Image.new("RGB", (320 * 4, 180 * 5), INK_RGB)
        for idx, th in enumerate(contact_frames[:20]):
            r = idx // 4
            c = idx % 4
            sheet.paste(th, (c * 320, r * 180))
        sheet.save(CONTACT_DIR / f"{safe_name}-contact.jpg", quality=88)

    print(f"[OK] Rendered {mp4_path.name} ({mp4_path.stat().st_size // 1024} KB)")


def _worker(args):
    i, k, sp = args
    render_film(k, sp, i, duration_sec=16.0)


if __name__ == "__main__":
    from concurrent.futures import ProcessPoolExecutor
    mode = sys.argv[1] if len(sys.argv) > 1 else "all"
    films = list(FACTS_DB["films"].items())
    if mode == "draft":
        k, sp = films[0]
        render_film(k, sp, 0, duration_sec=3.0)
    else:
        tasks = [(i, k, sp) for i, (k, sp) in enumerate(films)]
        with ProcessPoolExecutor(max_workers=6) as pool:
            list(pool.map(_worker, tasks))
