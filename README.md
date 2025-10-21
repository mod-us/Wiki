# Sales Wiki

The canonical, open-source glossary for Sales Capacity & Performance.

## What is Sales Wiki?

Sales Wiki provides standardized definitions, formulas, and worked examples for sales operations terminology. Built by practitioners, for practitioners.

- **Clear Definitions**: No ambiguity
- **Explicit Formulas**: Show the math
- **Worked Examples**: Real calculations
- **Open Source**: MIT licensed, community-maintained

## Quick Start

### Installation

```bash
nvm install 20
nvm use 20
npm install
```

### Local Development

```bash
npm run start
```

This starts a local development server at `http://localhost:3000/`.

```bash
npm run build
```

Generates static content into the `build` directory.

## Contributing

We welcome contributions! See [CONTRIBUTING.md](./docs/contributing.md) for guidelines.

Quick ways to contribute:
1. Click "Edit this page" on any doc
2. Open an issue to suggest a new term
3. Fix typos or improve examples

## Project Structure

```
sales-wiki/
├── docs/                  # Documentation pages
│   ├── intro.md          # Getting started
│   ├── metrics/          # Metric definitions (RRE, efficiency, etc.)
│   ├── capacity/         # Capacity planning terms
│   ├── playbooks/        # Best practices and guides
│   ├── contributing.md   # Contribution guidelines
│   └── code-of-conduct.md
├── src/
│   ├── css/              # Custom styles
│   └── pages/            # Custom pages (landing page)
├── static/               # Static assets
└── docusaurus.config.ts  # Site configuration
```
