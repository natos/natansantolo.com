---
title: "Building Grasshopper"
description: "What happens when you give an augmented designer a weekend and Claude: building a free, open-source mentoring platform through human-AI collaboration."
date: "2026-07-19"
tags:
  - "AI and design"
  - "human-AI collaboration"
  - "augmented designer"
  - "mentoring"
  - "open source"
  - "Claude"
  - "product design"
  - "building in public"
categories:
  - "design"
slug: "building-grasshopper"
draft: false
lang: "en"
translationKey: "building-grasshopper"
image: "/assets/images/grsshppr/grsshppr-card.png"
---

I've spent two years writing about augmented designers—people who use AI to amplify their work, not replace it. Two years of *talking* about it more than *doing* it, at least for anything that mattered beyond my day job.

I use AI heavily at Affinidi. That's a story for another post. The question that kept nagging me was different: could I use these tools to drive the change I want to see in the world, on my own terms?

So one weekend I sat down with Claude and built Grasshopper. And everything I'd theorized about human-AI collaboration stopped being theory.

## Mentoring Platforms Are Broken

ADPList has 38,000+ mentors—overwhelming. MentorCruise charges $150–360/month. But the part that bothers me most is the gamification: "100 hours mentored," "Mentor of the Month," badges and leaderboards. The same quantification that fueled hypergrowth was quietly eroding the quality of the mentoring itself. When you optimize for the number, you stop optimizing for the person in front of you.

I've mentored dozens of designers through ADPList. Every time, I wished for something true to the principles it was founded on, instead of a for-profit, backed-by-greed, growth-hacked platform. Where the relationships mattered more than the marketplace.

I criticized it, and I saw others do the same. Since the begining, I couldn't stop wondering what would happen if the community itself drove the platform and the important decisions.

So I decided to start an experiment: an open-product concept for mentoring. Free. Open-sourced. Minimal.

## What Working With Claude Actually Looked Like

I brought the things a machine can't: product vision, design taste, and a stubborn sense of what mentors and mentees actually need. Claude brought architecture patterns—the Next.js app-router layout, the Drizzle ORM schema—and the ability to turn a schema into a working feature in minutes.

Here's a real exchange. I sketched a feature in plain language: "Mentees should be able to set goals and link sessions to those goals." Claude proposed a schema, laid out the tradeoffs, and asked me clarifying questions I hadn't thought through. I pushed back: "No—goals should be opt-in modules, not core. Not every mentoring relationship needs structured tracking." Claude refactored, updated the engineering docs, and wrote an ADR capturing *why* we made the call.

That last part matters more than it looks.

## The Logo, The Same Pattern

<div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Grasshopper logo emerging" style="width: 100%; opacity: 0.15;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Grasshopper logo emerging" style="width: 100%; opacity: 0.35;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Grasshopper logo emerging" style="width: 100%; opacity: 0.55;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Grasshopper logo emerging" style="width: 100%; opacity: 0.75;">
  <img src="/assets/images/grsshppr/logo.svg" alt="Grasshopper logo, final" style="width: 100%; opacity: 1;">
</div>

The collaboration wasn't only about code. Grasshopper needed an identity, so I did what I'd tell any designer to do: I owned the concept and the style, and let AI handle the execution. I knew what I wanted—the idea, the mood, the feeling—and I refined it across a few iterations of Midjourney until it clicked.

With an initial idea I generated many opportunities, that lead to new decisions.
<img src="/assets/images/grsshppr/grsshppr-logo-iterations-2.png" alt="Grasshopper logo iteration 2" style="width: 100%;">

Fine tuning the specifity of the asthetic direction, the lines, the shapes, the colors.
<img src="/assets/images/grsshppr/grsshppr-logo-iterations-3.png" alt="Grasshopper logo iteration 3" style="width: 100%;">

Same principle as the code: the taste and the *why* were mine. The tool made it real, faster.

## Speed Wasn't the Win

I didn't gain velocity because Claude typed faster. I gained it because nothing got re-litigated—and the reason nothing got re-litigated wasn't that Claude "remembered." It's that every decision landed in an artifact: the engineering docs, the ADRs, the repo itself. The continuity didn't live in the model. It lived in the system we built to hold it. Design decisions from Tuesday informed Friday's work because Tuesday was written down.

That's the part I keep coming back to. The scaffolding that makes AI collaboration compound is something a human still has to design.

### It felt like co-design, not delegation

I wasn't prompting a tool. I was working with a partner that had context. When I said "this feels too heavy," Claude understood I meant *cognitively heavy for users*, not *technically complex*.

### It made me a better architect

By forcing me to articulate *why* a feature should exist, Claude surfaced my own assumptions. When I couldn't explain why something mattered, it usually didn't.

## The Thesis, Made Real

This is what I meant when I wrote about augmented humans:

- **AI amplifies judgment, not just execution.** Claude didn't replace my design thinking—it made my instincts actionable.
- **Collaboration beats automation.** The best outcomes came from tight loops: I'd validate, Claude would build, I'd refine.
- **Humans own the "why."** Claude never questioned whether Grasshopper *should* exist. That's my job. Its job was making it real.

## Built in the Open

Grasshopper is in beta—the core is there, and now it's about hardening and rough edges. I'm looking for contributors (engineers, designers, PMs) and mentors (3+ years of experience, any domain).

The code is public. The roadmap is public. The decision log is public. If you're going to build a platform for mentoring in the open, the platform itself should be built in the open.

And I'm calling it a "we" because that's what it is—a human-AI collaboration. I'm genuinely curious to see where it goes.

---

## Links

- [Explore Grasshopper on GitHub](https://github.com/grasshopper-protocol/grsshppr)
- [Become a Mentor](https://www.grsshppr.org/)
- [Read the Design Docs](https://github.com/grasshopper-protocol/grsshppr/blob/main/DESIGN.md)
- [Read About Our Human-AI Collaboration Model](https://github.com/grasshopper-protocol/grsshppr/blob/main/HUMANS.md)
