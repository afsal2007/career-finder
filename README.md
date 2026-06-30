# Pathfinder — AI Career Discovery Quiz

A 16-question branching quiz that helps people — especially those without a college degree or who left school after 10th/12th — discover a career direction that fits them, across **all industries**: tech, creative, skilled trades, and business.

This is the first building block of a larger project: an inclusive, LinkedIn-style professional network built for skill-based talent, not just degree holders.

## What it does

- Asks 16 questions, one at a time
- The first 4 questions **branch** — each answer leads to a genuinely different next question, narrowing from a broad area (Tech / Creative / Trade / Business) down to a specific niche (e.g. Web Development, Video Editing, Electrical Work, Sales)
- The remaining 12 questions refine *how* you like to work (solo vs team, hands-on vs desk, risk tolerance, etc.)
- At the end, you get a matched career category, a short explanation, and a list of real job roles to explore — with no requirement for a formal degree

> **Note:** This version is fully rule-based. It is **not yet connected to any AI/LLM API**. All explanations and job suggestions shown are pre-written, static text — not AI-generated. AI integration (Google Gemini, free tier) is planned but not implemented yet.

## Why this exists

Most career quizzes and job platforms assume a college path. This one doesn't. It's built to surface real opportunities for:
- 10th/12th std dropouts
- Self-taught and skill-based workers
- Anyone exploring a career change without going back to school

## Tech stack

- Plain HTML, CSS, and JavaScript — no frameworks, no build step
- No backend, and **no AI/LLM connected yet** — the quiz logic runs entirely in the browser using fixed rules and scoring
- Designed to be readable and easy for beginners to contribute to

## Project structure

```
career-quiz/
├── index.html     → page structure and markup
├── styles.css      → all visual styling
└── script.js       → quiz questions, branching logic, and scoring
```

## Running it locally

1. Clone this repo
2. Open `index.html` in any browser — that's it, no installation needed

## Roadmap

- [x] Branching quiz logic (16 questions, 4 main paths, 16+ niches)
- [x] Visual design pass
- [ ] Niche-specific job lists (currently grouped by broad category only)
- [ ] AI-generated explanation and job suggestions (Google Gemini API)
- [ ] Save/share quiz results
- [ ] Job board with a "no degree required" filter
- [ ] Profiles, connections, and messaging (LinkedIn-style features)
- [ ] Multi-language support

## Contributing

This project is in early, active development and contributions are welcome — especially:
- Adding more niches/branches to the quiz tree
- Writing niche-specific job descriptions
- Translating questions into other languages
- UI/UX improvements

Open an issue or submit a pull request.

## License

MIT — free to use, modify, and build on.
