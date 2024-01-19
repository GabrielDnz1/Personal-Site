// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/resume">RESUME</Link>
      </nav>
    </header>
  );
}

export default Header;
