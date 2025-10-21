import { useState } from "react";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

// Simple card component
function Card({ title, desc, pill, link }) {
  return (
    <Link to={link} className="card-link">
      <div className="term-card">
        <div className="card-header">
          <h3 className="card-title">{title}</h3>
          {pill && (
            <span className="card-pill">{pill}</span>
          )}
        </div>
        <p className="card-desc">{desc}</p>
        <div className="card-footer">
          <span>Open</span>
          <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default function SalesWikiHome() {
  const [query, setQuery] = useState("");

  const sampleTerms = [
    {
      title: "RRE (Ramped Rep Equivalent)",
      desc: "Convert partially ramped reps into fully ramped equivalents for clean capacity math.",
      pill: "Metric",
      link: "/docs/metrics/rre"
    },
    {
      title: "Recovered Gap",
      desc: "Portion of lost capacity regained via backfills, transfers, or ramp within the window.",
      pill: "Capacity",
      link: "/docs/capacity/recovered-gap"
    },
    {
      title: "Unrecovered Gap",
      desc: "Lost capacity not recovered within the measurement window (in $ or RRE).",
      pill: "Capacity",
      link: "/docs/capacity/unrecovered-gap"
    },
    {
      title: "Sales Efficiency Ratio",
      desc: "Revenue growth per dollar of S&M spend. Spell out the exact variant used.",
      pill: "Ratio",
      link: "/docs/metrics/efficiency-ratio"
    },
    {
      title: "Territory Planning Basics",
      desc: "Balance potential, ramp, and role mix. Revisit quarterly. Document diffs.",
      pill: "Playbook",
      link: "/docs/playbooks/territory-planning"
    },
  ];

  const filtered = sampleTerms.filter(s =>
    !query || s.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout
      title="Sales Wiki"
      description="The canonical, open-source glossary for Sales Capacity & Performance">

      <div className="wiki-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-gradient" />
          <div className="hero-content">
            <div className="hero-grid">
              <div className="hero-left">
                <div className="hero-badge">
                  <svg className="sparkles-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"/>
                  </svg>
                  Open, neutral, source-first
                </div>
                <h1 className="hero-title">
                  The canonical, open-source glossary for{" "}
                  <span className="hero-highlight">Sales Capacity & Performance</span>
                </h1>
                <p className="hero-subtitle">
                  Clear definitions. Explicit formulas. Worked examples. Written by and for RevOps, Sales, and Finance.
                </p>
                <div className="search-container">
                  <div className="search-box">
                    <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input
                      placeholder="Search terms e.g. RRE, recovered gap…"
                      value={query}
                      onChange={e => setQuery(e.target.value)}
                      className="search-input"
                    />
                  </div>
                  <Link to="/docs/intro" className="browse-button">
                    Browse Glossary
                  </Link>
                </div>
                <div className="hero-links">
                  <div className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                    </svg>
                    MIT Licensed
                  </div>
                  <a href="https://github.com/your-org/sales-wiki" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                    </svg>
                    Edit on GitHub
                  </a>
                  <a href="#contribute" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Suggest an edit
                  </a>
                </div>
              </div>

              {/* Highlight panel */}
              <div className="highlight-panel">
                <div className="highlight-grid">
                  <Link to="/docs/foundations" className="highlight-card">
                    <p className="highlight-label">Getting started</p>
                    <p className="highlight-title">Foundations</p>
                    <p className="highlight-desc">Headcount vs Capacity, Ramp curves</p>
                  </Link>
                  <Link to="/docs/metrics/rre" className="highlight-card">
                    <p className="highlight-label">Key metric</p>
                    <p className="highlight-title">RRE</p>
                    <p className="highlight-desc">How to compute, examples, pitfalls</p>
                  </Link>
                  <Link to="/docs/capacity/gaps" className="highlight-card">
                    <p className="highlight-label">Capacity</p>
                    <p className="highlight-title">Recovered vs Unrecovered Gap</p>
                    <p className="highlight-desc">Backfill timing and lag effects</p>
                  </Link>
                  <Link to="/docs/playbooks/territory-design" className="highlight-card">
                    <p className="highlight-label">Playbooks</p>
                    <p className="highlight-title">Territory Design</p>
                    <p className="highlight-desc">Coverage models & quarterly reviews</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content grid */}
        <main className="main-content">
          <div className="section-header">
            <h2 className="section-title">Popular terms</h2>
            <Link to="/docs/intro" className="see-all-link">See all</Link>
          </div>
          <div className="terms-grid">
            {filtered.map((s, i) => (
              <Card key={i} title={s.title} desc={s.desc} pill={s.pill} link={s.link} />
            ))}
          </div>

          <div className="info-grid">
            <div className="info-card info-card-large">
              <h3 className="info-title">How contributions work</h3>
              <ol className="contribution-list">
                <li>Click <span className="text-accent">Edit this page</span> to open a PR on GitHub.</li>
                <li>No GitHub? Use <span className="text-accent">Suggest an edit</span> to submit a form; we'll convert it into an Issue.</li>
                <li>Every new/updated term must include Definition, Formula, Example, References.</li>
              </ol>
            </div>
            <div className="info-card">
              <h3 className="info-title">Design tokens</h3>
              <ul className="token-list">
                <li><span className="token-key">Colors:</span> Slate 900–950 base, Blue accents</li>
                <li><span className="token-key">Type:</span> System sans (interchangeable with Inter)</li>
                <li><span className="token-key">Corners:</span> rounded-2xl, soft shadows</li>
                <li><span className="token-key">Layout:</span> max-w-6xl, roomy padding</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
