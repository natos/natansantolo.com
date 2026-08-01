---
title: "Chapter 7: The Coach"
slug: "the-coach"
weight: 7
lang: en
book: the-augmented-team
translationKey: tat-chapter-07
draft: false
---


# The Coach

> The book predicted I'd become The Conductor. Reality was something harder and more rewarding: The Coach.

---

*This is Part 7 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [← Part 6: The Knowledge Machine](/the-augmented-team/the-knowledge-machine/)*

---

This is the last post. And it's the one I've been avoiding.

The first six posts tell a story about systems, tools, frameworks, and infrastructure. They're clean. They follow a pattern. They have diagrams and tables and formulas. They make the transformation sound logical — inevitable, even.

This post is about what it actually felt like.

---

## The emotional landscape

Nobody tells you that transforming a team's capabilities comes with an emotional tax that's heavier than the technical one.

The technical part — learning Git, writing code, building agents — is hard but sequential. You learn one thing, then the next. There's a curriculum, even if you're inventing it as you go. The emotional part has no curriculum. It's non-linear, contradictory, and deeply personal.

Here's what I saw in my team during the transformation:

**Fear.** Genuine fear of breaking production systems. Fear of the terminal — that blinking cursor on a black screen that offers no guardrails, no undo button, no "Are you sure?" dialogue. One designer described the experience of pushing code as "like sending an email you can never unsend, except the email is the entire website."

**Imposter syndrome.** "I'm not a real developer." I heard versions of this sentence from every single person on the team, including myself. Designers who'd spent years building confidence in their craft were suddenly beginners again — and not the exciting kind of beginner. The humiliating kind. The kind where you spend 40 minutes debugging something and the answer is a missing semicolon.

**Identity crisis.** "Am I still a designer or am I becoming something else?" This one cut deeper than I expected. For some team members, their identity as a designer was core to their professional self-image. Learning to code felt like a betrayal — like they were giving up what made them special in exchange for being a mediocre engineer.

**Overwhelm.** Terminal, Git, markdown, VS Code, agents, React, Flutter, design tokens, merge requests, code reviews, deployment pipelines — all while maintaining full delivery velocity. We completed 944 initiatives at 89.4% completion rate during this period — and the designer who shipped the most was the same one who, weeks earlier, had held her breath every single time she ran `git push`. There was no "pause for learning." We learned by shipping. And shipping while learning is exhausting.

**Frustration.** When your code doesn't match your design vision. When you know exactly what the spacing should be, but CSS isn't cooperating. When you've designed something beautiful in Figma and the implementation looks like a cargo container. The gap between design intent and code reality is a special kind of frustration — because you can see the problem clearly but lack the vocabulary to fix it.

---

## What the book predicted

The book I wrote about AI-augmented design teams predicted five archetypes: the Conductor, the Ethicist, the Translator, the Curator, and the Innovator. I cast myself as the Conductor — the one who orchestrates the ensemble, who sets the tempo, who turns individual capabilities into collective performance.

Reality was less poetic.

The Conductor metaphor implies authority and precision. You stand at the front, raise the baton, and the orchestra follows. But my team wasn't an orchestra. They were a group of talented individuals, each at a different point in their learning journey, each carrying a different emotional load, each needing a different kind of support.

Some embraced the transformation quickly. One designer — let's call him H — had the temperament for it. Methodical, detailed, patient with debugging. He became the team's go-to for technical help: VS Code issues, Rust questions, development problems. Peer feedback described him as "a multidisciplinary designer who handles complex tasks with ease from research to final outputs, including in code." He made it look natural. It wasn't. He just had the right kind of stubbornness.

Another designer — D — surprised everyone, including herself. During a hackathon, she went from providing Figma layouts to producing working code prototypes. A colleague noticed: "I was really impressed with how she embraced Copilot to generate working prototypes. She was no longer providing Figma layouts but real working examples. She also added some spice to the product by introducing animations and making the app feel alive." The shift from static to dynamic — from describing what something should look like to building the thing itself — happened faster than anyone expected.

Others needed more support. More reassurance. More time. And that's where the Conductor metaphor fell apart. A conductor doesn't coach individual musicians through their fear of the instrument. A coach does.

---

## The coaching challenge

Here's what coaching through a transformation actually looks like:

**Building confidence while maintaining standards.** This is the hardest balance. You want to celebrate the first merge request — and you should, because it's genuinely meaningful — but you also can't let "good enough" become the standard. A designer's code should still reflect design intent. The spacing should be right. The transitions should be smooth. The typography should breathe. Praising someone for shipping broken CSS teaches them that craft doesn't matter in code. It does.

**Celebrating small wins.** The first successful deployment. The first time a designer resolved a merge conflict without help. The first time someone ran `git push` and didn't hold their breath. These moments are invisible in retrospectives and performance reviews, but they're the moments where confidence compounds. I made a point of noticing them — publicly, specifically, immediately.

**Creating psychological safety to fail.** Designers are used to critique. We review each other's work constantly. But code failures feel different — more binary, more public, more permanent. A bad colour choice in Figma is a discussion. A broken build in production is an incident. I needed to create an environment where mistakes were learning moments, not career risks. That meant being transparent about my own mistakes. I broke things too. I spent embarrassing amounts of time on problems that had simple solutions. I said so, out loud, in front of the team.

**Managing different learning speeds.** Some people need to understand the theory before they'll try the practice. Others learn by doing and fill in the theory later. Some need pair programming. Others need to struggle alone and then ask for help. I had to individualise coaching for each person — which is obvious in retrospect but felt like spinning six plates simultaneously.

**Preventing burnout.** Simultaneous delivery and learning pressure is a recipe for burnout. You're asking people to do their job *and* learn a new job *and* feel inadequate at the new job while still being expected to excel at the old one. I didn't always get this right. There were periods where the load was unsustainable, and I should have pushed back harder on deadlines.

---

## The leadership tension

My CPO was direct with me during my own performance review: "You need to scale through your team. I can't have people working in isolation who don't understand top to tail."

He was right. And his directness was exactly what I needed, even when it was uncomfortable. He saw what I was doing — covering for the team's skill gaps by doing the work myself — and called it out. "You're covering for them. Let's call a spade a spade."

The tension was real: the team had skill gaps. The company needed delivery. Filling the gaps takes time. Delivery doesn't wait. So I did both — coached the team while covering the gaps myself. Part-time DevOps, part-time design director, part-time teacher, part-time individual contributor.

That's not sustainable. And it's not scaling.

The solution — the one that took me months to see — was the multiplier pattern from Post 4. Instead of doing the work *for* the team, I needed to build the systems that let the team do the work themselves. The design tokens, the agent skills, the deck system, the templates, the structured knowledge base — these weren't just enablement projects for the company. They were coaching tools for the team. Every system I built reduced the surface area of things I needed to cover personally.

When an engineer can run `npm install` and get the brand, I don't need to review their colour choices. When a designer can load a Copilot skill and get the correct component patterns, I don't need to pair-program every page. When the knowledge base has structured meeting notes and decision records, I don't need to be the institutional memory.

The multiplier freed me to coach instead of cover. That was the real transformation — not the team learning to code, but me learning to let go.

---

## What the book got wrong

The book underestimated three things:

**1. Human resistance.** Not resistance to AI — resistance to change. To identity disruption. To feeling like a beginner again. The book treated the transition as a skills problem. It's an identity problem. People don't resist new tools. They resist becoming someone who needs new tools.

**2. Tool adoption speed.** The book assumed that once tools were available, people would adopt them. In practice, adoption is slow, uneven, and emotional. Some designers were using agents within a week. Others needed months. One still prefers Figma for things that could be prototyped in code. And that's okay — the adoption curve isn't a failure. It's a feature. It means people are integrating the tools into their own practice, not just following instructions.

**3. The coaching load.** The book mentions coaching in a paragraph. Reality demanded it in every conversation, every 1:1, every retrospective, every code review, every moment of doubt. The coaching load is the largest hidden cost of transformation, and it falls entirely on the leader.

---

## What the book got right

**"The designers who thrive are those who dance with it."**

That sentence held up. The team members who embraced the transformation most fully weren't the most technically gifted. They were the most curious. The ones who treated every new tool as an interesting puzzle rather than a threatening obligation. The ones who said "That's cool, let me try" instead of "Why do I need to learn this?"

And the book's core thesis — that AI augmentation doesn't replace design thinking but amplifies it — proved true in ways I didn't anticipate. The designers who learned to code didn't become worse designers. They became better ones. They understood constraints. They felt materials. They made decisions faster because they could test them immediately. Their design judgement didn't atrophy from writing code — it sharpened, because the feedback loop between intention and reality collapsed from days to minutes.

---

## The team that emerged

Six months in, the peer feedback told the story:

A designer who was "no longer providing Figma layouts but real working examples." A multidisciplinary designer handling "complex tasks with ease from research to final outputs, including in code." Someone who "embraced AI tools enthusiastically" and whose "designs translate cleanly to code." A team that stakeholders described as having "embraced AI well — we can all pick up a few tricks from you."

External stakeholders noticed the shift. Engineering teams wanted to collaborate more. Product leaders started inviting designers to strategic conversations. The CPO stopped asking "why doesn't design deliver?" and started asking "how do we scale what design is doing?"

The perception change wasn't because we did more PR. It was because the work spoke. Working prototypes speak louder than Figma files. Strategic research speaks louder than mood boards. Systems that enable the company speak louder than systems that serve it.

---

## The thing nobody tells you

Here's what nobody tells you about leading a team through transformation:

**You transform too.** I started this journey as a design director who knew Figma and strategy. I ended it as someone who thinks in systems — token architectures, agent skills, knowledge graphs, CI/CD pipelines. My identity shifted as much as my team's did. The difference is that I had to do it first, alone, and then make it look like it was a natural progression so the team wouldn't be afraid to follow.

**The imposter syndrome is permanent.** I'm not a developer. I code, but I'm not a developer. I review code, but I'm not qualified to review code. I build agents, but I'm not an AI engineer. The gap between what I do and what I "should" be doing is a constant companion. I've stopped trying to close it. I've accepted that the gap is the job.

**The coaching never ends.** There's no finish line. No moment where everyone is fully transformed and you can stop. The technology keeps evolving. The team keeps growing. New people join with different baselines. The coaching adapts, but it doesn't stop.

**It's worth it.** Not in a motivational-poster way. In a practical, measurable, observable way. The team ships faster. The work is better. The organisation trusts design more. Individual designers have expanded their career possibilities — they can go places and do things that pure-Figma designers can't. That's real. That's lasting. That's the return on the emotional investment.

---

## The closing

The book I wrote predicted five archetypes for the augmented design team. Reality gave me one: The Coach.

Not The Conductor. Not the person standing at the front with the baton. The person in the room with each individual, helping them through fear, celebrating their progress, holding the standard, building the systems that make them autonomous, and — hardest of all — learning to let go.

The augmented team isn't about the technology. It never was. It's about building the confidence to use it. The systems to sustain it. And the courage to keep going when the terminal shows an error and you have no idea what it means.

Seven posts. Seven layers. One team. And the story's not over — we're still learning, still building, still coaching. The augmented team isn't a destination. It's a practice.

If any of this resonated — if you're a design leader staring at the same transformation, feeling the same vertigo — I'll leave you with the formula from Post 4:

**Identify bottleneck → Encode knowledge → Distribute through existing channels → Let go.**

And the thing that formula doesn't capture:

**Be kind to your team. They're becoming something new. That's terrifying and beautiful, and they need someone who sees both.**

---

*This is the final post in "The Augmented Team" series. [Start from the beginning →](/the-augmented-team/the-augmented-team/)*
