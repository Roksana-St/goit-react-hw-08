import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'; 
import { logOut } from '../../redux/auth/operations'; 
import styles from './AppBar.module.css'; 

const AppBar = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  const handleLogout = () => {
    dispatch(logOut()); 
    navigate('/'); 
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/login" className={styles.link}>Login</Link>
        <Link to="/register" className={styles.link}>Register</Link>
        <button onClick={handleLogout} className={styles.link}>Logout</button>
      </nav>
    </header>
  );
};

export default AppBar;
