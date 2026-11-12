# Skunkworks Design System adoption

Updated 13 November 2026.

## Sources

- Design System **1.0.0**, [brand repository at 0e628c21ea04d37dedda544c0c700c8049d0e883](https://github.com/skunkworks-africa/brand/tree/0e628c21ea04d37dedda544c0c700c8049d0e883).
- `vendor/skunkworks/tokens.css`, `components.css` and `components.js` are unchanged copies from that release. Product-specific layout and header behaviour live in `styles.css` and `site.js`.
- Approved logo masters and favicon: [corporate assets at ed43fea3a7c0c46dd50585bc86e35f35d8de193a](https://github.com/skunkworks-africa/www/tree/ed43fea3a7c0c46dd50585bc86e35f35d8de193a/assets). Local PNG files preserve the originals. Artwork remains owned by Skunkworks.
- Corporate destinations and primary ordering: [canonical navigation contract](https://github.com/skunkworks-africa/www/blob/ed43fea3a7c0c46dd50585bc86e35f35d8de193a/docs/CANONICAL-NAVIGATION.md).

## Application

- Neutral semantic surfaces, foregrounds and borders; no decorative accent palette, gradients or effects. Functional focus colour comes from the canonical design-system token.
- System sans-serif stack, responsive display typography, 16–18px body text and comfortable reading measure. Layout uses the 4px foundation and shared spacing tokens.
- Approved black/white master marks are swapped by theme, never recoloured or inverted. Navigation marks occupy a 32px square with 8px clear space on each side.
- Buttons, badges, cards, notices and tabs use the shared component classes. Tabs use the upstream keyboard handling for Arrow Left/Right, Home and End.
- Top navigation uses Solutions → Services → Academy → Skunkworks, with Shop separate. Mobile keeps the same destinations in a burger-controlled dropdown; Escape closes it and restores focus.
- No documentation sidebar is introduced on this product landing page. No non-functional account, search or consent controls are added.
- The OS sets the initial theme. User selection is optional, origin-local and explicitly described in the footer. Storage errors do not prevent theme changes.
- All artwork and resources are local. Public research claims and private-data boundaries are preserved.

## Release acceptance

Validate both light and dark modes at 320, 390, 768, 1024 and 1440px. Check no horizontal overflow, native image loads, heading/anchor integrity, corporate navigation order, mobile open/close and focus return, tab keyboard navigation, theme override and reset, reduced motion and basic no-JavaScript content. Use automated WCAG A/AA checks and visually inspect mobile and desktop screenshots in both themes.

Local checks on 13 November 2026 passed at all ten width/theme combinations with zero automated WCAG A/AA violations. Desktop and mobile screenshots were visually reviewed in both themes. Keyboard tabs, mobile Escape/focus return, theme persistence/reset, reduced motion, asset loads and no-JavaScript reading were verified. Vendored resources matched the source files by SHA-256 before publication.

Automated checks are not a conformance certification. A manual screen-reader review remains a separate acceptance activity. The public site's development dates describe the earlier technical test, not the website redesign date.
