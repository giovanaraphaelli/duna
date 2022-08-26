import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.logo}>Duna</a>
      </Link>
      <ul className={click ? `${styles.list}` : `${styles.listDisable}`}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/casa-atreides">
            <a>Casa Atreides</a>
          </Link>
        </li>
        <li>
          <Link href="/casa-harkonnen">
            <a>Casa Harkonnen</a>
          </Link>
        </li>
        <li>
          <Link href="/terminologia">
            <a>Terminologia</a>
          </Link>
        </li>
      </ul>
      <div onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: '#fff', cursor: 'pointer' }} />
        ) : (
          <FaBars size={20} style={{ color: '#fff', cursor: 'pointer' }} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
