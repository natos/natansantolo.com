---
title: "Chapter 2: Upskilling the Augmented Designer"
slug: "upskilling-the-augmented-designer"
weight: 2
lang: en
book: the-augmented-team
translationKey: tat-chapter-02
draft: false
---


# Upskilling the Augmented Designer

> Before our designers could work with AI agents, they had to learn git. That was the hard part.

---

*This is Part 2 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [← Part 1: The Augmented Team](/the-augmented-team/the-augmented-team/)*

---

Everyone talks about the AI learning curve. Prompt engineering courses. Fine-tuning workshops. Conferences about the future of AI-assisted design. We went to some. They were fine.

But the first time I sat with one of my designers to get her working with a real agent — not ChatGPT-in-a-browser, but an agent that could read her files, write code, manage tasks, and commit to a shared repository — we didn't get stuck on the AI. We got stuck on `cd`. She'd never used a terminal. Twenty minutes in, over a laggy call between two timezones, we still hadn't prompted anything.

That was the whole lesson, sitting right there in the first twenty minutes. The bottleneck wasn't the AI. It was everything around it.

---

## The stack nobody warned us about

Here's what our designers had to learn, roughly in order, before AI was even useful:

**Terminal.** Opening a command line. Navigating directories. Running commands. For designers who'd spent five years inside Figma, this was alien. Not hard, exactly — but disorienting. Like asking a chef to cook blindfolded. The ingredients are the same. The technique is the same. But the interface is completely different, and that messes with your confidence more than you'd expect.

**Git.** Branches, commits, merges, conflicts, pull requests. This was the real wall. Not because git is conceptually hard — most designers understood *why* version control matters. The problem was the vocabulary, the mental model, and the fear. "What if I break something?" is a reasonable question when you've never worked in a system where breaking things is recoverable.

**Markdown.** Writing in plain text with formatting syntax. Actually, this one clicked fast — designers already think in hierarchy and structure. Markdown is just design with characters instead of pixels.

**VS Code.** A new primary tool. Extensions, settings, integrated terminal, file trees. Not a drawing tool. Not a prototyping tool. A *text editor* — which felt like a demotion until they realised it was a promotion.

**The agent runtime.** How to talk to agents, how to assign tasks, how to read their output and decide what was good. This part was surprisingly natural once everything else was in place.

The pattern was clear: **the AI was the easy part. Getting humans ready to use it was the project.**

---

## Why git matters (and why we couldn't skip it)

I want to stay on git for a moment, because it's the decision that made everything else possible — and the one that drew the most resistance.

"Can't we just use Figma and ChatGPT? Why do we need repositories?"

Fair question. Here's the honest answer: because agents need shared infrastructure, and shared infrastructure needs version control.

Our AI agents read and write files. Agent instructions live in markdown files. Design tokens live in code. Copilot skills are text files in repositories. If a designer wants to improve an agent's behaviour, they edit its instruction file, commit the change, and push it. If a second designer wants to add a skill, same process. Without git, these changes would overwrite each other, get lost, or exist only on one person's machine.

Git isn't the point. Collaboration at scale is the point. Git is just how software teams solved that problem decades ago, and it turns out the problem is the same whether you're writing code or writing agent instructions.

So I taught git. Not all of git — nobody needs `git rebase --interactive` in their first month. Just the minimum viable workflow: clone, branch, commit, push, merge request. Five commands. One mental model: "make a copy, change the copy, propose your changes, someone reviews, it merges."

It took about two weeks for the fear to subside. A month for it to feel natural. Three months for someone to message me, unprompted, "I can't imagine going back." I kept that message. On the hard days it was proof the whole thing was working.

---

## Building the crew

Once the tooling was in place, we started building agents. And this is where the energy shifted — from obligation to genuine excitement.

We name our agents after legendary figures in their domains. It started as a playful convention and became something more: naming an agent gives it identity, and identity makes people *care* about how the agent works.

**Messi** — the captain. Orchestrates work across other agents, triages tasks, assigns issues. Named after the player who makes everyone around him better. That's the job.

**Gabriela** — knowledge base management. Named after Gabriela Sabatini — graceful, precise, always in control. She manages our Obsidian vault: files notes, enforces naming conventions, runs maintenance rituals.

**Dieter** — design review. Named after Dieter Rams. Runs heuristic evaluations scored against Nielsen's 10 heuristics, identifies usability issues, provides severity ratings. He's the quality gate.

**Amos** — product psychology. Named after Amos Tversky. Applies behavioural economics and cognitive bias analysis to user flows. Flags dark patterns. Uses the EAST framework and Kahneman's Two Systems.

**Borges** — writing. Named after Jorge Luis Borges. Helps with proposals, blog posts, narratives, synthesis documents. He writes, you edit.

**Ada** — engineering. Named after Ada Lovelace. Joined later, handles code implementation when a task needs more than a prompt.

Six agents, each with a distinct personality, a clear role, and a set of skills. The naming convention isn't cosmetic — it creates a shared language. "Run it past Dieter" means something specific. "Ask Amos about the pricing page" is a real instruction that produces a real deliverable.

---

## Instructions and skills: a design problem

Here's the part that surprised me most: writing agent instructions is a design skill.

Every agent has two layers of knowledge:

**Instructions** define *how* to think. They're the agent's personality, boundaries, tone, and approach. Dieter's instructions say he scores heuristics on a 0–4 scale, provides P0–P3 severity ratings, and never sugar-coats. Amos's instructions say he applies the EAST framework before cognitive bias analysis, and flags dark patterns even when the brief doesn't ask for it.

**Skills** define *what* to know. They're knowledge packs you attach to an agent — like giving someone a reference book. The `ux-heuristics` skill gives Dieter access to Nielsen's full framework. The `cognitive-biases` skill gives Amos 16 biases, the Two Systems model, and nudge theory. You can mix and match: give the same skill to different agents and get different perspectives because their instructions shape how they apply the knowledge.

Writing good instructions turned out to be exactly like writing good design principles. Too vague ("be helpful") and the agent produces generic output. Too rigid ("always use bullet points, never exceed 200 words") and the agent becomes robotic. The sweet spot is specific enough to create genuine constraints, but flexible enough to handle edge cases.

Our designers, it turned out, were *excellent* at this. They'd spent years writing design principles, defining component guidelines, documenting interaction patterns. Agent instructions are the same craft in a different medium. "What should this component do when..." became "What should this agent do when..."

The moment someone said "writing this instruction file feels like writing a component spec" — that's when I knew we'd crossed the bridge.

---

## What clicked and what didn't

Not everything worked. Here's the honest breakdown:

**Clicked quickly:**
- Prompting. Designers already think in "here's what I want, here's the context, here's the constraint." That's a prompt.
- Agent naming. People immediately connected with the idea of a crew with personalities.
- Markdown. Structure and hierarchy are design fundamentals. Markdown is just ASCII wireframing.
- Skills as knowledge packs. The textbook metaphor made immediate sense.

**Took weeks:**
- Git workflows. The mental model is simple, but the muscle memory takes time. Merge conflicts were genuinely distressing the first few times.
- Debugging agent behaviour. When an agent produces bad output, is it the instructions? The skill? The prompt? The model? This diagnostic skill took practice.
- Knowing when to intervene vs. when to let the agent run. Over-correcting wastes time. Under-correcting wastes quality.

**Didn't work:**
- Early CLI-only tooling was too intimidating. We needed the web UI as a bridge before people were comfortable in the terminal.
- First-generation agent instructions were too vague. "Help with design" produces nothing useful. We had to learn to be specific.
- Trying to onboard everyone at once. Different people learn at different speeds, and the pressure of "everyone's doing this now" created anxiety instead of excitement. We switched to pairing — one person who'd crossed the bridge helping one person who hadn't.

---

## Twenty-three issues in one week

In the last week of April 2026, our agents completed 23 issues in a single week. Agent instructions improved. A full plan was analysed, written, challenged, and archived — handed off between four agents like a relay. A comprehensive designer setup guide was written. Peer feedback was synthesised.

Six agents working in parallel. Messi coordinated ten of those tasks alone. Gabriela handled five knowledge management jobs. Diego ran creative challenges. Borges wrote two documents. Amos analysed a coaching framework. Dieter reviewed a design.

Twenty-three issues. One week. For a single designer's workspace.

But here's the part I want you to hold onto: *those 23 issues were only possible because the humans had been upskilled first.* Every agent instruction had been written by a person who understood the craft well enough to teach it. Every skill was curated by someone who knew what good looked like. Every task was triaged by a human who could tell the difference between "good enough to ship" and "needs another pass."

The agents multiplied human capability. They didn't replace it. And they couldn't have multiplied it if the humans hadn't done the hard, unglamorous work of learning the stack first.

---

## The paradox

So here's the paradox at the heart of AI augmentation — the one nobody's writing Medium posts about:

**To augment humans with AI, you first have to upskill the humans.**

Not in AI. In the infrastructure around AI. Git. Markdown. Terminal. Version control. Structured thinking. Writing clear instructions. Understanding systems.

The designers on my team didn't become AI experts. They became *technically fluent* — comfortable enough with the underlying systems to direct AI effectively. The same way a film director doesn't need to operate the camera, but does need to understand what the camera can do.

That fluency didn't come from a course or a workshop. It came from a month of discomfort, a lot of pair sessions squeezed into the narrow window when Singapore and Bangalore were both awake, some broken branches, a few frustrated midnight Slack messages, and the slow accumulation of confidence that only happens when you actually do the thing.

Augmenting a team isn't a technology problem. It's a learning design problem. And it turns out, designing learning experiences is exactly what designers do — I just had to point that skill back at ourselves.

---

*Next: [Part 3 — The Prototype Is the Spec →](/the-augmented-team/the-prototype-is-the-spec/)*
