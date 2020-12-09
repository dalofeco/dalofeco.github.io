import { Link } from 'react-router-dom';
import React from 'react';

import '../styles/components/header.less';

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
  <header className="Header">
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
