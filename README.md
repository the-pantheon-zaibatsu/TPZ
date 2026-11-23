# The Pantheon Zaibatsu — Website V3

This version is based on the **approved final cinematic concept** (dark sea, gold stag-and-swords emblem, Yonaguni field note, four archive cards). It does **not** use any of the earlier user-supplied crest or illustration files.

## Design fidelity

The desktop homepage displays the approved high-resolution concept artwork as a single responsive image. Transparent, keyboard-focusable navigation links are positioned over the illustrated buttons and menu. This preserves the visual details of the approved artwork instead of trying to approximate them with rough HTML substitutes. On narrow/mobile screens the site switches to a purpose-built responsive layout using crops from the same approved image and actual HTML text/buttons.

**Important limitation:** The desktop homepage's illustrated text, crest, cards and navigation are baked into the concept image; they cannot be edited separately in HTML. The click areas are live. Interior sections are real HTML, with live navigation and an archive search. For a future fully editable, animated version, the artwork should be separated into independently authored assets and the desktop homepage reconstructed in HTML/CSS.

## Deploy to GitHub Pages

1. Unzip this package.
2. In the GitHub repository `Renval-Sanchez/thepantheonzaibatsu`, replace old website files with the contents of this folder. Remove obsolete assets if desired.
3. Make sure `index.html`, `styles.css`, `script.js`, and `assets/` are at the repository **root**, not nested in a folder.
4. Commit changes to the `main` branch.
5. Under **Settings → Pages**, choose **Deploy from a branch → main → /(root)** and Save.
6. Preview at `https://renval-sanchez.github.io/thepantheonzaibatsu/` after deployment.

No external dependencies, build tools, API keys, trackers or paid hosting required. Works with GitHub Pages project paths. All page links are hash-based, so refreshes work without server routing configuration.

## Current sections

Home, Archive (with client-side search), Manuscripts, Research, Locations, Transmissions and About. Record descriptions are short, fictional in-world content; they are not representations of verified historical findings.

## Editing

- `index.html`: page content and navigation links.
- `styles.css`: layout, typography, responsive styling and clickable desktop overlay coordinates.
- `script.js`: page routing and searchable archive entries.
- `assets/tpz-homepage-art.webp`: approved cinematic homepage artwork.

## Accessibility

Mobile uses actual text and buttons; desktop overlay links have accessible labels and focus indicators. A reduced-motion preference is respected. The desktop image includes an overall accessible description, but its embedded fine-print content is not individually selectable.
