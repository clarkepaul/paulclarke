---
order: 3
permalink: /case-study-ai-first-practice.html
heading: Moving a design practice to AI-first
title: Moving a design practice to AI-first — Paul Clarke
description: Using AI to measure design quality, not only to generate interfaces.
summary: Using AI to measure quality, not only to generate interfaces.
---

## Context

A small design team supports a large learning platform, a new multi-product platform, many product teams, and partner developers who build their own experiences. Design cannot review everything that ships, and AI tools now let anyone generate interfaces quickly.

## My role

I lead the transition from the legacy design system to the new one, and I look at how AI can change the way the design team works. I also run the shared AI design system tooling used by design and development across the organisation.

## The problem

Design review does not scale to the speed of AI-generated work. If quality depends on a designer seeing every screen, quality will slip. The system has to carry quality itself, and that requires a way to measure it.

## Key decisions

- **Measure before automating.** I started with a baseline rather than a tool. The transition plan sets three foundational checks: a comparison of the token source, Figma variables, and published CSS; visual regression; and automated accessibility testing.
- **Use AI for analysis, not only for generation.** The first results came from AI-assisted analysis of the codebase rather than from generating interfaces. This work is less visible, but it gives the whole practice something to improve against.
- **Keep a person in the loop.** Every analysis states that it is AI-assisted and must be verified before anyone acts on it. AI proposes candidates, and design makes the decision.
- **Enable the team to build its own tools.** The most useful tooling came from a team member using AI to build what the work needed, rather than from a product we bought. My role was to set the problem and the standard of evidence, and to make room for that work.
- **Put the design system where the work happens.** I built a Claude-based Totara UI starter, shared across the organisation in beta, so designers and developers get the system's guidance inside the tools they already use.
- **Choose components that AI tools understand.** The move towards shadcn was partly driven by how well current AI tools work with it, which turns a framework decision into a decision about practice.

## Outcome

- **An audit of the token contract.** AI-assisted analysis of the code repositories identified the structural gaps in the token contract and set them out in a prioritised remediation register.
- **A complete map of the legacy library.** A team member built an AI-assisted tool that traces all 471 global variables to the new contract and shows the before-and-after state. It represents months of combined human and AI effort, and it can be run again at any time to measure progress.
- **A check the build can enforce.** The audit produced a contract-completeness check that turns gaps into build failures. Its first run reported 26 errors.
- **A shared starting point.** The Totara UI starter is in beta and available to everyone in the organisation.

## Reflection

{# Draft reflection: confirm or rewrite before publishing. #}
The most valuable output was not generated interfaces but generated measures. The analyses were reliable at finding candidates and unreliable at judging purpose. Two variables with the same default colour do not necessarily serve the same role. The skill a design team needs is shifting from producing screens to deciding what the system should enforce.
