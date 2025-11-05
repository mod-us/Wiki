import React, { useState, useRef } from 'react';
import styles from './EditOptionsDropdown.module.css';

interface EditOptionsDropdownProps {
  editUrl?: string;
}

export default function EditOptionsDropdown({ editUrl }: EditOptionsDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLScrmWMCFtVfhCd5McZKIt86izOXB9Fdsh9qD_6LNCkXjk1x9Q/viewform';

  const handleMouseEnter = () => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing
    closeTimeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div
      className={styles.editOptionsContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.editButton}>
        <svg className={styles.editIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
        </svg>
        Edit this page
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          <a
            href={editUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dropdownItem}
          >
            <svg className={styles.optionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <div className={styles.optionContent}>
              <span className={styles.optionTitle}>Edit on GitHub</span>
              <span className={styles.optionDesc}>Open a pull request directly</span>
            </div>
          </a>

          <a
            href={googleFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dropdownItem}
          >
            <svg className={styles.optionIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <div className={styles.optionContent}>
              <span className={styles.optionTitle}>Suggest via Form</span>
              <span className={styles.optionDesc}>Submit feedback without GitHub</span>
            </div>
          </a>
        </div>
      )}
    </div>
  );
}
