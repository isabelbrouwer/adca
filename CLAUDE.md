# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for **Adca**, a contract management SaaS product by Pakta B.V. (Dutch company, Sittard). The site is written in Dutch and targets Dutch businesses.

The entire website lives in a **single self-contained HTML file**: `adca_index.html`. There is no build system, no framework, no package manager, and no server-side code. Opening the file in a browser is sufficient to preview it.

## File Structure

```
adca_index.html   — HTML and inline JS (~25 KB, lean and readable)
css/style.css     — all CSS, including design tokens and responsive rules
fonts/            — Temeraire font files (.ttf), referenced by css/style.css via ../fonts/
images/           — danielle.jpg (hero + founder photo), Kleur zonder vaandel.svg (logo)
```

## Architecture of `adca_index.html`

The file is structured in this order:

1. `<head>` — meta tags, inline `<style>` block (all CSS)
2. Page sections marked with HTML comments, in order:
   - `<!-- NAV -->` — sticky navbar with hamburger menus
   - `<!-- HERO -->` — main headline + CTA
   - `<!-- TRUST BAR -->` — social proof numbers
   - `<!-- PAIN -->` — problem/pain cards
   - `<!-- HOW -->` — 4-step process
   - `<!-- AI -->` — AI feature highlight
   - `<!-- REVIEWS -->` — sliding testimonial carousel
   - `<!-- MID CTA STRIP -->` — conversion strip
   - `<!-- PRICING -->` — pricing tiers
   - `<!-- BLOG -->` — blog preview cards
   - `<!-- FOUNDER -->` — founder introduction (Danielle)
   - `<!-- CTA -->` — bottom call-to-action
   - `<!-- FOOTER -->` — company info, links
3. `<script>` block at the end — vanilla JS for nav scroll effect, hamburger menus, and review carousel

## CSS Design Tokens

All colors, fonts, and spacing are defined as CSS custom properties in `:root` (around line 30):

| Token | Value | Usage |
|---|---|---|
| `--blue` | `#005a96` | Primary brand color |
| `--red` | `#f04e4c` | Accent / CTA color |
| `--ink` | `#0d2137` | Body text |
| `--sans` | IBM Plex Sans + system-ui | Body font |
| `--serif` | Temeraire + Georgia | Headings |
| `--inner-max` | `1100px` | Max content width |
| `--section-y` | `7rem` | Vertical section padding |
| `--section-x` | `3rem` | Horizontal padding (overridden to `1.5rem` on mobile) |

## Working with the Files

- **Preview:** Open `adca_index.html` directly in a browser — no server needed.
- **Find a section:** Search for the comment marker, e.g. `<!-- PRICING -->`.
- **Edit styles:** All CSS lives in `css/style.css`. The nav uses CSS Grid (`grid-template-columns: 1fr auto 1fr`) for true centering; so does the footer.
- **Edit content:** Dutch-language copy. Company details: Pakta B.V., Poststraat 1, 6135 KR Sittard, info@adcacontractbeheer.nl, KvK 92061702.
- **Both files are lean** — `adca_index.html` is ~25 KB, `css/style.css` is ~10 KB. Read them in full without offset/limit.
