---
order: 2
permalink: /case-study-token-system.html
heading: One token system for a legacy LMS and a new app-based framework
title: One token system for a legacy LMS and a new app-based framework — Paul Clarke
description: How a layered token contract let legacy and new interfaces share one design system.
summary: How a layered token contract let old and new interfaces share one system.
chart:
  caption: "How the 471 global variables in the legacy library relate to the new token contract. The first three groups are the 304 colour and radius variables; 131 of them (43%) already connect."
  segments:
    - { label: "Connected", value: 131 }
    - { label: "Bypasses the contract", value: 128 }
    - { label: "Hard-coded", value: 45 }
    - { label: "Not yet in scope", value: 167 }
---

## Context

Totara's LMS combines legacy interfaces, an established component library, and new applications built for a multi-product platform and app framework. Each layer handled colour differently. Enterprise and government customers theme the product to their brand and also need it to meet WCAG conformance requirements.

## My role

As Head of Design, I shaped the token architecture and its design governance. I worked with the front-end architect and engineering teams to set the foundations.

## The problem

Colour came from several sources: legacy variables, values taken directly from Tailwind, and dark-mode values that had been calculated rather than designed. Figma and code drifted apart. Customer theming could break contrast without anyone noticing. Every new product team that consumed the tokens made the structural problems harder to fix.

## Key decisions

- **A layered architecture.** Primitives feed semantic tokens, which feed product-specific tokens and a mapping layer for the legacy LMS. This lets old and new interfaces share one contract while each migrates at its own pace.
- **DTCG as the source of truth, not Figma.** Figma consumes the tokens, as code does. Neither tool owns them, so the system can survive a change of tooling.
- **OKLCH ramps anchored on the brand blue.** The brand colour sits at stop 600, and the default foreground uses 700. OKLCH gives perceptually even steps, which makes contrast between stops predictable.
- **Ramps named by hue, themes named by intent.** Ramps are called blue, green, and so on, while theme names live in the brand preset selector. Primitives are never exposed as Tailwind utilities, so Totara's palette cannot collide with Tailwind's.
- **One token, two modes.** Each token has light and dark values rather than separate files or “-dark” names. This keeps the vocabulary small and makes missing dark values visible.
- **Status colours are not themable.** Alerts, toasts, and banners stay fixed. I accepted some visual clash with customer themes in exchange for colours that keep their meaning and contrast.
- **Values first, names later.** The transition adopts new values before renaming legacy identifiers, so partners face fewer breaking changes at once.
- **Structure before values.** An audit showed that the token values were close but the structure was not. I identified five structural changes, such as one name per colour with light and dark as modes, and proper ramps for status colours. These had to land before other teams contributed, because each one renames or moves tokens, and any work built on the old shape would have to be redone.
- **Make the build hold the line.** I proposed a contract-completeness check that turns gaps into build failures rather than review comments. Any token the team chooses not to expose needs a written reason in an allow-list, so every exception stays reviewable. Run against the code, the check reported 26 errors, which made the size of the problem concrete for everyone.

## Outcome

- All core components in the new framework draw from the new tokens.
- My team built an AI-assisted tool that maps every global variable in the legacy component library to the new token contract, with before-and-after visuals. Of the 304 variables covering colour and radius, 43% already connect to the contract. Most of the rest read primitives directly, which made the remaining migration a mapping task with a clear scope rather than an open-ended redesign.

  {% stackedBar chart.segments, chart.caption, "legacy variables" %}
- The audit identified contrast and dark-mode issues before release and placed them in a prioritised remediation register, including a single focus-ring change across 21 components that raises contrast from about 2:1 to almost 5:1.
- The design team manages tokens in a dedicated Figma file that raises pull requests into the code repository.

## Reflection

I would agree ownership of the primitives with engineering before agreeing any values, because adoption depended on shared ownership. I would also build the automated check earlier. The audit persuaded people in a way that discussion had not, and having it from the start would have kept the contract complete as teams added to it.
