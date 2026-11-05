---
order: 3
permalink: /case-study-product-health-model.html
heading: Making a 25-area product legible enough to fund
title: Making a 25-area product legible enough to fund — Paul Clarke
description: A product health model that divides a mature enterprise platform into ownable areas and reads customer demand with AI.
summary: A health model that divides a mature platform into ownable areas and reads customer demand with AI.
---

## Context

Totara is a mature enterprise learning platform used by governments and regulated industries. Over more than a decade it grew to cover compliance, learning delivery, skills, performance and reporting. Three separate lists described the product: product health areas, groups in our customer ideas portal, and a feature scorecard used to compare us with competitors. None of them agreed, so the same conversation about priorities restarted every planning cycle.

## My role

As Head of Design, I wrote the framework and worked with product management and engineering leads to adopt it. The inputs were the customer ideas portal, NPS, the feature scorecard and a lifecycle audit of the product.

## The problem

Everyone could see the product hurt. Nobody could say where.

- Investment followed the loudest request, not the deepest pain.
- Accessibility and consistency affected every area, so no single area owned them.
- Internal foundations such as the design system were invisible, because customers never vote for them.

## The model

The core move was to stop treating every concern as the same kind of thing. A customer buys capabilities. They experience quality across all of them. Neither is possible without foundations they never see. The model has three layers, each answering a different question.

- **Capability areas: what a customer uses or buys.** 25 areas in six groups: compliance control, learning operations, delivery at scale, skills assurance, evidence and reporting, and platform and ecosystem. Each area has an owner, a backlog and a matching group in the ideas portal. Each description is written as a job, such as “How admins automate enrolments, approvals and rule-based actions.”
- **Quality dimensions: how well it works, everywhere.** Experience consistency, accessibility, responsiveness and reliability are scored inside every area. Accessibility no longer competes with notifications for budget. It shows up in the health of every area, so it is never the line item that gets cut.
- **Enabling foundations: what makes quality achievable.** The design system, the token contract, telemetry, the manual test suite, automated accessibility and visual tests, and core component support. They are not scored on customer demand. They justify themselves through the quality dimensions they make possible.

## Reading areas through the lifecycle

A flat list of 25 areas is still hard to reason about. Placing them along the customer lifecycle shows which people each area serves, what job they are trying to get done, and where friction stops them. It also exposes hand-offs: a learner's broken experience often starts with an admin's configuration.

- **Configure (site admin).** “When we roll out to a new region or tenant, I want to set it up through configuration rather than custom development, so we go live safely and stay upgradeable.”
- **Assign and automate (admin, manager).** “When someone joins, changes role or a rule changes, I want the right learning to reach them automatically, so nobody falls through the gaps.”
- **Build (learning designer).** “When I need to publish or update a course or event, I want to start from good defaults, so I spend my time on content rather than forms.”
- **Discover and learn (learner).** “When I have time or a requirement to learn, I want to find the right thing and pick up where I left off, on any device.”
- **Prove (compliance lead, auditor).** “When an auditor asks, I want to show who is certified and competent today, so the organisation stays compliant.”
- **Grow (manager, employee).** “When we plan development, I want to see skill gaps against a role, so I can choose what to learn or fund next.”

Friction is recorded in the user's words, against a job, so a score always has a reason a designer can act on.

## Key decisions

- **Quality as a dimension, not an area.** As an area, accessibility would always lose a budget conversation to a feature with votes behind it. As a dimension it lowers the health of every area that fails it, which is where the cost really lands.
- **Two scores, deliberately kept apart.** Earlier versions blended demand, reach and quality into one health number. That made popular areas look broken and quiet areas look fine. I split it into health, which looks back at how well an area serves its jobs today, and strategic importance, which looks forward at how much the area matters to where the business is going. Read together, they place each area in one of four positions: invest now, protect, contain or maintain.
- **Two scores instead of five.** I was the only person using the original multi-factor scores. Cutting to two made the model something product leads could score themselves in a meeting.
- **Overlap with the ideas portal on purpose.** Areas and portal groups share an owner, so feedback lands in the right place with no translation step. The competitor scorecard was mapped, not merged: its job is to reveal gaps, not to define how we organise.
- **Fewer, sharper areas.** A catch-all platform services area was dropped. Responsiveness was split into a per-area dimension and a platform-level area. Extended enterprise was promoted to an area with its own owner.
- **AI drafts, people decide.** Because every area maps to a portal group, demand data already arrives sorted by area. I worked with product management to turn the monthly review into a Claude skill. It gathers the month's ideas, votes and NPS comments, matches themes to areas, and drafts a demand-movement table, a portfolio overview and suggested edits to each area page. Nothing updates automatically: each area owner accepts or rejects the proposed change.

## Outcome

- **Owned by product leads.** Capability areas have named owners who maintain their own health and importance scores. Each area has a page in a Confluence health dashboard, so the model lives where product teams already plan, rather than in a new tool they would have to adopt.
- **A monthly AI review.** Product management runs the review each month, with proposed changes approved area by area. Product leads trust the output because the AI shows its working as a proposed difference against the current page, and the owner remains accountable for the score.
- **A route to the roadmap.** The model is being aligned with the product capability framework, so roadmap bets trace back to evidence.

## Reflection

The model moved from one designer's spreadsheet to the product team's operating rhythm once it became simple enough for others to score. Starting in Confluence was deliberate: it proved the structure and the review rhythm before anyone invested in tooling.

The next phase is a visual dashboard that brings both kinds of evidence together: quantitative signals such as votes, NPS and usage, and qualitative evidence such as friction recorded in users' words against a job. Pages of text show one area at a time; a dashboard can show the whole portfolio at once and let someone move from a score to the reason behind it. Alongside that, I would replace opinion with usage data by finishing telemetry as a foundation, settle ownership of the open dimensions of security and core architecture, and add friction evidence from usability sessions alongside portal votes, so quiet but painful jobs are not under-scored.
