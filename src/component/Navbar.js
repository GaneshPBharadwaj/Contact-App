import React from 'react';
import { Link } from "react-router-dom";
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.container}>
          <div className={styles.containerfluid}>
            <h1>Contact App</h1>
            <div className={styles.links}>
              <Link to="/">
                <button className={styles.home}>Home</button>
              </Link>
              <Link to="/add">
                <button>Add Contact</button>
              </Link>
            </div>
          </div>
        </nav>
      );
}

export default Navbar