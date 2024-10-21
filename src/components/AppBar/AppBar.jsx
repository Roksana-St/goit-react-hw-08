import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AppBar.module.css'; 

const AppBar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/login" className={styles.link}>Login</Link>
        <Link to="/register" className={styles.link}>Register</Link>
      </nav>
    </header>
  );
};

export default AppBar;
