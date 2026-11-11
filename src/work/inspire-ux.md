---
order: 1
permalink: /case-study-inspire.html
heading: Modernising an enterprise learning platform between two major releases
title: Modernising an enterprise learning platform between two major releases — Paul Clarke
description: Inspire, a cross-team R&D programme that gave Totara a new navigation theme, a rebuilt catalogue, a simpler library and workspaces, and an accessible heading structure across the product.
summary: A cross-team R&D programme that took Totara from concept and business case to a new default experience in Totara 19.
---

## Context

Totara is an enterprise learning platform used by government, health and other regulated organisations, mostly through partners who theme and extend it. By 2022 the product was capable, but partners and sales teams kept saying the interface held it back in demos and made it hard for customers to promote learning to their own staff.

Inspire was the R&D initiative that answered this. It shipped in the Totara 19 major release, across Learn and Engage.

## My role

As Head of Design, I wrote the concepts and the business case, then owned Inspire as a named initiative: initiative owner, product lead and designer. The work ran across a platform team, the Learn team and an ecosystem team building the catalogue API, alongside QA and documentation. A governance group drawn from engineering, product and architecture oversaw it.

## The problem

- **Navigation broke as sites grew.** The top navigation wrapped onto a second line once a site had more than about six items or long labels, and partners often placed banners in the same space.
- **Two of everything.** Learners had two libraries and two ways into workspaces, with similar functions but different layouts.
- **Headings and type had drifted.** Legacy pages and newer Tui components followed two separate conventions, so pages rarely matched. Screen readers announced the site name as the main heading of every page.

## How it unfolded

1. **Concepts, December 2022 to March 2023.** I wrote an experience canvas for each idea, with a hypothesis, problem, personas and an opportunity score (importance minus current satisfaction). The ideas included side navigation as the default, merging the library and workspace pages, cleaning up filters, and a theme vision with a type scale and information architecture.
2. **Vision and business case, 2023.** I presented the vision as a slide story and a Figma concept, and built a rough working demo of side navigation inside the real product to prove it was feasible.
3. **Roadmap consultation, October to November 2023.** The proposed Totara 19 roadmap went to the steering group, internal teams and 12 strategic partners. A new theme with navigation was among the items partners singled out for support.
4. **Programme set-up, April to May 2024.** Inspire became a named initiative. Work packages were prioritised by technical complexity, strategic fit, market attractiveness, synergies and cost of delay.
5. **Three delivery increments, to December 2024.** First the theme, navigation, library and workspaces; then typography and headings; then the Explore catalogue, learning cards and blocks.

## Key decisions

- **Move navigation to the side.** A side menu lets a site add items and long labels without breaking the layout, allows taller logos, and gives one pattern for desktop, tablet and phone.
- **Organise the menu around learner tasks, not system modules.** The catalogue moved to the top level as Explore. Your library and Your workspaces moved up beside it. Team moved out of Develop because it is not about your own development, and Record of learning became Learn.
- **Keep the theme opt-in, and ship most improvements to every theme.** Inspire became the default for new sites, while partners with their own themes could upgrade safely. The catalogue, library, workspaces, blocks and typography work reached every theme.
- **One library and one workspace overview.** Library sections became filters on one page instead of separate pages, with one button to create a resource or playlist. Workspaces open on an overview rather than inside the first workspace.
- **A new catalogue rather than a patched one.** Explore is a new catalogue type with an accessible tree view, a new filter bar and one learning card design. A catalogue block puts a pre-filtered set of learning on any dashboard.
- **Fix the type foundation.** The root size moved from 10px to 16px so text scales with browser settings, and one heading system replaced the two conventions.
- **Fix H1s now, track the rest.** We agreed to make the page title the H1 on every core page in this release, and to track deeper heading levels as known issues rather than hold the release. I raised the remaining issues at showcases and all-hands so they stayed visible.

```
Before                             After
<h1>Acme Learning</h1>  site name  <header>logo</header>
  <h2>Fire safety</h2>             <h1>Fire safety</h1>
    <h4>Activities</h4>  skipped     <h2>Activities</h2>
```

## Leading across teams

I kept one programme coherent across several teams with a few shared tools:

- **Four principles** that every team used to make trade-offs: value the learner experience over admin configurability; prioritise design system contributions; believe in simplicity; avoid blocking other strategies.
- **One decision register**, holding 17 design and architecture decisions.
- **Re-forecasting each increment** as scope moved. The teams sized and planned their own work, and regular check-ins tied progress back to outcomes when the goals risked being diluted.

## Validation

Midway through the catalogue work I interviewed three learning leads from government and health customers, using working builds. All three found that side navigation matched their expectations. We acted on their feedback about ambiguous icons, icon weight, and whether people search first or filter first.

> “The left-hand nav … gives the sensation of it being modern. And modern is mostly trustworthy.”
> — Learning lead, local government

They also brought the programme back to reality. Most learning in these organisations is mandatory, so a modern interface reduces friction rather than creating demand.

## Outcome

- **A new default experience.** Inspire became the default theme for new sites in Totara 19, with an opt-in upgrade path that protects partner themes.
- **Fewer steps to key areas.** The catalogue, library, workspaces and team all moved to the top level of navigation.
- **Foundations for later work.** Standard learning cards, a catalogue API, the catalogue block and 16px-based type became building blocks for later releases.
- **An accessible heading structure.** Correct H1s across the product, aligned with WCAG and carried into the Totara 19 accessibility conformance report, with guidance for partners, themers and plugin developers.

## Reflection

- **Measure from day one.** We defined click and adoption metrics but did not set a baseline before release, which made the impact harder to prove.
- **Search deserved its own track.** Search and results were prioritised but squeezed out, and the interviews showed this is where learners struggle most.
- **Opt-in slows adoption.** Isolating changes in a theme protected upgrades, but left existing customers on the old navigation unless a partner switched them.
- **Plan the long tail.** Deeper heading levels and third-party plugins needed automated checks, not goodwill. I would fund that up front.

{# Reconstructed in November 2026 from programme pages, the decision register, feature summaries, developer documentation and research notes. Customer, partner and colleague names are withheld. #}
