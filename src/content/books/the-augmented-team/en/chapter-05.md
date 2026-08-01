---
title: "Chapter 5: Augmented Research"
slug: "augmented-research"
weight: 5
lang: en
book: the-augmented-team
translationKey: tat-chapter-05
draft: false
---


# Augmented Research

> Two designers and an AI co-researcher produced a competitive analysis that changed our product strategy. In a week.

---

*This is Part 5 of "The Augmented Team," a series about what happened when a design team went from reading about AI augmentation to actually living it. [← Part 4: The Multiplier](/the-augmented-team/the-multiplier/)*

---

Here's a thing that design teams rarely get to do: walk into a product meeting and change the roadmap.

Not because we fought for a seat at the table. Not because we wrote a manifesto about design strategy. Because two designers ran a piece of research so sharp, so well-structured, and so defensible that the product team said, "Yeah, we should do that."

This is the story of how AI turned our research from a support function into something with teeth.

---

## The problem we were trying to solve

Our company's website told a good story — vision, products, credibility. Developers had clear entry points. The trust message resonated. But there was a gap: we had products sitting on standalone pages, and nowhere on the site did we explain how they work *together*.

Every customer meeting started with a custom deck. Every sales conversation required someone to manually assemble the narrative: "You'd use Product A for this, and Product B connects here, and together they solve your problem." That assembly happened in people's heads, not on the website. We had products, but no *solutions*.

The design team decided to figure out what to do about it.

---

## Four models, four days

Two designers — let's call them D and H — took on the research. They didn't start with our competitors. They started with companies that have already solved the problem of packaging complex product suites: Atlassian, Stripe, Auth0, and a category of identity infrastructure providers.

For each company, they analysed the information architecture model:

**Atlassian — Matrix model.** Same products, viewed through multiple lenses (role, team size, industry, use case). Products are secondary. The primary navigation asks: "Who are you? Let me show you the products that suit your persona." Cognitive load drops because the user is guided, not abandoned. Atlassian calls this *narrative polymorphism* — telling the same story in different ways depending on who's listening.

**Stripe — Progressive disclosure.** One hero product (Payments) that gives you permission to start small. Once implemented, the platform reveals additional products you can integrate. Developer-first language. Product names are self-explanatory — "Payments," "Billing," "Checkout" — you know what they do before reading a word of copy.

**Auth0 — Hub and spoke.** One landing hub connected to product pages, solution pages, and a dedicated developer microsite. Strong developer pathway. AI and platform capabilities surfaced consistently across every page. Use-case-first language that's naturally LLM-friendly — search engines and chatbots can easily parse "authentication for AI agents" because the page is structured around outcomes, not product names.

**System infrastructure model.** Front-load the vision. Explain the system. Require understanding before commitment. This is what we were already doing — and doing well. Our vision statement, trust credibility, and problem framing all scored high. What was missing: the bridge between "I understand your system" and "I know which products solve my specific problem."

Each model was analysed, applied to our company, and pressure-tested.

And here's where it gets interesting.

---

## AI as co-researcher

The designers didn't just use AI to summarise web pages. They used it as a thinking partner.

After analysing each model manually — reading the sites, mapping the navigation, identifying patterns — they brought their findings to Copilot and said, essentially: "Given what we know about our product suite, our audience, and our maturity stage, would this model work for us?"

The AI pushed back. Usefully.

When they explored the Atlassian matrix model, Copilot helped reimagine what a matrix navigation might look like for our products — then flagged that our product names aren't externally legible. "Trust Fabric" doesn't tell a new visitor what it does the way "Payments" does. If we adopted narrative polymorphism, we'd also need to rethink our naming conventions. That's not a design problem. That's a product strategy problem.

When they tested the Stripe model, the AI noted the mismatch: Stripe has a clear hero product that every customer starts with. We don't — our products are more like components of a system. Forcing a progressive disclosure model would mislead users about how the platform actually works.

When they evaluated our current approach against the system infrastructure model, the AI scored it well on vision, credibility, and developer guidance — but surfaced the exact gap the team had intuited: products feel standalone, solutions are buried, and the cognitive load of figuring out how to combine products falls entirely on the visitor.

This wasn't AI doing the research. It was AI *extending* the research — testing hypotheses, finding edge cases, and articulating trade-offs that would have taken the designers days to think through alone.

---

## The recommendation

The synthesis was clear: introduce **solution pages** as a new navigation layer between the homepage and product pages.

Not a complete overhaul. Not a new information architecture. A new layer that connects what we already have:

- **Homepage** → communicates vision and trust (already strong)
- **Solution pages** → show how products combine to solve specific problems (new)
- **Product pages** → deep technical documentation for each product (already strong)

Each solution page would have a problem statement, an explanation of how the products orchestrate together, a real-world application (if available), and clear calls to action for both developers and business decision-makers.

The designers presented this in a comparison table: four models, what each optimises for, where our company fits, and why the hybrid approach — system infrastructure with a solutions layer — gives us the flexibility to grow.

---

## The product meeting

This is the moment that mattered — and the one I was quietly nervous about walking into. Research is only strategy if someone holding the roadmap says yes.

The designers presented to a product lead — let's call him V. His first challenge was smart: "You're researching mature scale-ups. We're pre-PMF. Their storytelling strategies are built for hundreds of customers, not a handful."

Fair point. And exactly the kind of pushback that separates good research from great research. I jumped in: "We're not researching product maturity. We're researching storytelling strategies — how successful companies package complexity." 

V paused, then engaged. "Okay. Let's go."

What followed was the best kind of product-design conversation: building on each other's knowledge rather than defending territory. V had been advocating for solution pages independently — "I kept telling everyone we need a solutions page." He showed competitor examples the designers hadn't seen. The designers showed IA patterns V hadn't considered. Together, they debated whether solutions or use cases or industry verticals should be the primary lens.

They didn't fully agree. V leaned toward industry-first. D leaned toward solution-first. But the conversation was happening at the *right altitude* — strategic, evidence-based, concrete enough to act on.

The outcome: agreement to prototype one or two solution pages, test with internal personas (BD and SA leads who actually sell the product), then scale.

Two designers, one AI co-researcher, one week. From "our website has a gap" to "here's a recommendation backed by competitive analysis, IA theory, and a concrete prototype plan" — presented to product and accepted.

---

## Synthetic evaluation: the adversarial panel

The IA research was the first experiment. The second was more methodological — and more provocative.

Around the same time, we built a framework we call **synthetic evaluation**: using AI-generated personas to evaluate product surfaces before real users see them.

Here's the idea. Traditional usability testing is slow, expensive, and happens too late. By the time you've recruited participants, scheduled sessions, and synthesised findings, you've already shipped. Synthetic evaluation runs in minutes.

The framework works like this:

**1. Generate a persona panel.** Not archetypes — specific, believable individuals. "Senior DevOps engineer at a 200-person fintech evaluating identity solutions for SOC2 compliance." Each persona gets a skepticism profile, a decision-making style, explicit goals, and explicit deal-breakers.

**2. Walk each persona through the product surface.** Step by step. At each interaction point, the persona records what they expected, what they actually saw, and the severity of any mismatch — scored against Nielsen's 10 heuristics.

**3. Synthesise across personas.** Where they converge is high-confidence. Where they diverge — that's where the gold is.

The critical design decision: **every panel must include at least one adversarial persona.** Someone who's been burned by vendor lock-in. Someone who's actively looking for reasons to reject your product. This counteracts the well-documented problem of LLM sycophancy — the tendency of AI to be relentlessly positive. Without an adversarial voice, synthetic evaluation becomes synthetic validation. Worthless.

The divergent findings — where a high-skepticism persona flags a severity-3 issue that a low-skepticism persona rated severity-1 — are the most actionable output. The divergence tells you *who* the issue affects and *why*, which is more useful than a generic usability score.

We ran the first experiment on our own website. Five personas, ranging from an adversarial enterprise security lead to a junior developer tasked with vendor evaluation. The output was structured, specific, and — critically — it surprised us. The adversarial persona surfaced trust-signal gaps above the fold that the low-skepticism personas sailed right past. That finding became an input to the solution pages work.

---

## The disclaimer that's also the point

Every output from synthetic evaluation begins with the same line:

> ⚠️ Synthetic evaluation — not a substitute for real user research.

That's not a legal hedge. That's a design principle.

Synthetic evaluation generates *hypotheses*, not *conclusions*. "Enterprise developers may not find sufficient technical credibility signals above the fold" is a hypothesis. It becomes a conclusion only when three real enterprise developers confirm it in an interview.

The framework is explicit about this: every report ends with a "Hypotheses for Real-User Validation" section. Specific, testable statements. Suggested validation methods. The synthetic evaluation doesn't replace the research pipeline — it *feeds* it. It tells you what to test, who to test with, and what to look for.

This matters because the temptation to treat AI-generated findings as real findings is enormous. It's faster. It's cheaper. The output looks convincing. But it's not real. The personas don't have real frustrations, real mental models, real competing priorities. They have simulated ones — useful for breadth and hypothesis generation, dangerous if you confuse them with depth and validation.

---

## What changed

The IA research shifted how the company thinks about its website — from "product showcase" to "solution platform." That change is still rippling through the organisation. Product, marketing, BD, and design are all contributing to the new structure.

The synthetic evaluation framework is now a reusable skill in our repos. Any designer can run it against any product surface — a landing page, an onboarding flow, a pricing page — and get a structured heuristic evaluation in minutes. It doesn't replace user research. It makes user research sharper, because you walk into interviews already knowing where to look.

But the bigger change is altitude.

Designers used to present mockups. Now they present strategic recommendations backed by evidence. The IA research didn't start as a design project — it started because two designers noticed a gap in the website and decided to figure out why it was there and what to do about it. They used AI to extend their reach, not to replace their judgement. The analysis was theirs. The recommendation was theirs. The AI helped them go faster, think broader, and show up to a product meeting with something nobody could dismiss.

That's what augmented research looks like. Not "AI did the research." Not "designers did the research and AI helped with formatting." Something in between: designers directing the inquiry, AI pressure-testing the hypotheses, and the final output being sharper than either could have produced alone.

---

## The pattern

Same pattern as every other post in this series:

**Identify bottleneck** → designers have strategic insights but lack the capacity to produce comprehensive competitive analyses at the speed product decisions require.

**Encode knowledge** → build the synthetic evaluation framework as a reusable skill. Persona schemas, walkthrough templates, severity scales, synthesis structure — all codified.

**Distribute** → the skill sits in a repo. Any designer loads it, provides a URL and audience description, and gets a structured evaluation in one session.

**Let go** → the framework runs without me. The IA research was led by two designers who decided what to investigate, directed the AI, and presented the findings. I wasn't in the room when they did the research. I was in the room when they presented — and the product lead changed his plans.

---

*Next: [Part 6 — The Knowledge Machine →](/the-augmented-team/the-knowledge-machine/)*
