---
order: 1.7
focus: [experience, systems]
permalink: /case-study-silverstripe-cms-research.html
heading: Turning usability research into a rebuilt CMS interface
title: Turning usability research into a rebuilt CMS interface — Paul Clarke
description: How usability testing of Silverstripe CMS led to a clearer, more modern interface, and a front-end rebuild in Bootstrap that Paul Clarke carried out himself.
summary: Usability testing with six organisations that reshaped the Silverstripe CMS interface, followed by a front-end rebuild I carried out myself.
---

## Context

Silverstripe CMS is an open-source content management system, built by Silverstripe and a community of developers. The community had raised concerns about how pages were published and what their states meant. We set out to test those concerns with real content editors, so future work could focus on what mattered most to them.

The interface had a second problem underneath. Over many years, different developers had built their own front ends for different parts of the CMS, so the code, and the experience, had drifted apart.

## My role

I led a usability study of the CMS with two colleagues and wrote up the results in a report, shared with the wider community in November 2014. I then designed the changes, which shipped across several releases over the following years, and moved back into front-end development to rebuild the entire CMS front end myself, a job that took at least six months.

## The research

We tested the CMS with content editors from six organisations of different sizes, in both the private and public sectors. They spent between 10 and 25 hours a week in the CMS, mostly on their own or in teams of two or three. We asked them to complete everyday tasks around the main page actions and page states, and graded each finding as a major pain point, challenging, or good feedback.

What we found:

- **The language was inconsistent and misleading.** The same state had different names in different places, such as “changed” in the filter and “modified” on the page. “Delete” sounded permanent to most users. As one put it: “For us delete means to FULLY REMOVE a page.”
- **Page states were not understood.** Most users could not explain “modified” or “removed from draft”.
- **Key actions were hidden.** Search and filtering were hard to find, few users knew they could select several pages at once, and only one user managed to restore a deleted page, because they had learned how in training.
- **The preview did not always reflect the real page,** so editors checked their changes in another tab or browser instead.
- **Collaboration happened outside the CMS.** Editors shared changes by sending screenshots, publishing hidden pages or using a colleague's computer.
- **The Files area was confusing,** and moving files one at a time was tedious.

<figure class="example">
	<figcaption>A page from the 2014 report: findings on page states, each graded and linked to the interface</figcaption>
	<div class="example__frame example__frame--logo example__frame--sheet">
		<img src="/images/silverstripe-cms/report-page-states.jpg" width="842" height="595" alt="Report page titled Findings: Page states, with screenshots of the CMS site tree and filter panel annotated with findings on the draft, modified and removed from draft states, site tree hover, and terminology">
	</div>
</figure>

## What changed

The findings set the direction for an uplift of the whole CMS interface:

- **One language.** Labels were unified across the CMS, and site tree labels made page states clearer.
- **Clearer actions.** Drag and drop in the site tree became easier to see and use, and bulk actions improved.
- **A better preview.** A new site preview panel supported responsive layouts, so editors could check their changes in place.
- **A rebuilt Files area.** The Files interface was rebuilt with modern interactions such as drag and drop and multi-select, files could be managed from the page screens, and the CMS showed where each file was used.
- **Calmer notifications.** Toast messages stayed on screen longer, so people could read them.
- **A more modern look.** Spacing improved throughout, and the skeuomorphic styling was stripped back.

<figure class="example">
	<figcaption>Silverstripe CMS today: editing a page, with the preview panel beside it showing the page as visitors will see it</figcaption>
	<div class="example__frame example__frame--logo example__frame--sheet">
		<img src="/images/silverstripe-cms/cms-pages-preview.webp" width="2000" height="1113" loading="lazy" alt="Silverstripe CMS page editor: the site tree on the left with an Add page button and Batch actions, the page's content fields and editor in the middle, Saved and Published buttons below, and a live preview of the page on the right with Draft and Published toggles">
	</div>
</figure>

<figure class="example">
	<figcaption>The rebuilt Files area: uploads, a thumbnail grid with checkboxes for selecting several files, and a Used on tab showing where each file appears</figcaption>
	<div class="example__frame example__frame--logo example__frame--sheet">
		<img src="/images/silverstripe-cms/cms-files.jpg" width="2000" height="1114" loading="lazy" alt="Silverstripe CMS Files area: a grid of image thumbnails, each with a checkbox, under Upload and Add new folder buttons, and a details panel for the selected image with Details, Permissions and Used on tabs">
	</div>
</figure>

## Rebuilding the front end

To make these changes consistently, I moved back into a front-end developer role and rebuilt the entire CMS front end on Bootstrap, working on it alone for at least six months. One shared framework replaced the bespoke front ends that had built up over the years.

The rebuild changed how design worked as much as how the CMS looked. With a shared framework, writing guidance and building new interfaces became faster, and developers needed much less hand-holding from design. It also made it easier for the open-source community to contribute.

## Outcome

- **Evidence instead of opinion.** The report gave the community a shared view of the problems, based on real editors rather than individual opinions, to guide where contributions went.
- **A clearer, more modern CMS.** Consistent language, clearer states, a better preview and a rebuilt Files area addressed the main pain points we found.
- **Faster design and development.** One front-end framework made new interfaces quicker to design and build, and easier for the community to contribute to.
- **A Files area customers noticed.** The new interactions in the Files area were picked up and welcomed by customers.
- **Research that kept going.** The study was not a one-off. Further UI research and improvements followed continually over the next releases.

## Reflection

- **Push harder for development support.** Rebuilding the whole front end alone was a huge undertaking. I should have pushed harder for developers to share the work.
- **Narrow the findings so impact can be measured.** The report surfaced broad issues, which made the impact of the changes hard to measure. Many improvements probably went unnoticed on their own, and showed up only as a general sense that the CMS felt more modern. Clearer, narrower goals would have given us something to measure against.
