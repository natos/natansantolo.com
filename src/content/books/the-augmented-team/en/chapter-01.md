---
title: "Chapter 1: The Augmented Team"
slug: "the-augmented-team"
weight: 1
lang: en
book: the-augmented-team
translationKey: tat-chapter-01
draft: false
---


# The Augmented Team

> Last year I wrote a book about augmented design. This year, my team actually lived it — and the book turned out to be about the wrong thing.

---

In 2025, I published a book called *The Augmented Designer*. New tools, new archetypes, new ways of thinking about craft. I was proud of it. I still am.

But a year later I have to admit it was about the wrong thing. Not wrong exactly — incomplete. The book described what happens when *one* designer augments themselves with AI. That's interesting. What I didn't predict — what nobody in the conversation was predicting — was what happens when you try to augment an entire *team*. And then what happens when that team, almost by accident, starts augmenting everyone around them.

That's the story I want to tell. Not the theory. What actually happened when we tried to live it, including the parts that hurt and the parts I got wrong.

---

## What the book predicted

The book laid out five archetypes for the AI-augmented designer:

- **The Conductor** — orchestrating AI agents like a creative director managing a studio of specialists
- **The Ethicist** — the conscience in the machine
- **The Translator** — bridging human needs and AI capabilities
- **The Curator** — selecting from infinite AI-generated possibilities
- **The Innovator** — imagining what doesn't exist yet

It also described a tidy three-phase adoption curve. Phase 1: add AI to your workflow. Phase 2: rebuild your workflow around AI. Phase 3: do the previously impossible.

Clean, logical, sequential. The kind of framework that makes sense in a book.

Here's the thing. Real life isn't sequential. Real life is a designer in Bangalore messaging you at midnight because a merge conflict ate her afternoon's work, while you're in Singapore trying to explain over a laggy video call why the terminal isn't out to get her. None of that made it into the book.

---

## What actually happened

Start with the context I left out of the book — because it turned out to be the whole point.

My team is six designers. We sit in Singapore, Berlin, and Bangalore. We're fully remote, spread across enough timezones that there's rarely an hour when all of us are awake at once, and we support an engineering organisation of more than a hundred people. Do the maths: you cannot be the designer in the room when the room is in three countries and half of it is asleep.

That single constraint shaped everything. Most of what looks like clever strategy in this series began as me trying to solve a scheduling problem — how do six people cover the design needs of a company that never stops, across timezones, without burning out or becoming a queue everyone resents?

The answer, when it finally arrived, wasn't "work harder" or "hire faster." It was five messy, overlapping phases that sometimes ran backwards:

**Phase 1: The Individual.** That was the book. One designer — me — experimenting with AI tools, writing about it, figuring out what "augmented" even meant. 2025.

**Phase 2: The Self.** I started building personal infrastructure — a knowledge vault managed by an AI agent, a vision framework, structured thinking tools. This wasn't about *using* AI tools. It was about redesigning *how I think*, with AI as a partner. The augmented self.

**Phase 3: The Infrastructure.** Named agents with personalities and expertise. Design tokens shipped as an NPM package. Copilot skills that taught AI our brand rules. This is where the work stopped being about me and started becoming something other people could pick up and run with.

**Phase 4: The Team.** Designers learning git. Designers shipping code. Designers writing agent instructions. Designers producing competitive analyses that changed product strategy. This was the hardest phase — and the one the book barely imagined. It's also where I watched people I'd hired for their eye for typography sit frozen in front of a black terminal window, and had to decide whether I was helping them grow or quietly breaking them.

**Phase 5: The Organisation.** The part nobody predicted. The biggest impact of our transformation wasn't on the design team at all. It was on everyone else. We shipped the token library as an NPM package — and every engineer's output was suddenly on-brand by default. One designer spent two hours building a presentation system, and two company presentations later developers were already using it. We wrote one blog post about *how* we designed our product icons — and non-designers started borrowing the vocabulary of craft.

The arc wasn't tool adoption. It was letting go: we stopped trying to do all the design, and started building the things that let everyone do better design without us in the loop. Build the thing that makes the thing.

---

## The Conductor became The Coach

The book's most confident prediction was the Conductor. You'd manage ten AI agents — research, visual, code, copy — and your job would be creative direction and quality control. You'd stand at the front and wave the baton.

And honestly? Partially true. We do have named agents. Dieter runs design critique. Amos handles behavioural psychology. Gabriela manages our knowledge base. (Yes — Sabatini, Borges, and the one that coordinates the others is called Messi. I'm Argentine. It's not subtle, and I've stopped apologising for it. Naming an agent after someone you admire makes you care how it behaves, which turns out to matter.) They're genuinely useful. They're part of how we work now.

But the hardest part of my job in 2026 wasn't orchestrating agents. It was coaching humans through the fear of the tools.

Before anyone could work with AI, they had to learn git. Branches, commits, merge requests — the whole grammar of software collaboration, handed to people who'd spent their careers in Figma. One designer told me pushing code felt "like sending an email you can never unsend, except the email is the entire website." I watched genuinely talented people whisper "I'm not a real developer" while, in the same week, shipping code engineers were running in production. I heard the deeper question underneath it: *am I still a designer, or am I becoming something else?*

The book said I'd be a Conductor. Reality asked for a Coach. Someone who builds confidence without dropping the standard. Someone who celebrates a first merge request as loudly as a shipped product. Someone who makes it safe to break things and learn.

The designers who thrived were the ones who danced with it — exactly as the book predicted. What the book missed was how much the dancing needed a partner who already knew the steps and would lead until they found the rhythm themselves.

---

## The signals we didn't recognise

The first signal was quiet. On 3 March 2026, I published `@affinidi/design-tokens` — a single package with every brand guideline, UI token, asset, and look-and-feel rule the company needed. One command: `npm install`. From that moment, every developer had the full brand in their project. No Figma file to interpret. No PDF to read. No design request to file.

I'd love to tell you this was strategy. It wasn't. I was tired of answering the same hex-code question at 11pm because the person asking was in a timezone where I was the only designer awake. I built the package to save myself. Then I noticed the side effect: the baseline quality of demos, releases, and internal tools rose across the entire company — without a single designer touching the delivery pipeline.

The second signal was louder, and it happened in a room I wasn't the centre of. At a company hackathon, I'd built a presentation deck using a system I'd been tinkering with — Copilot skills that folded narrative structure, glassmorphism, and our design tokens into an impress.js pipeline. Write a markdown file, run the pipeline, get a cinematic deck. After I presented, I dropped the skill and the assets into the shared repo and said, roughly, "help yourselves."

By the second company presentation afterwards, developers were already using it — no training, no mandate, no request. They found it, they ran it, and their slides looked like they'd come from a studio. The first time I sat in the audience watching someone else's deck built on my system, I felt two things at once: proud, and slightly redundant. I've come to think that discomfort is the whole point.

The third signal was a blog post — just a post — about how we designed our product logos. Five principles, the iteration, the decision to ship the icons as infrastructure through Figma and NPM. Then something I didn't design for: non-designers started *using the vocabulary*. "Does this violate the negative space rule?" An engineer said that, in a review, unprompted. He was making a better visual decision because he understood the reasoning, not just the asset.

Three signals. Three flavours of the same instinct: encode craft into infrastructure, distribute it through channels people already use, and let go.

I didn't have a name for it yet — later we'd call it the multiplier. At the time it was just a feeling: that our highest-impact work wasn't the design itself, but making design thinking visible to people who'd never open Figma.

---

## What this series covers

Seven parts, one per layer of the transformation:

1. **The Augmented Team** — this post. The arc, the predictions, the reality.
2. **Upskilling the Augmented Designer** — teaching designers git, agents, and skills. The real barrier wasn't the AI.
3. **The Prototype Is the Spec** — designers stopped handing off Figma files and started shipping code.
4. **The Multiplier** — how six people enabled an organisation of a hundred through infrastructure.
5. **Augmented Research** — two designers and an AI co-researcher produced a competitive analysis that changed product strategy. In a week.
6. **The Knowledge Machine** — the system that stops institutional knowledge walking out the door.
7. **The Coach** — the emotional landscape of transformation. Fear, identity, confidence, and what the book got wrong about the human side.

---

The book ended with a rallying cry: *"You're not the last generation of traditional designers — you're the first generation of augmented designers."*

I still believe that. But I'd add a line the book was missing:

Augmenting one designer is interesting. Augmenting a team is transformative. Enabling an entire organisation to do better design — without a designer in the room every time — is the actual unlock.

And here's the honest ending: I didn't set out to prove any of that. I set out to stop being the bottleneck for a team I couldn't physically be in the room with. Everything else was a side effect I only understood in hindsight.

That's the story.

---

*This is Part 1 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [Next: Upskilling the Augmented Designer →]*
