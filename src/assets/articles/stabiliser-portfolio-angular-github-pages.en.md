A technical portfolio should do more than show screenshots. It should also demonstrate that the project is maintainable, fast and ready to deploy.

For this Angular portfolio, the goal was simple: keep the visual identity while removing parts of the template that no longer added value.

## The problem

The project still included several elements typical of a Bootstrap template:

- unused global scripts;
- vendor assets copied into the final build;
- galleries dependent on unnecessary libraries;
- overly generic text;
- limited SEO metadata;
- inherited styles that made some visual states fragile.

These issues did not prevent the website from working, but they made the portfolio less tidy from a technical standpoint.

## The decisions I made

The first step was to reduce the template's footprint. I removed global scripts, moved the behavior each component needed into the component itself, and replaced the full Bootstrap stylesheet with a lighter subset.

I then reorganized the sections around concrete examples of my work:

- featured projects with my role, their impact and their technology stack;
- a more direct contact section;
- concrete evidence in place of statistics;
- Open Graph and SEO metadata;
- a final build in `docs/` for GitHub Pages.

## What this improves

The portfolio becomes more credible because it no longer relies on behavior hidden in an old JavaScript file. Important states, such as the header's response to scrolling, are handled directly in Angular.

The build is cleaner too: fewer copied assets, fewer unnecessary scripts and static output suited to deployment.

## What I learned

A portfolio is more than a showcase. It is also a small product. Even on a personal website, quality shows in the details: navigation, performance, SEO, readability, data structure and consistent content.

The strongest technical signal is not adding lots of effects. It is showing that every part of the website has a reason to be there.
