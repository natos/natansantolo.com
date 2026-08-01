---
title: "Chapter 3: The Prototype Is the Spec"
slug: "the-prototype-is-the-spec"
weight: 3
lang: en
book: the-augmented-team
translationKey: tat-chapter-03
draft: false
---


# The Prototype Is the Spec

> Our designers stopped handing off Figma files. They started shipping code.

---

*This is Part 3 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [← Part 2: Upskilling the Augmented Designer](/the-augmented-team/upskilling-the-augmented-designer/)*

---

There's a gap in product development that nobody files a bug report about. A designer finishes a component — every state considered, every transition weighted, the spacing intentional down to the pixel. It goes to engineering. It comes back. And something is off. Not broken. Just slightly dulled.

The easing curve is close, but not right. The hover state lost a frame. The spacing got rounded to the nearest token. I've left that comment in Figma more times than I can count — *so close, can we nudge this back?* — and then annotated more carefully the next time, trying to communicate *feel* through static documentation. Which is a bit like trying to describe a song by writing down the sheet music and hoping someone hears what you heard.

Multiply that across every component, every sprint, for an entire product lifecycle, and you get the difference between products that feel *crafted* and products that merely function.

We decided to close that gap. Not with more documentation. Not with better handoffs. By eliminating the handoff entirely.

---

## What changed

Three things converged that made this moment different from every previous attempt to "improve the design-to-dev workflow."

**Roles blurred.** Figma's Shifting Roles Report found that 64% of product builders now identify with two or more roles. Seventy percent of PMs create wireframes. The traditional swimlanes — PM writes spec, designer makes mockup, engineer builds — are dissolving. Not because anyone planned it, but because the tools now make it possible.

**AI amplified, but didn't simplify.** Brad Frost calls this "The Creative Infinite" — anyone can ask for something to exist, and it just exists. But UC Berkeley researchers found that AI users move faster, take on more tasks, and work longer hours. This is the Jevons Paradox applied to knowledge work: when creation gets cheaper, we don't do less. We do more. The structure of how you work matters more than ever, not less.

**The interpreter disappeared.** For decades, designers needed a developer to translate intent into production. That translation always lost something. Now, with AI-assisted code generation and design systems, designers can own the surface layer directly. The easing curve gets set by the person who decided what it should feel like.

This isn't "designers should learn to code." That framing was always wrong. It's that the structural reason for keeping designers out of the codebase is dissolving.

---

## What the workflow actually looks like

Here's what changed in practice. No theory. Just what we actually do now.

**1. Shape the problem** (2–3 days, async)
Before anyone opens Figma, a PM and designer spend time defining the problem. What's the appetite — how much time are we *willing* to spend? What's in scope? Where are the rabbit holes? The output is a one-page pitch, not a PRD.

**2. Build an interactive prototype** (2–5 days)
The designer builds a working prototype that *is* the spec. Not a static mockup. Not a click-through. Working code. Engineers are in the conversation from day one, flagging feasibility. The designer records a 5-minute video walkthrough for async consumption across time zones.

**3. Kickoff** (30 minutes)
Walk the team through the prototype. Agree on the first thin vertical slice. Engineers own implementation from here.

**4. Build** (2–4 weeks)
Engineers build from the prototype, not from tickets. Designers are available for questions but aren't doing handoff meetings. The prototype answers: what does this do? What are the states? What are the edge cases?

**5. Ship and retro**
Ship what's done. Compare to the original prototype. What survived? What didn't? What do we change next time?

The written spec becomes a lightweight companion — context and constraints only. Not the primary artefact.

---

## How designers learned to ship code

This is the part everyone asks about, and the part that was hardest to get right.

Our designers didn't learn to code in the traditional sense. They didn't take JavaScript courses or study React documentation. They learned to *describe what they wanted* with enough precision that AI could write the code for them.

The workflow: sketch something in Figma or on paper. Open VS Code. Describe the component, the behaviour, the states. Copilot writes the code. The designer reviews, tweaks, prompts again. Within a few hours, there's a working prototype — React, Flutter, whatever the project needs.

One of our senior designers went from delivering Figma layouts to shipping working prototypes in about six weeks. An engineering lead who worked with her noticed the shift immediately: "She was no longer providing Figma layouts but real working examples." She was adding animations, making the app feel alive, working directly with the engineering team on implementation details that used to get lost in handoff.

Another designer, newer to the team, was thrown into a hackathon with an agentic AI project she'd never touched before. She structured the presentation, drove the research, polished the idea — and by the end, her engineering teammates were telling her: "next time, you should write the code too." She was already using AI tools enthusiastically. The gap wasn't willingness. It was the last bit of confidence.

A third brought deep product knowledge that saved PMs hours of context-setting. She understood the services, the dependencies, the user flows — and when she started translating that understanding into code changes, even small ones, the team moved faster because the person who understood the design intent was the same person implementing it.

---

## The quality tension

Here's what I didn't expect: the hardest part wasn't getting designers to write code. It was keeping design standards high while they were learning a new medium.

When you're struggling with a React component, it's tempting to compromise. The animation that should ease with a custom bezier curve gets a generic `ease-in-out` because you can't figure out the syntax. The spacing that should be 12px gets 16px because the token name is shorter. Small compromises, each one reasonable in isolation. Stacked up, they're the erosion of craft.

We had to establish a clear principle: **the bar doesn't drop because the medium changed.** If a designer ships a prototype, it needs to meet the same visual and interaction standards as a Figma file. Copilot can help write the code, but the design eye has to stay sharp.

This tension was productive. It forced designers to articulate *why* a specific easing curve mattered, not just intuit it. It forced engineers to take design intent seriously, because the designer could now point to working code and say "like this" instead of annotating a static screenshot and hoping for the best.

Our CPO said something during this period that stuck with me: the features in the product need to reflect the full intent of what was designed. If something gets dropped because it's "too hard to implement," that's not acceptable when the designer just built a working version of it. The prototype becomes evidence. You can't claim something is impossible when someone already built it.

---

## When not to do this

Not everything should be prototyped in code. We learned this the hard way.

**Early discovery** — when you're still figuring out *what* to build, code is too slow. Sketch. Whiteboard. Figma. Stay in the problem space.

**Strategic design** — vision slices, experience pillars, long-term direction. These need narrative and provocation, not production code.

**Complex systems design** — information architecture, multi-product flows, service design. These need maps and models, not prototypes.

**When the question is "should we?" not "how should it work?"** — code answers the second question. Research and judgment answer the first.

The prototype is the spec for *implementation*. It's not a substitute for thinking.

---

## What this actually solved

Six months in, here's what changed:

**The handoff gap closed.** When the person who decided what the animation should feel like is the same person who set the easing curve, nothing gets lost in translation. Engineers build from working examples, not annotated screenshots.

**Feedback loops got faster.** Instead of "here's a Figma file, build this, show me in two weeks," it's "here's a working prototype, react to it now." Decisions happen in minutes, not sprint cycles.

**Designers gained altitude.** When you stop spending time on handoff documentation, you have time for the work that only designers can do — vision, strategy, research, provocation. The prototype replaces the spec, but it also replaces the three meetings you used to need to explain the spec.

**Engineering trust increased.** Engineers stopped seeing designers as people who hand over pictures and complain when the output doesn't match. Designers started speaking enough of engineering's language to have real conversations about trade-offs, constraints, and possibilities.

**The team got smaller and more capable.** We didn't hire more people. We gave the same people more capability. One designer plus Copilot covers the surface area that used to require a designer plus a front-end engineer for every handoff.

---

## The real lesson

The prototype-is-the-spec philosophy isn't about code. It's about proximity to the material.

Adam Silver writes that the web is a material, like wood — it has a grain. You can work with it or fight against it. For decades, designers fought the grain by designing in a synthetic medium (Figma) and throwing the result over a wall to people who worked in the actual medium (browsers, devices, code). Every translation was a loss.

Now our designers work in the material. Not because they became engineers. But because AI collapsed the distance between intent and implementation. The designer who decides what a button should feel like when you hover over it can now *make* it feel that way, directly, and hand that working reality to an engineer who builds it into the production system.

That's not a process change. It's a material change. And material changes are the ones that stick.

I spent years as the person leaving those Figma comments. Watching my team stop needing to leave them — because they could just *build the thing* — is the closest I've come to seeing craft stop leaking out between two tools. That's why this post matters to me more than the tidy process diagram lets on.
