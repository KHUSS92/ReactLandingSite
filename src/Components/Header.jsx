import React from 'react';

function Header() {
  return (
    <header className="header">
      <h1>Welcome to the Grimoire Landing Site</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Default export for correct importing
export default Header;
