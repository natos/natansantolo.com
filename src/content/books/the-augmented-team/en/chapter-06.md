---
title: "Chapter 6: The Knowledge Machine"
slug: "the-knowledge-machine"
weight: 6
lang: en
book: the-augmented-team
translationKey: tat-chapter-06
draft: false
---


# The Knowledge Machine

> Most teams lose institutional knowledge every time someone leaves. We built a system to prevent that.

---

*This is Part 6 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [← Part 5: Augmented Research](/the-augmented-team/augmented-research/)*

---

Everything I've described in this series — the prototyping, the multiplier systems, the augmented research — depends on something invisible. A substrate. A connective tissue that makes all of it possible.

That substrate is knowledge infrastructure.

And honestly? This is the least glamorous post in the series. No cinematic decks. No hackathon moments. No product meetings where the roadmap changes. Just the quiet, stubborn work of building systems that remember.

---

## The problem with team memory

Here's a scenario every design leader knows:

A designer leaves. Their Figma files are there, but the reasoning behind them isn't. The Slack messages where they debated three options and chose the third? Gone after 90 days. The meeting where the CPO said "never do that again"? Not recorded. The research finding that invalidated the original approach? In someone's head — and that someone just handed in their notice.

I've lived the other side of this. Six months after someone left, I sat staring at a beautiful Figma file with no idea why we'd chosen that direction — and no one left to ask. Once is enough to make you build differently.

Every team has tribal knowledge. Most teams just accept the loss when it walks out the door.

We decided not to.

Not because we're paranoid. Because we'd already learned — from building agents, from writing skills, from encoding design knowledge into tokens — that the value of knowledge *compounds* when it's structured. An insight is worth something when one person has it. It's worth considerably more when a machine can retrieve it, connect it, and apply it.

---

## Two systems, two purposes

We built two knowledge systems. They serve different purposes and operate at different scales.

**The personal vault** is my working memory. A PARA-structured Obsidian vault — Projects, Areas, Resources, Archive — with Maps of Content as curated navigation. It holds meeting notes, 1:1 transcripts, design decisions, coaching notes, strategy documents, research synthesis, and daily logs. About 300 files, organised with rigid naming conventions and templates.

**Baseline** is the team's shared evidence base. A Git-tracked repository with a strict evidence-first epistemology. If it's not in Baseline, it's not true yet.

The personal vault is fast, flexible, and messy by nature. Baseline is slow, rigorous, and clean by design. They complement each other the way a notebook complements a published paper — one is for thinking, the other is for knowing.

---

## The personal vault

The vault follows four structural rules:

**1. Never dump files at root.** The root contains exactly one file — `Home.md` — and five Maps of Content (Team, Products, Projects, Design, Research). Everything else goes into the right folder the moment it's created. Not later. Now.

**2. Use the correct template.** Meeting notes get a meeting template. 1:1s get a 1:1 template. Projects get a project brief. Retrospectives get a retro template. The template isn't decoration — it's structured capture. When every meeting note has the same sections (context, decisions, action items, open questions), the vault becomes queryable. You can ask "What was decided about the design system?" and get an answer, because the word "decided" always appears in the same structural position.

**3. Name consistently.** Temporal notes are `YYYY-MM-DD Description`. Evergreen notes are `Descriptive Title`. People get their name. Drafts get `(Draft)`. Prep notes get `(Prep)`. This matters more than it sounds — when you have 300 files, findability is the difference between a knowledge base and a junk drawer.

**4. Link obsessively.** Every note connects to related notes via wiki links. Maps of Content aggregate the connections. The result is a graph — a network of ideas where you can start at any node and navigate to context.

These rules aren't complicated. They're not even original. What makes them work is that they're enforced by an agent.

---

## Gabriela

Gabriela is a Copilot agent that understands the vault.

Not in a generic "I can help you organise files" way. Gabriela knows the folder structure, the naming conventions, the templates, the filing rules, and the linking patterns. When I say "File this meeting note," Gabriela knows to apply the meeting template, name it with today's date, put it in the right project folder, add YAML frontmatter, and link it to the relevant MOC.

The agent has an externalised reference file — a complete map of the vault's structure — that it reads before every operation. When the vault structure changes, I update the reference file, not the agent. The agent adapts.

Here's what Gabriela actually does in practice:

- **After a meeting:** I paste a transcript. Gabriela synthesises it into structured notes — context, key findings, decisions, action items, open questions — files it in the right folder, and adds links.
- **During planning:** I ask "What did we decide about the design system in March?" Gabriela searches the vault, finds the relevant meeting notes and decision records, and surfaces the answer with links to source files.
- **During reviews:** Gabriela runs a vault health check — orphan notes, stale links, root accumulation, naming inconsistencies — and produces a report.
- **During writing:** When I'm drafting a blog post (like this one), Gabriela finds relevant source material across the vault — meeting transcripts, peer feedback, strategy documents — and surfaces quotes and data points.

The meta-lesson is worth stating explicitly: **the system for managing knowledge IS the knowledge management.** The vault rituals (daily filing, weekly review, monthly prune, quarterly health check) aren't overhead. They're the practice that makes everything else work. Skip the weekly review and within a month the vault is a mess. Do it consistently and the vault becomes a superpower — a second brain that actually remembers.

---

## Baseline

If the personal vault is for thinking, Baseline is for knowing.

Baseline has one rule that governs everything: **claims must link to evidence.** Not opinions. Not "everyone knows that." Evidence — traceable to a source, reproducible, citable.

The structure reflects this epistemology:

| Folder | Purpose |
|---|---|
| **evidence/** | Raw inputs from research — qualitative, quantitative, secondary. Facts. |
| **synthesis/** | Patterns derived from multiple pieces of evidence. Interpretations, clearly labelled. |
| **projects/** | Research scoped to a specific initiative. |
| **decisions/** | Decisions made using Baseline evidence — and when they changed. |
| **standards/** | How we write, cite, and synthesise responsibly. |
| **templates/** | Starting points for every kind of contribution. |

Evidence is small and precise. Synthesis is conservative. Assumptions are challenged early. And if you're unsure where something goes, you start with evidence.

The rules are simple:

1. Claims must link to evidence.
2. Evidence must be traceable to a source.
3. Synthesis must state confidence and limits.
4. Uncertainty is allowed — ambiguity without evidence is not.

If something can't be supported yet, it goes in `Open-questions.md`. Not in a synthesis document. Not in a decision record. In the explicit, visible, searchable list of things we don't know yet.

This matters because design teams are full of beliefs. "Users want X." "The homepage is confusing." "Nobody uses that feature." Baseline forces you to ask: "How do we know?" If the answer is "because I think so," it doesn't go in Baseline. It goes in the open questions list, and it becomes a research hypothesis to be validated.

---

## The Curator

Baseline has its own agent — the Curator. Like Gabriela, the Curator understands the system's structure and rules. Unlike Gabriela, the Curator's primary function is enforcement.

When someone contributes to Baseline, the Curator checks: Does this evidence cite a source? Does this synthesis link to evidence? Does this decision record reference the evidence that informed it? Is the confidence level stated? Are the limitations acknowledged?

It's not a gatekeeper in the human sense — nobody gets their PR rejected by an AI. It's more like a linter for knowledge. It catches the common mistakes: unsourced claims, overconfident synthesis, evidence filed in the wrong folder. And it does it consistently, every time, without getting tired or making exceptions.

---

## Why knowledge infrastructure enables everything else

Here's why this post exists in a series about AI augmentation:

**Agents need knowledge.** Gabriela is only useful because the vault is structured. A Copilot agent pointed at a folder of randomly named files with no templates and no linking conventions would be useless. The structure is what makes the agent powerful. Same with the Curator — it can enforce Baseline's rules because the rules are explicit and the structure is consistent.

**Research needs context.** The augmented research from Post 5 — the IA analysis, the synthetic evaluation — was possible because the designers had context. They knew what questions had been asked before, what decisions had been made, what evidence existed. That context lived in structured knowledge bases, not in people's memories.

**Coaching needs history.** In the next post, I'll talk about coaching the team through transformation. That coaching was informed by structured records — 1:1 notes with consistent templates, peer feedback documents, performance reviews, retrospective synthesis. I could track a designer's growth over months because the documentation existed and was findable.

**Multiplier systems need a source of truth.** The design tokens, the deck skills, the agent instructions — all of them encode design knowledge. But design knowledge changes. When the colour palette shifts, or the typography scale updates, or a new product joins the suite, someone needs to update the encoded knowledge. A structured knowledge base makes those updates traceable — you can see what changed, when, and why.

---

## Scaling from personal to team

The personal vault came first. I built it for myself — to remember conversations, track decisions, maintain coaching notes, and have a working memory larger than my biological one.

Then the patterns became transferable.

Templates? The team uses them for meeting notes, retros, and peer feedback. Naming conventions? Adopted for project folders. Maps of Content? The design strategy document is structured as a navigable MOC. Evidence-first epistemology? That became Baseline.

The vault taught us the patterns. Baseline made them shared.

This isn't a prescriptive "every team should use Obsidian" argument. The tools are irrelevant. The insight is structural: **if you want AI agents to be useful, you need structured knowledge for them to work with.** The agent is only as good as the substrate it operates on.

A vault with rigid structure and an agent that understands it is a knowledge machine. A folder of documents and an AI chatbot is just search with extra steps.

---

## The ritual layer

One thing I underestimated when I started: the value of rituals.

The vault has a maintenance schedule. It's boring to describe, so I'll keep it brief:

- **Daily:** File notes in the right folder immediately. Never batch. Never "I'll organise it later."
- **Weekly:** Monday looks forward (review MOCs, plan the week). Friday looks back (review daily logs, archive completed items, clear the root). Wednesday is the safety net — a mid-week filing pass that prevents Friday from feeling like a chore.
- **Monthly:** Extended prune. Check orphan notes. Consolidate meeting notes that belong together. Move stale projects to Archive. Review tags.
- **Quarterly:** Full health check. Folder structure review. Naming convention audit. Template review. Pairs well with OKR planning.

The rituals are what make the system sustainable. Without them, the vault degrades. With them, it compounds. Every week the knowledge base gets a little more connected, a little more findable, a little more useful to the agents that operate on it.

And here's the thing about rituals in a knowledge system: they're not about the system. They're about the practice of *paying attention* to what you know. The weekly review isn't just maintenance. It's the moment where you notice patterns — "We've had three meetings about the same problem and still haven't decided" — that would be invisible without the structure.

---

## The meta-lesson

Every post in this series follows the same pattern: identify a bottleneck, encode knowledge, distribute through existing channels, let go.

The knowledge machine is different. It doesn't follow the pattern. It *enables* the pattern.

Without structured knowledge, you can't encode it. Without encoding, you can't distribute. Without distribution, you can't let go.

The vault and Baseline are the foundation that every other system in this series is built on. The tokens encode design knowledge that was first captured in the vault. The skills reference conventions that were first documented in Baseline. The research builds on context that was first structured in meeting notes and decision records.

It's the least visible layer of the whole transformation. And it's the one that makes everything else possible.

It's also the part I'd rebuild first if I lost everything else. The decks, the tokens, the agents — all of it can be regenerated in an afternoon. What can't be regenerated is the reasoning behind a thousand small decisions. That's the thing actually worth protecting.
