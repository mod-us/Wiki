import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

export default function NavbarLogo(): JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo?.src || '');
  const logoAlt = logo?.alt ?? title;

  return (
    <div className="navbar__brand">
      {/* Logo links to external site in new tab */}
      <a
        href="https://www.himodus.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar__logo"
      >
        {logo && (
          <img
            src={logoLink}
            alt={logoAlt}
            className={logo.className}
            style={{height: logo.height}}
          />
        )}
      </a>

      {/* Title links to home page in same tab */}
      {navbarTitle && (
        <Link to="/" className="navbar__title text--truncate">
          <b>{navbarTitle}</b>
        </Link>
      )}
    </div>
  );
}
