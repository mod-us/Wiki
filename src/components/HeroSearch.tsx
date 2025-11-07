import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import search functions from the Docusaurus search plugin
import { searchByWorker, fetchIndexesByWorker } from '@easyops-cn/docusaurus-search-local/dist/client/client/theme/searchByWorker';

interface SearchResult {
  document: {
    i: number;
    t: string; // title
    u: string; // url
    b?: string[]; // breadcrumb
  };
  type: number;
  page: boolean;
  metadata?: any;
  tokens?: string[];
}

const HeroSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isIndexLoaded, setIsIndexLoaded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const { siteConfig: { baseUrl } } = useDocusaurusContext();

  // Load search index on mount
  useEffect(() => {
    const loadIndex = async () => {
      try {
        await fetchIndexesByWorker(baseUrl, '');
        setIsIndexLoaded(true);
      } catch (error) {
        console.error('❌ Failed to load search index:', error);
      }
    };
    loadIndex();
  }, [baseUrl]);

  // Perform search when query changes
  useEffect(() => {
    const performSearch = async () => {
      if (!query.trim() || !isIndexLoaded) {
        setResults([]);
        setIsOpen(false);
        return;
      }

      try {
        // Correct parameter order: baseUrl, searchContext, input, limit
        const searchResults = await searchByWorker(baseUrl, '', query, 10);
        setResults(searchResults || []);
        setIsOpen(searchResults && searchResults.length > 0);
        setSelectedIndex(0);
      } catch (error) {
        console.error('❌ Search failed:', error);
        setResults([]);
      }
    };

    const debounceTimer = setTimeout(performSearch, 150);
    return () => clearTimeout(debounceTimer);
  }, [query, isIndexLoaded, baseUrl]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev + 1) % results.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
          break;
        case 'Enter':
          e.preventDefault();
          if (results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          }
          break;
        case 'Escape':
          setIsOpen(false);
          inputRef.current?.blur();
          break;
      }
    },
    [isOpen, results, selectedIndex]
  );

  // Navigate to selected result
  const navigateToResult = (result: SearchResult) => {
    const url = result.document.u;
    history.push(url);
    setIsOpen(false);
    setQuery('');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Highlight matching text
  const highlightMatch = (text: string, query: string) => {
    if (!query) return text;

    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} style={{
          backgroundColor: '#fff7ed',
          color: '#ea580c',
          fontWeight: 600,
          padding: '0.125rem 0.25rem',
          borderRadius: '0.25rem'
        }}>
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', gap: '0.75rem', width: '100%', maxWidth: '100%' }}>
      {/* Search Input Container */}
      <div style={{ position: 'relative', flex: 1, maxWidth: '500px' }}>
        {/* Search Input */}
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '0.5rem 0.75rem',
          borderRadius: '0.75rem',
          border: isOpen ? '1px solid #ea580c' : '1px solid #e9e8ea',
          backgroundColor: isOpen ? '#fff7ed' : '#fafafa',
          transition: 'all 0.2s ease',
          boxShadow: isOpen ? '0 2px 4px 0 rgba(234, 88, 12, 0.1)' : 'none',
        }}
      >
        <svg
          style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, color: '#6b7280', strokeWidth: 2 }}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search the glossary..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query && setIsOpen(true)}
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            outline: 'none',
            padding: '0.375rem 0.75rem',
            fontSize: '0.875rem',
            color: '#1a1a1a',
          }}
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setResults([]);
              setIsOpen(false);
            }}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              borderRadius: '50%',
              color: '#9ca3af',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e9e8ea',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
            maxHeight: '400px',
            overflowY: 'auto',
            zIndex: 50,
            padding: '0.5rem',
          }}
        >
          {results.map((result, index) => {
            // Build context path: Breadcrumb › Page Title › Section
            const contextParts: string[] = [];

            // Add breadcrumb if available
            if (result.page?.b && result.page.b.length > 0) {
              contextParts.push(...result.page.b);
            } else if (result.document?.b && result.document.b.length > 0) {
              contextParts.push(...result.document.b);
            }

            // Add page title if this is a section (not the page itself)
            if (result.page && result.document.i !== result.page.i) {
              contextParts.push(result.page.t);
            }

            // Add section name if available
            if (result.document.s) {
              contextParts.push(result.document.s);
            }

            return (
              <div
                key={result.document.i}
                onClick={() => navigateToResult(result)}
                onMouseEnter={() => setSelectedIndex(index)}
                style={{
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  backgroundColor: index === selectedIndex ? '#fff7ed' : '#ffffff',
                  border: index === selectedIndex ? '1px solid #ea580c' : '1px solid transparent',
                  marginBottom: '0.25rem',
                  transition: 'all 0.15s ease',
                }}
              >
                {/* Main title with highlighted search terms */}
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#000000', marginBottom: '0.25rem' }}>
                  {highlightMatch(result.document.t, query)}
                </div>
                {/* Context path BELOW the title - lighter gray, no highlighting */}
                {contextParts.length > 0 && (
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    {contextParts.join(' › ')}
                  </div>
                )}
              </div>
            );
          })}

          {/* See all results link */}
          <div
            onClick={() => {
              history.push(`/search?q=${encodeURIComponent(query)}`);
              setIsOpen(false);
            }}
            style={{
              marginTop: '0.5rem',
              padding: '0.75rem',
              textAlign: 'center',
              fontSize: '0.875rem',
              color: '#ea580c',
              fontWeight: 500,
              cursor: 'pointer',
              borderTop: '1px solid #e9e8ea',
              borderRadius: '0 0 0.75rem 0.75rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff7ed';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            See all results for "{query}" →
          </div>
        </div>
      )}

      {/* No Results */}
      {isOpen && query && results.length === 0 && isIndexLoaded && (
        <div
          ref={dropdownRef}
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderRadius: '0.75rem',
            border: '1px solid #e9e8ea',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.15)',
            padding: '2rem',
            textAlign: 'center',
            zIndex: 50,
            color: '#6b7280',
          }}
        >
          No results found for "{query}"
        </div>
      )}
      </div>

      {/* Browse Button - navigates to selected/highlighted result */}
      <button
        onClick={() => {
          if (results.length > 0 && results[selectedIndex]) {
            navigateToResult(results[selectedIndex]);
          } else {
            history.push('/docs/intro');
          }
        }}
        style={{
          padding: '0.75rem 1.5rem',
          borderRadius: '0.5rem',
          border: 'none',
          backgroundColor: '#ea580c',
          fontSize: '0.875rem',
          fontWeight: 500,
          color: '#ffffff',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
          transition: 'background-color 0.2s',
          height: '100%',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#c74607')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#ea580c')}
      >
        {results.length > 0 ? 'Go to Result' : 'Browse'}
      </button>
    </div>
  );
};

export default HeroSearch;
