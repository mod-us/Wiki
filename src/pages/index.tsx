import { useState, useEffect } from "react";
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Fuse from 'fuse.js';
import glossaryTermsData from '../data/glossaryTerms.json';
import HeroSearch from '../components/HeroSearch';

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
  const [aiQuery, setAiQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  
  // Get all glossary terms from our generated JSON
  const allTerms = glossaryTermsData;
  
  // Featured/popular terms to show when no search is active
  const popularTerms = [
    "RRE (Ramped Rep Equivalent)",
    "Recovered Gap",
    "Unrecovered Gap",
    "Sales Efficiency Ratio",
    "Territory Planning Basics",
    "Attrition Rate"
  ];
  
  // Initialize Fuse instance for fuzzy search
  const fuse = new Fuse(allTerms, {
    keys: ['title', 'desc'],
    threshold: 0.4,
    ignoreLocation: true
  });
  
  // Update search results when query changes
  useEffect(() => {
    if (!query) {
      // Show popular terms when no search query
      const featured = allTerms.filter(term => 
        popularTerms.includes(term.title)
      );
      setSearchResults(featured);
    } else {
      // Perform fuzzy search
      const results = fuse.search(query).map(result => result.item);
      setSearchResults(results);
    }
  }, [query]);

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
                {/* OLD SEARCH BAR - Commented out in favor of Docusaurus native search
                <div className="search-container">
                  <div className="search-box">
                    <svg className="sparkles-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 22.5l-.394-1.933a2.25 2.25 0 00-1.423-1.423L12.75 18.75l1.933-.394a2.25 2.25 0 001.423-1.423l.394-1.933.394 1.933a2.25 2.25 0 001.423 1.423l1.933.394-1.933.394a2.25 2.25 0 00-1.423 1.423z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input
                      // AI input temporarily repurposed to glossary search; restore when AI is ready
                      // placeholder="Ask AI about benchmarks... e.g., 'What's the average AE ramp time?'"
                      placeholder="Search the glossary... e.g., 'AE ramp time'"
                      value={aiQuery}
                      onChange={e => setAiQuery(e.target.value)}
                      onKeyPress={e => {
                        if (e.key === 'Enter') {
                          if (aiQuery.trim()) {
                            // Try to find a direct match first
                            const directMatch = allTerms.find(term =>
                              term.title.toLowerCase() === aiQuery.trim().toLowerCase()
                            );

                            if (directMatch) {
                              // If we have an exact match, go directly to that page
                              window.location.href = directMatch.link;
                            } else {
                              // Otherwise, search in the glossary
                              window.location.href = `/sales-wiki/docs/intro?q=${encodeURIComponent(aiQuery)}`;
                            }
                          } else {
                            window.location.href = `/sales-wiki/docs/intro`;
                          }
                        }
                      }}
                      className="search-input"
                    />
                  </div>
                  <button
                    onClick={() => {
                      if (aiQuery.trim()) {
                        // Try to find a direct match first
                        const directMatch = allTerms.find(term =>
                          term.title.toLowerCase() === aiQuery.trim().toLowerCase()
                        );

                        if (directMatch) {
                          // If we have an exact match, go directly to that page
                          window.location.href = directMatch.link;
                        } else {
                          // Otherwise, search in the glossary
                          window.location.href = `/sales-wiki/docs/intro?q=${encodeURIComponent(aiQuery)}`;
                        }
                      } else {
                        window.location.href = `/sales-wiki/docs/intro`;
                      }
                    }}
                    className="browse-button"
                  >
                    Browse
                  </button>
                </div>
                */}

                {/* NEW: Functional hero search component */}
                <div className="search-container">
                  <HeroSearch />
                </div>
                <div className="hero-links">
                  <a href="https://github.com/mod-us/Wiki" target="_blank" rel="noopener noreferrer" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M3 7V5a2 2 0 0 1 2-2h2"></path>
                      <path d="M17 3h2a2 2 0 0 1 2 2v2"></path>
                      <path d="M21 17v2a2 2 0 0 1-2 2h-2"></path>
                      <path d="M7 21H5a2 2 0 0 1-2-2v-2"></path>
                    </svg>
                    Edit on GitHub
                  </a>
                  <a href="mailto:hello@himodus.com" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"></path>
                      <path d="m22 6-10 7L2 6"></path>
                    </svg>
                    Report issues
                  </a>
                  {/* Temporarily using Google Form instead of #contribute page */}
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScrmWMCFtVfhCd5McZKIt86izOXB9Fdsh9qD_6LNCkXjk1x9Q/viewform" target="_blank" rel="noopener noreferrer" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Suggest an edit
                  </a>
                  {/* Original link to contribute page - restore when ready:
                  <a href="#contribute" className="hero-link-item">
                    <svg className="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Suggest an edit
                  </a>
                  */}
                </div>
              </div>

              {/* Highlight panel */}
                <div className="highlight-panel">
                <div className="highlight-panel-header">
                  {/* <h3 className="highlight-panel-title">Common questions to ask AI</h3> */}
                  <h3 className="highlight-panel-title">Common glossary questions</h3>
                  {/** Temporarily hiding AI Agent CTA until AI is enabled */}
                  {/**
                  <Link to="/benchmark-qa" className="ask-ai-button">
                    <svg className="ask-ai-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                      <circle cx="8" cy="8" r="6" strokeWidth="1.5"></circle>
                      <path d="M8 5v3m0 3h.01" strokeWidth="1.5" strokeLinecap="round"></path>
                    </svg>
                    Ask AI Agent
                    <svg className="ask-ai-arrow" viewBox="0 0 16 16" fill="none" stroke="currentColor">
                      <path d="M6 4l4 4-4 4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </Link>
                  */}
                </div>
                <div className="highlight-grid">
                  {/** Keep AI benchmark links for later enablement
                  <Link to="/benchmark-qa?q=What's the industry benchmark for sales rep ramp time?" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">What's the industry benchmark for sales rep ramp time?</p>
                  </Link>
                  */}
                  <Link to="/docs/metrics/rre" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">What's the industry benchmark for sales rep ramp time?</p>
                  </Link>

                  {/** Keep AI benchmark links for later enablement
                  <Link to="/benchmark-qa?q=How do I calculate my team's current capacity vs target?" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">How do I calculate my team's current capacity vs target?</p>
                  </Link>
                  */}
                  <Link to="/docs/capacity/gap-to-target" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">How do I calculate my team's current capacity vs target?</p>
                  </Link>

                  {/** Keep AI benchmark links for later enablement
                  <Link to="/benchmark-qa?q=What's a good CAC payback period for our ARR?" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">What's a good CAC payback period for our ARR?</p>
                  </Link>
                  */}
                  <Link to="/docs/metrics/sales-efficiency-ratio" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">What's a good CAC payback period for our ARR?</p>
                  </Link>

                  {/** Keep AI benchmark links for later enablement
                  <Link to="/benchmark-qa?q=How should I structure my sales territories?" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">How should I structure my sales territories?</p>
                  </Link>
                  */}
                  <Link to="/docs/playbooks/territory-planning" className="highlight-card highlight-card-link">
                    <p className="highlight-desc">How should I structure my sales territories?</p>
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
            {/* Temporarily commented out - Search and Browse all functionality */}
            {/* <div className="section-header-actions">
              <div className="glossary-search-box">
                <svg className="search-icon-small" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  placeholder="Search glossary..."
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  className="glossary-search-input"
                />
                {query && (
                  <button
                    onClick={() => setQuery('')}
                    className="clear-search-button"
                    aria-label="Clear search"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none">
                      <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                )}
              </div>
              <Link to="/docs/intro" className="see-all-link">Browse all</Link>
            </div> */}
          </div>
          <div className="terms-grid">
            {searchResults.length > 0 ? (
              searchResults.map((term, i) => (
                <Card key={i} title={term.title} desc={term.desc} pill={term.pill} link={term.link} />
              ))
            ) : (
              <div className="no-results">
                <p>No matching terms found. Try a different search or <Link to="/docs/intro">browse all terms</Link>.</p>
              </div>
            )}
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
          </div>
        </main>
      </div>
    </Layout>
  );
}
