/**
 * Canvas/Three renderers can't read CSS custom properties, so the terminal
 * palette is mirrored here (same precedent as CardAscii's hardcoded rgba).
 * Values track --accent / --accent-soft / --accent-deep in global.css.
 */

/** Voxel top face — brightest. */
export const ACCENT = "#2D6BFF";
/** Voxel front face. */
export const ACCENT_SOFT = "#6E9BFF";
/** Voxel side face — darkest; graphic use only, never text. */
export const ACCENT_DEEP = "#01257D";
/** Default glyph color for flat ASCII renders. */
export const GLYPH_COLOR = "rgba(110, 155, 255, 0.85)";
