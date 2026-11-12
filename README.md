# Trading Intelligence public website

Public project information for Trading Intelligence by Skunkworks Africa.

This repository contains only the static website. Research source code, broker exports, account identifiers and credentials belong outside this repository.

The interface adopts [Skunkworks Design System 1.0.0](https://brand.skunkworks.africa/) with approved master logos, semantic light/dark tokens, native components and the corporate navigation contract. See [design-system.md](design-system.md) for pinned sources and acceptance checks.

## Preview

Run `python -m http.server 8080 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8080.

## Publish

GitHub Pages publishes the root of `main`. `.nojekyll` keeps the HTML, CSS and JavaScript as supplied. No compilation or package installation is required. The reviewed design-system resources are vendored locally; there are no external fonts, trackers or data endpoints. All asset paths are relative, so a repository subpath works.

The page follows the operating system colour scheme by default. An explicit Light or Dark selection is saved under `skw-trading-theme`; System removes that selection. No consent banner or analytics integration is needed for this theme preference.

## Content maintenance

The Progress section is a dated development snapshot, not a live service monitor. Update the review date only when claims are reverified. Keep dataset approval and technical validation distinct. Do not add account details, proprietary datasets, performance claims or execution controls to this website.
